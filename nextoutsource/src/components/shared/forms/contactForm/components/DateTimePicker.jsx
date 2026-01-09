"use client";
import { Calendar } from "@/components/ui/calendar";
import TimeSlotes from "./TimeSlotes";
import { isWeekend, startOfDay, isPast } from "date-fns";

const DateTimePicker = ({ date, setDate, isSelected, setIsSelected }) => {
  return (
    <div className="flex flex-col md:flex-row gap-2 w-full">
      {/* date picker */}
      <div className="flex-1">
        <h1 className="font-bold mb-4">Select Date & Time</h1>
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          disabled={(date) => {
            return isWeekend(date) || isPast(startOfDay(date));
          }}
          className="rounded-lg border w-full [--cell-size:--spacing(11)] md:[--cell-size:--spacing(12)]"
        />
      </div>
      {/* time picker */}
      {date && (
        <div className="flex-1">
          <TimeSlotes isSelected={isSelected} setIsSelected={setIsSelected} />
        </div>
      )}
    </div>
  );
};

export default DateTimePicker;
