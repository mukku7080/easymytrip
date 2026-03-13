"use client";

import { useState } from "react";
import { FaChrome } from "react-icons/fa";
import { FiUserPlus } from "react-icons/fi";
import { LuBadgePercent } from "react-icons/lu";
import { MdSecurity } from "react-icons/md";
import { toast } from "sonner";
import { auth, db, googleProvider } from "@/firebase";
import { RecaptchaVerifier, signInWithPhoneNumber, ConfirmationResult, signInWithPopup } from "firebase/auth";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
const Page = () => {
    const OTP_LENGTH = 6;

    const [phone, setPhone] = useState("");
    const [otp, setOtp] = useState(Array(OTP_LENGTH).fill(""));
    const [confirmationResult, setConfirmationResult] =
        useState<ConfirmationResult | null>(null);

    const [sendloading, setSendLoading] = useState(false);
    const [verifyloading, setVerifyLoading] = useState(false);

    const setupRecaptcha = () => {
        if (typeof window === "undefined") return;

        if (!(window as any).recaptchaVerifier) {
            if (!auth) {
                toast.error("Authentication service not available");
                return;
            }
            const verifier = new RecaptchaVerifier(
                auth,
                "recaptcha-container",
                { size: "invisible" }
            );

            (window as any).recaptchaVerifier = verifier;
        }
    };

    const sendOtp = async () => {
        if (!phone) {
            toast.warning("Enter phone number");
            return;
        }

        setSendLoading(true);
        setupRecaptcha();

        try {
            const appVerifier = (window as any).recaptchaVerifier;

            const result = await signInWithPhoneNumber(auth!, phone, appVerifier);

            setConfirmationResult(result);

            toast.success("OTP Sent Successfully 🚀");
        } catch (error: any) {
            toast.error(
                error.message
            );
        } finally {
            setSendLoading(false);
        }
    };

    const verifyOtp = async () => {
        if (!otp || !confirmationResult) {
            toast.warning("Enter OTP");
            return;
        }

        setVerifyLoading(true);

        try {
            const otpString = otp.join("");

            const userCredential = await confirmationResult.confirm(otpString);
            const user = userCredential.user;

            await setDoc(
                doc(db, "users", user.uid),
                {
                    uid: user.uid,
                    phone: user.phoneNumber,
                    createdAt: serverTimestamp(),
                    isOnline: true,
                },
                { merge: true }
            );

            toast.success("Login Successful 🎉");
        } catch {
            toast.error("Invalid OTP");

        } finally {
            setVerifyLoading(false);
        }
    };


    const loginWithGoogle = async () => {
        try {
            const result = await signInWithPopup(auth!, googleProvider);

            const user = result.user;

            toast.success("Login Successful 🎉");
            await setDoc(
                doc(db, "users", user.uid),
                {
                    uid: user.uid,
                    name: user.displayName,
                    email: user.email,
                    photo: user.photoURL,
                    createdAt: serverTimestamp(),
                },
                { merge: true }
            );

            console.log(user);

        } catch (error: any) {
            toast.error(error.message);
        }
    };
    return (
        <div className="w-full min-h-screen bg-background-500">

            <div className="max-w-[1100px] mx-auto py-16 px-4">

                <div className="flex flex-col md:flex-row gap-12 items-stretch">

                    {/* LEFT SIDE */}
                    <div className="flex-1">

                        <h1 className="text-3xl font-bold mb-6">
                            Create your Travelo.com account
                        </h1>

                        <div className="flex flex-col gap-6">

                            <InfoItem
                                description="Manage all your bookings"
                                desc="View, change, or cancel your stays and trips in one place."
                                icon={<FiUserPlus className="text-primary-500 text-xl" />}
                            />

                            <InfoItem
                                description="Unlock Genius rewards"
                                desc="Get instant discounts and member-only deals."
                                icon={<LuBadgePercent className="text-primary-500 text-xl" />}
                            />

                            <InfoItem
                                description="Secure and fast checkout"
                                desc="Save your details safely for faster bookings."
                                icon={<MdSecurity className="text-primary-500 text-xl" />}
                            />

                        </div>
                    </div>

                    {/* RIGHT CARD */}
                    <div className="w-full md:w-[420px] bg-white p-10 rounded-lg border border-gray-200 shadow-lg">

                        <h2 className="text-2xl font-bold mb-2">
                            Create account with mobile
                        </h2>

                        <p className="text-sm text-gray-500 mb-8">
                            Register using your mobile number and verify with OTP.
                        </p>

                        {/* Phone */}
                        <div className="mb-5">
                            <label className="text-sm font-medium mb-2 block">
                                Mobile number
                            </label>

                            <input
                                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-primary-500"
                                placeholder="+91 98765 43210"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                            />
                        </div>

                        <button
                            onClick={sendOtp}
                            className="w-full bg-primary-500 text-white py-3 rounded-md mb-5"
                        >
                            {sendloading ? "Sending..." : "Send OTP"}
                        </button>

                        {/* OTP */}
                        <div className="mb-5">

                            <label className="text-sm font-medium mb-2 block">
                                Enter OTP
                            </label>

                            <div className="flex gap-2">
                                {otp.map((digit, i) => (
                                    <input
                                        key={i}
                                        maxLength={1}
                                        value={digit}
                                        onChange={(e) => {
                                            const newOtp = [...otp];
                                            newOtp[i] = e.target.value;
                                            setOtp(newOtp);
                                        }}
                                        className="w-10 h-10 border border-gray-300 text-center rounded-md"
                                    />
                                ))}
                            </div>

                        </div>

                        <button
                            onClick={verifyOtp}
                            className="w-full bg-primary-500 text-white py-3 rounded-md"
                        >
                            {verifyloading ? "Verifying..." : "Verify & Continue"}
                        </button>

                        <hr className="my-8" />

                            <button onClick={loginWithGoogle} className="w-full border border-gray-300 py-3 rounded-md flex items-center justify-center gap-2 text-primary-500 mb-3">
                            <FaChrome className="text-primary-500" />
                            Continue with Google
                        </button>

                        <div id="recaptcha-container"></div>

                        <p className="text-sm text-gray-500 text-center mt-4">
                            Already have an account?
                            <span className="text-primary-500 font-semibold ml-1 cursor-pointer">
                                Sign in
                            </span>
                        </p>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Page;
const InfoItem = ({ description, desc, icon }: any) => (
    <div className="flex gap-4">

        <div className="w-10 h-10 bg-secondary-500 rounded-full flex items-center justify-center">
            {icon}
        </div>

        <div>
            <h3 className="font-semibold text-lg">
                {description}
            </h3>

            <p className="text-muted-500 text-sm">
                {desc}
            </p>
        </div>

    </div>
);