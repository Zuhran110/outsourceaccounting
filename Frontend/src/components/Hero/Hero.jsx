import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import axios from "axios";

import {
  ContactIcon,
  UKFlagIcon,
  CountrySideUK,
} from "../../assets/images/HeroSection/HeroImgs";

import Cards from "./HeroComponents/Cards";

const VITE_BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const Hero = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors /*issubmitting*/ },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const res = await axios.post(`${VITE_BACKEND_URL}/app/v1/contact`, data);

      toast.success(res.data.message);
      reset();
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
          src={CountrySideUK}
          alt="Country side view"
          className="absolute inset-0 w-full h-full object-cover brightness-50 -z-10"
        />

        {/* LEFT TEXT SECTION */}
        <div className="w-full md:w-1/2 px-6  md:pl-16 text-white flex flex-col justify-center my-6 lg:my-12 mx-6 md:mx-8 ">
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
              src={UKFlagIcon}
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
            <img src={ContactIcon} alt="contact" className="w-4 h-4" />
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
                <p className="text-red-500 text-xs mt-1">Name is required</p>
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
                <p className="text-red-500 text-xs mt-1">
                  Company name is required
                </p>
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
                <p className="text-red-500 text-xs mt-1">
                  {errors.companyTurnover.message}
                </p>
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
                <p className="text-red-500 text-xs mt-1">Email is required</p>
              )}
            </div>

            <button
              type="submit"
              className="w-1/2 mx-auto block p-3 rounded-xl bg-(--color-buttonBlue) text-white text-lg font-medium hover:opacity-90 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      <Cards />
    </section>
  );
};
export default Hero;
