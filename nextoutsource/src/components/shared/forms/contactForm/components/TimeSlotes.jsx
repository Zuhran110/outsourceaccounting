"use client";
import { UTCDate } from "@date-fns/utc";
import { format, roundToNearestMinutes, startOfDay, setHours } from "date-fns";
import TimeSlote from "./TimeSlote";

const TimeSlotes = ({ isSelected, setIsSelected }) => {
  let date = new UTCDate(new Date(Date.now()));

  let localTime = new Date(date.getTime());

  const utchour = format(roundToNearestMinutes(date, { nearestTo: 30 }), "HH");

  const localHour = format(
    roundToNearestMinutes(localTime, { nearestTo: 30 }),
    "HH"
  );

  const number = [];
  const utcToday = startOfDay(new UTCDate());

  for (let i = 0; i < 24; i++) {
    const utcDateForHours = format(setHours(utcToday, i), "HH");
    const localDateForHours = format(new Date(setHours(utcToday, i)), "HH");
    const obj = {
      key: i,
      isAvailable: true,
      utcHour: utcDateForHours,
      localHour: localDateForHours,
    };
    number.push(obj);
  }

  const target = [0, 1, 2, 3, 15, 16, 17, 18, 19, 20, 21, 22, 23];
  target.forEach((item) => {
    if (number[item]) {
      number[item].isAvailable = false;
    }
  });

  return (
    <div
      className="flex flex-col w-full gap-3 overflow-y-auto scrollbar-none [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      style={{ maxHeight: "400px" }}
    >
      {number.map((item, index) => {
        const { isAvailable, localHour } = item;
        const hour = parseInt(localHour);
        let displayHour = hour;
        let suffix = "AM";
        if (hour === 0) {
          displayHour = 12;
          suffix = "AM";
        } else if (hour < 12) {
          suffix = "AM";
        } else if (hour === 12) {
          suffix = "PM";
        } else {
          displayHour = hour - 12;
          suffix = "PM";
        }
        return (
          <TimeSlote
            key={index}
            time={localHour}
            isAvailable={isAvailable}
            suffix={suffix}
            onSelect={() => setIsSelected(localHour)}
            isSelected={isSelected === localHour}
          />
        );
      })}
    </div>
  );
};

export default TimeSlotes;
