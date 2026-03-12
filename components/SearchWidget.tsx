"use client";

import { differenceInDays } from "date-fns";
import { useState, useRef, useEffect } from "react";
import { DateRange } from "react-day-picker";
import MyDateRange from "./MyDateRange";

const STATES = [
    "Goa",
    "Maharashtra",
    "Karnataka",
    "Tamil Nadu",
    "Telangana",
    "Delhi",
];

const InputBox = ({
    label,
    value,
    onClick,
}: {
    label: string;
    value: string;
    onClick?: () => void;
}) => (
    <div
        className="flex-1 bg-white border border-gray-200 rounded-md px-4 py-3 cursor-pointer"
        onClick={onClick}
    >
        <p className="text-xs text-gray-500">{label}</p>
        <p className="font-semibold">{value}</p>
    </div>
);

export default function SearchWidget() {

    const [selectedState, setSelectedState] = useState("Goa");

    const [range, setRange] = useState<DateRange | undefined>({
        from: new Date(),
        to: new Date(Date.now() + 86400000),
    });

    const [guests, setGuests] = useState({
        adults: 2,
        children: 0,
        rooms: 1,
    });

    const [openState, setOpenState] = useState(false);
    const [openCalendar, setOpenCalendar] = useState(false);
    const [openGuests, setOpenGuests] = useState(false);

    const calendarRef = useRef<HTMLDivElement>(null);

    const nights =
        range?.from && range?.to
            ? differenceInDays(range.to, range.from)
            : 0;

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (
                calendarRef.current &&
                !calendarRef.current.contains(e.target as Node)
            ) {
                setOpenCalendar(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () =>
            document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleSearch = () => {
        console.log({
            destination: selectedState,
            checkin: range?.from,
            checkout: range?.to,
            guests,
        });
    };

    return (
        <div className="max-w-[1100px] mx-auto px-4 md:-mt-[60px] relative z-10">

            <div className="bg-white shadow-lg rounded-lg p-4">

                <div className="flex flex-col md:flex-row gap-3">

                    {/* Destination */}
                    <div className="relative flex-1">

                        <InputBox
                            label="Where are you going?"
                            value={selectedState}
                            onClick={() => setOpenState(!openState)}
                        />

                        {openState && (
                            <div className="absolute bg-white border rounded-md shadow-md mt-2 w-full z-20">
                                {STATES.map((state) => (
                                    <div
                                        key={state}
                                        className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
                                        onClick={() => {
                                            setSelectedState(state);
                                            setOpenState(false);
                                        }}
                                    >
                                        {state}
                                    </div>
                                ))}
                            </div>
                        )}

                    </div>

                    {/* Date Range */}
                    <div className="relative flex-1">

                        <InputBox
                            label="Check-in — Check-out"
                            value={
                                range?.from && range?.to
                                    ? `${range.from.toDateString()} – ${range.to.toDateString()}`
                                    : "Select dates"
                            }
                            onClick={() => setOpenCalendar(true)}
                        />

                        {openCalendar && (
                            <div ref={calendarRef} className="absolute mt-2 z-30">
                                <MyDateRange
                                    range={range}
                                    setRange={setRange}
                                    closeCalendar={() => setOpenCalendar(false)}
                                />
                            </div>
                        )}

                    </div>

                    {/* Guests */}
                    <div className="relative flex-1">

                        <InputBox
                            label="Guests & Rooms"
                            value={`${guests.adults} adults · ${guests.children} children · ${guests.rooms} room`}
                            onClick={() => setOpenGuests(!openGuests)}
                        />

                        {openGuests && (
                            <div className="absolute bg-white border rounded-md shadow-md mt-2 w-full p-4 z-20">

                                {(["adults", "children", "rooms"] as const).map((key) => (
                                    <div
                                        key={key}
                                        className="flex justify-between items-center mb-3"
                                    >

                                        <span className="capitalize">{key}</span>

                                        <div className="flex items-center gap-2">

                                            <button
                                                className="bg-primary-500 text-white px-2 rounded"
                                                onClick={() =>
                                                    setGuests((prev) => ({
                                                        ...prev,
                                                        [key]: prev[key] > 0 ? prev[key] - 1 : 0,
                                                    }))
                                                }
                                            >
                                                -
                                            </button>

                                            <span>{guests[key]}</span>

                                            <button
                                                className="bg-primary-500 text-white px-2 rounded"
                                                onClick={() =>
                                                    setGuests((prev) => ({
                                                        ...prev,
                                                        [key]: prev[key] + 1,
                                                    }))
                                                }
                                            >
                                                +
                                            </button>

                                        </div>

                                    </div>
                                ))}

                            </div>
                        )}

                    </div>

                    {/* Search Button */}
                    <button
                        className="bg-primary-500 text-white px-8 py-3 rounded-md md:w-auto w-full"
                        onClick={handleSearch}
                    >
                        Search
                    </button>

                </div>
            </div>
        </div>
    );
}