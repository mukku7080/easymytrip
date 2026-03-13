"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

export const Navbar = () => {
    const router = useRouter();

    return (
        <div className="bg-[#0664b1] text-white">
            <div className="max-w-[1100px] mx-auto px-4 py-3 flex flex-col md:flex-row md:items-center justify-between gap-3 md:gap-0">

                {/* Logo */}
                <div
                    className="text-xl font-bold cursor-pointer"
                    onClick={() => router.push("/")}
                >
                    Travelo.com
                </div>

                {/* Right Section */}
                <div className="flex flex-wrap gap-3 md:justify-end">

                    {/* Currency */}
                    <button className="text-sm bg-primary-400 text-white px-3 py-1 rounded-md">
                        INR
                    </button>

                    {/* Avatar */}
                    <button className="bg-primary-400 px-2 py-1 rounded-md">
                        <div className="flex -space-x-2">
                            <img
                                className="w-6 h-6 rounded-full border border-white"
                                src="https://i.pravatar.cc/40"
                                alt="avatar"
                            />
                        </div>
                    </button>

                    {/* List Property */}
                    <Link href="/list-property">
                        <button className="text-sm bg-primary-400 text-white px-3 py-1 rounded-md">
                            List your property
                        </button>
                    </Link>

                    {/* Sign in */}
                    <button
                        className="text-sm  bg-white text-primary-500 px-3 py-1 rounded-md"
                        onClick={() => router.push("/login")}
                    >
                        {/* Sign in */}
                        Sign in or create an account
                    </button>

                    {/* Sign up */}
                    {/* <button
                        className="text-sm bg-white text-primary-500 px-3 py-1 rounded-md"
                        onClick={() => router.push("/register")}
                    >
                        Sign up
                    </button> */}

                </div>
            </div>
        </div>
    );
};