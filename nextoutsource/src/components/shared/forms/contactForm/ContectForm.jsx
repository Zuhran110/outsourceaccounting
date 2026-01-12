"use client";
import { useState } from "react";
import { format } from "date-fns";
import DateTimePicker from "./components/DateTimePicker";
import Form from "./components/Form";
import { toast } from "react-toastify";
import axios from "axios";

const ContactForm = ({ onSuccess }) => {
  const [date, setDate] = useState();
  const [isSelected, setIsSelected] = useState(null);
  const [isConfirm, setIsConfirm] = useState(false);
  const [message, setMessage] = useState();

  const handleConfirm = () => {
    setIsConfirm(true);
  };

  const handledata = (data) => {
    setMessage(data);
  };

  const onSubmit = async () => {
    try {
      const meetingData = {
        date: date ? format(date, "PPP") : "Pick a Day",
        time: isSelected,
        Name: message.Name,
        email: message.email,
      };
      const res = await axios.post(`api/meeting`, meetingData);
      toast.success(res.data.message);

      if (onSuccess) {
        await new Promise((resolve) => setTimeout(resolve, 2000));
      }
    } catch (error) {
      console.log("error occued hero ", error);
      toast.error("failed to send message");
    }
  };

  return (
    <div className="flex flex-col ">
      <h2 className="text-2xl font-bold mb-6">
        Book a <span className="text-blue-600"> Meeting</span>
      </h2>

      <div className="flex flex-col md:flex-row gap-6 justify-between">
        {/* left text  */}
        <div className="w-full md:w-1/2 lg:w-2/5 ">
          <div className="hidden md:inline-block">
            {" "}
            <h1 className="text-lg md:text-xl lg:text-2xl font-semibold mb-2">
              lorem
            </h1>
            <p className="text-sm md:text-base text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
              asperiores labore iste quos voluptas, nesciunt nisi, amet,
              blanditiis inventore sapiente similique. Nobis enim ipsa ut, et
              deleniti necessitatibus sint delectus.
            </p>
          </div>

          <div className="my-3">
            <p className="text-blue-800 font-semibold">Day</p>
            {date ? format(date, "PPP") : "Pick a Day"}
          </div>
          <div className="my-3">
            <p className="text-blue-800 font-semibold">Time</p>
            {isSelected ? isSelected : "Select a Time"}
          </div>
          {message && (
            <div>
              <div className="my-3">
                <p className="text-blue-800 font-semibold">Name</p>
                <p>{message.Name}</p>
              </div>

              <div className="my-3">
                <p className="text-blue-800 font-semibold">email</p>
                <p>{message.email}</p>
              </div>
            </div>
          )}
          {message && (
            <button
              onClick={onSubmit}
              className="flex justify-self-rigth self-end border bg-blue-800 text-white rounded border-blue-800 px-6 py-2 my-2"
            >
              Send
            </button>
          )}
        </div>
        {/* Date and time picker */}
        <div className="w-full md:w-1/2 lg:w-3/5">
          <div>
            {!isConfirm && (
              <DateTimePicker
                date={date}
                setDate={setDate}
                isSelected={isSelected}
                setIsSelected={setIsSelected}
              />
            )}
            {isConfirm && <Form formData={handledata} />}
          </div>
          {message && (
            <div className="w-full hidden md:inline-block">
              <div>
                <DateTimePicker
                  date={date}
                  setDate={setDate}
                  isSelected={isSelected}
                  setIsSelected={setIsSelected}
                />
                <div className="mt-2">
                  {isConfirm && <Form formData={handledata} />}
                </div>
              </div>
            </div>
          )}
        </div>
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
