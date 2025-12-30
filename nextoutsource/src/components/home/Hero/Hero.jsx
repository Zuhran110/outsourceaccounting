"use client";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import axios from "axios";

import Cards from "./HeroComponents/Cards";

const Hero = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const res = await axios.post(`/api/contact`, data);

      toast.success(res.data.message);
      reset();

      await new Promise((resolve) => setTimeout(resolve, 2000));
    } catch (error) {
      console.log("error occued hero ", error);
      toast.error("failed to send message");
    }
  };

  return (
    <section className="w-full ">
      <div className="relative h-[95vh] lg:h-[90vh] w-full flex flex-col md:flex-row items-center justify-center md:justify-between overflow-hidden ">
        {/* Background Image */}
        <img
          src="/images/HeroSection/CountrySideUK.png"
          alt="Country side view"
          className="absolute inset-0 w-full h-full object-cover brightness-50 -z-10"
        />

        {/* LEFT TEXT SECTION */}
        <div className="w-full  md:w-1/2 px-6  md:pl-16 text-white flex flex-col justify-center my-6 lg:my-12 mx-6 md:mx-8 ">
          <p className="inline-block mb-4 bg-linear-to-r from-[#c0b2ff] to-white text-[#333] px-4 py-2 rounded-xl text-sm font-medium w-fit">
            Welcome to Outsource Accounting Solutions
          </p>

          <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-snug">
            Cheap{" "}
            <span className="text-(--color-veryLightBlue)">
              Online Accounting
            </span>{" "}
            & Tax Filing Services in the UK{" "}
            <img
              src="/images/HeroSection/UKFlagIcon.png"
              alt="uk flag"
              className="inline-block w-8 h-8 ml-2"
            />
          </h1>

          {/* Hidden on small screens */}
          <p className="hidden md:block mb-4">
            Outsource Accounting is your trusted, reliable, and cheap online
            accounting and tax services partner. Chin up, we handle your
            Companies House and HMRC filings from only £75 per year.
          </p>

          <p className="hidden md:block mb-8">
            Give your business the boost it deserves! Fancy a chat with our
            expert UK accountants? Reach out today!
          </p>

          <button className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-linear-to-r from-indigo-600 to-indigo-400 text-white shadow-lg hover:opacity-90 transition w-max">
            <img
              src="/images/HeroSection/ContactIcon.png"
              alt="contact"
              className="w-4 h-4"
            />
            Free Consultation
          </button>
        </div>

        {/* RIGHT FORM SECTION */}
        <div className="w-screen md:w-1/3 md:mr-25 bg-white/40 backdrop-blur-md p-3 py-4 md:p-12 rounded-xl shadow-lg mt-10 md:mt-0 my-6 lg:my-12 ">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-left text-gray-800">
            Quick <span className="text-(--color-buttonBlue)">Quote</span>
          </h2>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Enter Full Name"
                className="w-full p-4 bg-white border border-gray-300 rounded text-sm focus:border-indigo-600 focus:ring-2 focus:ring-indigo-300 outline-none"
                {...register("name", { required: true })}
              />
              {errors.name && (
                <div className="flex items-center gap-1.5 mt-1 px-2 py-1 bg-red-50 border-l-2 border-red-500 rounded-r-md">
                  {/* Simple SVG Icon for Accessibility */}
                  <svg
                    className="w-3.5 h-3.5 text-red-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p className="text-red-700 text-[11px] font-medium leading-none">
                    Name is required
                  </p>
                </div>
              )}
            </div>

            <div className="mb-4">
              <input
                type="text"
                placeholder="Enter Company Name"
                className="w-full p-4 bg-white border border-gray-300 rounded text-sm focus:border-indigo-600 focus:ring-2 focus:ring-indigo-300 outline-none"
                {...register("company", { required: true })}
              />
              {errors.company && (
                <div className="mt-2 flex items-center gap-2 px-3 py-2 bg-red-50 border-l-4 border-red-500 rounded-r-md animate-in fade-in slide-in-from-top-1 duration-200">
                  {/* Warning Icon */}
                  <svg
                    className="w-4 h-4 text-red-500 shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>

                  <p className="text-red-800 text-xs font-medium leading-none">
                    Company name is required
                  </p>
                </div>
              )}
            </div>

            <div className="mb-4">
              <select
                className="w-full p-4 bg-white border border-gray-300 rounded text-sm focus:border-indigo-600 focus:ring-2 focus:ring-indigo-300 outline-none"
                {...register("companyTurnover", {
                  required: "Please select a turnover",
                })}
              >
                <option value="" disabled>
                  Company Turnover
                </option>
                <option value="under_50k">Under £50,000</option>
                <option value="50k_150k">£50,000 - £150,000</option>
                <option value="150k_500k">£150,000 - £500,000</option>
                <option value="over_500k">Over £500,000</option>
              </select>
              {errors.companyTurnover && (
                <div className="mt-2 flex items-start gap-2 px-3 py-2 bg-red-50 border-l-4 border-red-500 rounded-r-md animate-in fade-in slide-in-from-top-1 duration-200">
                  {/* Warning Icon (Simplified for small space) */}
                  <svg
                    className="w-4 h-4 text-red-500 mt-0.5 shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>

                  <p className="text-red-800 text-xs font-medium leading-tight">
                    {errors.companyTurnover.message}
                  </p>
                </div>
              )}
            </div>

            <div className="mb-6">
              <input
                type="email"
                placeholder="Enter Email"
                className="w-full p-4 bg-white border border-gray-300 rounded text-sm focus:border-indigo-600 focus:ring-2 focus:ring-indigo-300 outline-none"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <div className="mt-2 flex items-center gap-2 px-3 py-2 bg-red-50 border-l-4 border-red-500 rounded-r-md animate-in fade-in slide-in-from-top-1">
                  {/* Error Icon */}
                  <svg
                    className="w-4 h-4 text-red-600 shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    />
                  </svg>

                  <p className="text-red-800 text-xs font-semibold tracking-wide">
                    {errors.email.message || "Email is required"}
                  </p>
                </div>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={
                isSubmitting
                  ? "w-1/2 mx-auto block p-3 rounded-xl bg-(--color-buttonBlue) text-white text-lg font-medium hover:opacity-90 transition opacity-50 cursor-not-allowed"
                  : "w-1/2 mx-auto block p-3 rounded-xl bg-(--color-buttonBlue) text-white text-lg font-medium hover:opacity-90 transition cursor-pointer"
              }
            >
              {isSubmitting ? "Sending" : "Submit"}
            </button>
          </form>
        </div>
      </div>

      <Cards />
    </section>
  );
};
export default Hero;
