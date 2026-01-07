"use client";
import { useState } from "react";
import { format } from "date-fns";
import DateTimePicker from "./components/DateTimePicker";
import Form from "./components/Form";

const ContactForm = () => {
  const [date, setDate] = useState();
  const [isSelected, setIsSelected] = useState(null);
  const [isConfirm, setIsConfirm] = useState(false);

  const handleConfirm = () => {
    setIsConfirm(true);
  };

  return (
    <div className="flex flex-col border max-w-1/2 max-h-1/2 mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">
        Book a <span className="text-blue-600"> Meeting</span>
      </h2>

      <div className="flex flex-col lg:flex-row gap-6 justify-between">
        {/* left text  */}
        <div className="lg:w-1/3">
          <h1 className="font-semibold mb-2">lorem</h1>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
            asperiores labore iste quos voluptas, nesciunt nisi, amet,
            blanditiis inventore sapiente similique. Nobis enim ipsa ut, et
            deleniti necessitatibus sint delectus.
          </p>
          <div className="my-6">
            <p className="text-blue-800 font-semibold">Day</p>
            {date ? format(date, "PPP") : "Pick a Day"}
          </div>
          <div className="my-6">
            <p className="text-blue-800 font-semibold">Time</p>
            {isSelected ? isSelected : "Select a Time"}
          </div>
        </div>
        {/* Date and time picker */}
        {!isConfirm && (
          <DateTimePicker
            date={date}
            setDate={setDate}
            isSelected={isSelected}
            setIsSelected={setIsSelected}
          />
        )}
        {isConfirm && <Form />}
      </div>

      {!isConfirm && isSelected && (
        <button
          onClick={handleConfirm}
          className="flex justify-self-rigth self-end border bg-blue-800 text-white rounded border-blue-800 px-6 py-2 my-2"
        >
          Confirm
        </button>
      )}
    </div>
  );
};

export default ContactForm;
