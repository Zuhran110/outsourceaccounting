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
            <p className="text-sm md:text-base text-gray-600">
              Use this form to schedule a meeting with our team. Please select
              your preferred date and time and provide your contact details to
              confirm the appointment.
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

          <div className="my-3">
            <p className="text-blue-800 font-semibold">Name</p>
            {message ? message.Name : "Enter Your Business Name"}
          </div>

          <div className="my-3">
            <p className="text-blue-800 font-semibold">Email</p>
            {message ? message.email : "Confirm Your Business Email"}
          </div>

          {message && isSelected && date && (
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
            <DateTimePicker
              date={date}
              setDate={setDate}
              isSelected={isSelected}
              setIsSelected={setIsSelected}
            />

            <Form formData={handledata} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
