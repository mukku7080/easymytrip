"use client";

const footerLinks = [
    {
        title: "Support",
        links: [
            "Manage your trips",
            "Contact Customer Service",
            "Safety Resource Center",
        ],
    },
    {
        title: "Discover",
        links: [
            "Genius loyalty program",
            "Seasonal and holiday deals",
            "Travel articles",
            "Booking.com for Business",
            "Traveller Review Awards",
        ],
    },
    {
        title: "Terms & Settings",
        links: [
            "Privacy & cookies",
            "Terms and conditions",
            "MSA Statement",
            "Human Rights Statement",
        ],
    },
    {
        title: "Partners",
        links: [
            "Extranet login",
            "Partner help",
            "List your property",
            "Become an affiliate",
        ],
    },
    {
        title: "About",
        links: [
            "About Booking.com",
            "How we work",
            "Sustainability",
            "Press center",
            "Careers",
            "Corporate contact",
        ],
    },
];

const Footer = () => {
    return (
        <footer className="w-full">

            {/* ================= Newsletter ================= */}
            <div className="bg-[#00224f] py-12 text-white">
                <div className="max-w-[1100px] mx-auto text-center px-4">

                    <h2 className="text-3xl font-medium mb-2">
                        Save time, save money !
                    </h2>

                    <p className="text-sm text-gray-300 mb-6">
                        Sign up and we'll send the best deals to you
                    </p>

                    <div className="max-w-[600px] mx-auto flex flex-col md:flex-row gap-2">
                        <input
                            type="email"
                            placeholder="Your email address"
                            className="bg-white text-black px-3 py-2 rounded-md w-full"
                        />

                        <button className="bg-primary-500 text-white px-4 py-2 rounded-md">
                            Subscribe
                        </button>
                    </div>

                </div>
            </div>

            {/* ================= Links ================= */}
            <div className="bg-background-500 py-12 border-t border-gray-200">
                <div className="max-w-[1100px] mx-auto px-4">

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
                        {footerLinks.map((group) => (
                            <div key={group.title}>

                                <h3 className="text-md font-semibold mb-4">
                                    {group.title}
                                </h3>

                                <div className="flex flex-col gap-3">
                                    {group.links.map((link) => (
                                        <a
                                            key={link}
                                            className="text-sm text-blue-600 font-medium hover:underline cursor-pointer"
                                        >
                                            {link}
                                        </a>
                                    ))}
                                </div>

                            </div>
                        ))}
                    </div>

                </div>
            </div>

            {/* ================= Bottom ================= */}
            <div className="bg-white py-10 border-t border-gray-200">
                <div className="max-w-[1100px] mx-auto px-4">

                    {/* Partner logos */}
                    <div className="flex justify-center flex-wrap gap-6 opacity-60 mb-6">
                        {[
                            "Partner1.com",
                            "Partner2.com",
                            "Partner3.com",
                            "Partner4.com",
                            "Partner5.com",
                            "Partner6.com",
                        ].map((brand) => (
                            <p key={brand} className="font-bold text-primary-500">
                                {brand}
                            </p>
                        ))}
                    </div>

                    <hr />

                    {/* Social */}
                    <div className="flex justify-center gap-6 my-6">
                        {["Facebook", "Twitter", "Instagram", "YouTube"].map((social) => (
                            <a key={social} className="text-sm cursor-pointer hover:underline">
                                {social}
                            </a>
                        ))}
                    </div>

                    {/* Copyright */}
                    <p className="text-xs text-center text-gray-600">
                        Copyright © 1996–2025 Travelo.com™. All rights reserved.
                    </p>

                    <p className="text-xs text-center text-gray-500 mt-2">
                        The world leader in online travel and related services.
                    </p>

                </div>
            </div>

        </footer>
    );
};

export default Footer;