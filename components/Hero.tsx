"use client";

const Hero = () => {
    return (
        <div
            className="bg-cover bg-center bg-no-repeat text-white"
            style={{
                backgroundImage:
                    "url('https://t3.ftcdn.net/jpg/06/42/07/32/360_F_642073280_7hjhjjfnSMVznuElskg9n55g6zNKIKnx.jpg')",
            }}
        >
            <div className="max-w-[1100px] mx-auto px-4 py-12 md:py-20">

                <h1 className="text-[28px] md:text-[48px] mb-5 font-bold">
                    Find your next stay
                </h1>

                <p className="text-md md:text-xl opacity-90">
                    Search low prices on hotels, homes and much more...
                </p>

            </div>
        </div>
    );
};

export default Hero;