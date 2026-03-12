"use client";

import { FaRegStar, FaRegThumbsUp } from "react-icons/fa";
import SearchWidget from "../../../components/SearchWidget";

export default function HotelListingPage() {

    const hotels = [
        {
            id: 1,
            name: "The President Hotel",
            stars: 5,
            location: "Cuffe Parade, Mumbai · 2.5 km from center",
            reviewLabel: "Superb",
            reviewCount: "1240 reviews",
            rating: 9.2,
            price: "₹15,200",
            image:
                "https://images.unsplash.com/photo-1566073771259-6a8506099945",
        },
        {
            id: 2,
            name: "Grand Central Resort",
            stars: 4,
            location: "Bandra West, Mumbai · 8 km from center",
            reviewLabel: "Very good",
            reviewCount: "124 reviews",
            rating: 8.5,
            price: "₹9,500",
            image:
                "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa",
        },
        {
            id: 3,
            name: "Sea View Boutique Hotel",
            stars: 3,
            location: "Juhu Beach, Mumbai · 12 km from center",
            reviewLabel: "Nice",
            reviewCount: "140 reviews",
            rating: 7.8,
            price: "₹5,400",
            image:
                "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb",
        },
    ];

    return (
        <div className="bg-gray-100 min-h-screen">

            {/* HEADER SEARCH */}
            <div className="bg-footerdark-500 py-6">
                <div className="mx-auto mt-0 md:mt-14 p-4 flex gap-3">
                    <SearchWidget />
                </div>
            </div>

            {/* MAIN CONTENT */}
            <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-6 max-w-[1200px] mx-auto mt-6 px-4">

                {/* FILTER SIDEBAR */}
                <div className="bg-white p-5 rounded-md shadow-sm">

                    <p className="font-bold mb-4">Filter by:</p>

                    <p className="text-sm mb-2">Your budget (per night)</p>

                    <input type="range" className="w-full" />

                    {/* STAR RATING */}
                    <p className="font-semibold mt-6 mb-2">Star rating</p>

                    <div className="flex flex-col gap-2">
                        <label className="flex gap-2 items-center">
                            <input type="checkbox" />
                            5 stars
                        </label>

                        <label className="flex gap-2 items-center">
                            <input type="checkbox" />
                            4 stars
                        </label>

                        <label className="flex gap-2 items-center">
                            <input type="checkbox" />
                            3 stars
                        </label>
                    </div>

                    {/* FACILITIES */}
                    <p className="font-semibold mt-6 mb-2">Facilities</p>

                    <div className="flex flex-col gap-2">
                        <label className="flex gap-2 items-center">
                            <input type="checkbox" />
                            Free WiFi
                        </label>

                        <label className="flex gap-2 items-center">
                            <input type="checkbox" />
                            Swimming pool
                        </label>

                        <label className="flex gap-2 items-center">
                            <input type="checkbox" />
                            Breakfast included
                        </label>

                        <label className="flex gap-2 items-center">
                            <input type="checkbox" />
                            Parking
                        </label>
                    </div>

                </div>

                {/* HOTEL LIST */}
                <div>

                    <h2 className="text-xl font-bold mb-4">
                        Mumbai: 452 properties found
                    </h2>

                    <div className="flex flex-col gap-5">

                        {hotels.map((hotel) => (
                            <div
                                key={hotel.id}
                                className="bg-white rounded-md shadow-sm p-4 flex flex-col sm:flex-row gap-4"
                            >

                                {/* IMAGE */}
                                <img
                                    src={hotel.image}
                                    className="w-full sm:w-[180px] h-[180px] object-cover rounded-md"
                                />

                                {/* HOTEL INFO */}
                                <div className="flex-1">

                                    <h3 className="text-lg font-bold text-blue-600">
                                        {hotel.name}
                                    </h3>

                                    {/* STARS */}
                                    <div className="flex items-center gap-1 mt-1">

                                        {Array.from({ length: hotel.stars }).map((_, i) => (
                                            <FaRegStar key={i} className="text-yellow-400 text-sm" />
                                        ))}

                                        <button className="ml-2 bg-yellow-400 hover:bg-yellow-500 text-black text-xs rounded-sm p-1">
                                            <FaRegThumbsUp />
                                        </button>

                                    </div>

                                    <p className="text-sm text-gray-500">
                                        {hotel.location}
                                    </p>

                                    <span className="inline-block mt-2 bg-green-100 text-green-700 text-xs px-2 py-1 rounded">
                                        Free cancellation
                                    </span>

                                </div>

                                {/* PRICE SECTION */}
                                <div className="text-right">

                                    <div className="flex items-center gap-3 justify-end">

                                        <div className="text-right">
                                            <p className="font-semibold text-sm">
                                                {hotel.reviewLabel}
                                            </p>

                                            <p className="text-xs text-gray-500">
                                                {hotel.reviewCount}
                                            </p>
                                        </div>

                                        <div className="bg-blue-600 text-white px-2 py-1 rounded-md font-bold">
                                            {hotel.rating}
                                        </div>

                                    </div>

                                    <p className="text-2xl font-bold mt-2">
                                        {hotel.price}
                                    </p>

                                    <button className="mt-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md">
                                        View details &gt;
                                    </button>

                                </div>

                            </div>
                        ))}

                    </div>

                </div>

            </div>

        </div>
    );
}