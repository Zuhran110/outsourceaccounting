"use client";
import QuoteForm from "@/components/shared/forms/QuoteForm";

import Cards from "./HeroComponents/Cards";

const Hero = () => {
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

          <QuoteForm />
        </div>
      </div>

      <Cards />
    </section>
  );
};
export default Hero;
