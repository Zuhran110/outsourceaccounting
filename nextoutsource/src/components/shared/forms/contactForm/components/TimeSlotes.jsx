"use client";
import TimeSlote from "./TimeSlote";

const data = [
  {
    Key: 1,
    time: "12:00 AM",
    avialable: false,
  },
  {
    Key: 2,
    time: "01:00 AM",
    avialable: false,
  },
  {
    Key: 3,
    time: "02:00 AM",
    avialable: false,
  },
  {
    Key: 4,
    time: "03:00 AM",
    avialable: true,
  },
  {
    Key: 5,
    time: "04:00 AM",
    avialable: true,
  },
  {
    Key: 6,
    time: "05:00 AM",
    avialable: true,
  },
  {
    Key: 7,
    time: "06:00 AM",
    avialable: true,
  },
  {
    Key: 8,
    time: "07:00 AM",
    avialable: true,
  },
  {
    Key: 9,
    time: "08:00 AM",
    avialable: true,
  },
  {
    Key: 10,
    time: "09:00 AM",
    avialable: false,
  },
  {
    Key: 11,
    time: "10:00 AM",
    avialable: false,
  },
  {
    Key: 12,
    time: "11:00 AM",
    avialable: false,
  },
];
const TimeSlotes = ({ isSelected, setIsSelected }) => {
  return (
    <div
      className="flex flex-col w-full gap-3 overflow-y-auto scrollbar-none [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      style={{ maxHeight: "400px" }}
    >
      {data.map((slot, index) => {
        const { time, avialable } = slot;
        return (
          <TimeSlote
            key={index}
            time={time}
            avialable={avialable}
            onSelect={() => setIsSelected(time)}
            isSelected={isSelected === time}
          />
        );
      })}
    </div>
  );
};

export default TimeSlotes;
