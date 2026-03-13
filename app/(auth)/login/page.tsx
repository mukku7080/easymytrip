"use client";

import { IoDiamondOutline } from "react-icons/io5";
import { LuBaggageClaim, LuHeart } from "react-icons/lu";
import { useState } from "react";
import { FaChrome } from "react-icons/fa";
import { FiUserPlus } from "react-icons/fi";
import { LuBadgePercent } from "react-icons/lu";
import { MdSecurity } from "react-icons/md";

import { toast } from "sonner";
import { auth, db, googleProvider } from "@/firebase";
import { RecaptchaVerifier, signInWithPhoneNumber, ConfirmationResult, signInWithPopup } from "firebase/auth";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";


const LoginPage = () => {
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
        <div className="bg-background-500 min-h-screen">

            <div className="max-w-[1100px] mx-auto py-16 px-4">

                <div className="flex gap-12 items-stretch flex-col md:flex-row">

                    {/* LEFT INFO */}
                    <div className="flex-1">

                        <h1 className="text-3xl font-bold mb-6">
                            manage your trips
                        </h1>

                        <div className="flex flex-col gap-6">

                            <InfoItem
                                title="Easily manage your bookings"
                                desc="View confirmation details, make changes, or cancel if needed."
                                icon={<LuBaggageClaim className="text-primary-500 text-xl" />}
                            />

                            <InfoItem
                                title="Save more with Genius"
                                desc="Get up to 20% off with our loyalty program just by signing in."
                                icon={<IoDiamondOutline className="text-primary-500 text-xl" />}
                            />

                            <InfoItem
                                title="Your favorite, saved"
                                desc="Keep track of the properties you love and want to book again."
                                icon={<LuHeart className="text-primary-500 text-xl" />}
                            />

                            <InfoItem
                                title="Manage all your bookings"
                                desc="View, change, or cancel your stays and trips in one place."
                                icon={<FiUserPlus className="text-primary-500 text-xl" />}
                            />

                            <InfoItem
                                title="Unlock Genius rewards"
                                desc="Get instant discounts and member-only deals."
                                icon={<LuBadgePercent className="text-primary-500 text-xl" />}
                            />

                            <InfoItem
                                title="Secure and fast checkout"
                                desc="Save your details safely for faster bookings."
                                icon={<MdSecurity className="text-primary-500 text-xl" />}
                            />

                        </div>
                    </div>

                    {/* RIGHT FORM */}
                    {/* <div className="w-full md:w-[420px] bg-white p-8 rounded-lg border border-gray-200">

                        <h2 className="text-2xl font-bold mb-2">
                            Sign in to your account
                        </h2>

                        <p className="text-muted-500 mb-6 text-sm">
                            Access your account securely using your email and password.
                        </p>

                        <div className="flex flex-col">

                            <FormField
                                label="Email address"
                                placeholder="name@example.com"
                            />

                            <FormField
                                label="Password"
                                placeholder="••••••••"
                                type="password"
                            />

                            <a
                                className="text-xs text-primary-500 mb-4"
                                href="/login"
                            >
                                Forget your password?
                            </a>

                        </div>

                        <button className="bg-primary-500 text-white w-full mt-2 py-3 rounded-md font-medium">
                            Sign in
                        </button>

                        <hr className="my-6" />

                        <button className="w-full border border-gray-300 py-3 rounded-md flex items-center justify-center gap-2 text-primary-500 mb-3">
                            <FaChrome className="text-primary-500" />
                            Continue with Google
                        </button>

                        <p className="mt-6 text-sm text-center text-muted-500">
                            Don't have any account?{" "}
                            <a className="text-primary-500 font-semibold">
                                Create account
                            </a>
                        </p>

                    </div> */}
                    <div className="w-full md:w-[420px] bg-white p-10 rounded-lg border border-gray-200 shadow-lg">

                        <h2 className="text-2xl font-bold mb-2">
                          Sign in or create your Travelo account
                        </h2>

                        <p className="text-sm text-gray-500 mb-8">
                           Sign in or create an account using your mobile number.
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
                            We never share your phone number with anyone.
                            {/* <span className="text-primary-500 font-semibold ml-1 cursor-pointer">
                                Sign in
                            </span> */}
                        </p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;

const InfoItem = ({
    title,
    desc,
    icon,
}: {
    title: string;
    desc: string;
    icon: React.ReactNode;
}) => (
    <div className="flex gap-4">

        <div className="w-[40px] h-[40px] bg-secondary-500 rounded-full flex items-center justify-center">
            {icon}
        </div>

        <div>
            <h3 className="font-semibold text-lg">
                {title}
            </h3>

            <p className="text-muted-500 text-sm">
                {desc}
            </p>
        </div>

    </div>
);


const FormField = ({
    label,
    placeholder,
    type = "text",
}: {
    label: string;
    placeholder: string;
    type?: string;
}) => (
    <div className="mb-4">

        <p className="text-sm font-medium mb-1">
            {label}
        </p>

        <input
            type={type}
            placeholder={placeholder}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
        />

    </div>
);