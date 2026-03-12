"use client";

import { DayPicker, DateRange } from "react-day-picker";
import "react-day-picker/dist/style.css";

type Props = {
    range: DateRange | undefined;
    setRange: (range: DateRange | undefined) => void;
    closeCalendar: () => void;
};

export default function MyDateRange({ range, setRange, closeCalendar }: Props) {

    const handleSelect = (selectedRange: DateRange | undefined) => {
        setRange(selectedRange);

        if (
            selectedRange?.from &&
            selectedRange?.to &&
            selectedRange.from.getTime() !== selectedRange.to.getTime()
        ) {
            closeCalendar();
        }
    };

    return (
        <div className="bg-white p-3 rounded-lg shadow-lg border">
            <DayPicker
                mode="range"
                selected={range}
                onSelect={handleSelect}
                disabled={{ before: new Date() }}
            />
        </div>
    );
}