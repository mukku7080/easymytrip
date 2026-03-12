"use client";

import { FaChrome } from "react-icons/fa";
import { IoDiamondOutline } from "react-icons/io5";
import { LuBaggageClaim, LuHeart } from "react-icons/lu";

const LoginPage = () => {
    return (
        <div className="bg-background-500 min-h-screen">

            <div className="max-w-[1100px] mx-auto py-16 px-4">

                <div className="flex gap-12 items-stretch flex-col md:flex-row">

                    {/* LEFT INFO */}
                    <div className="flex-1">

                        <h1 className="text-3xl font-bold mb-6">
                            Log in to manage your trips
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

                        </div>
                    </div>

                    {/* RIGHT FORM */}
                    <div className="w-full md:w-[420px] bg-white p-8 rounded-lg border border-gray-200">

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