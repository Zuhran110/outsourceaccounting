import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

import {
    ContactIcon,
    UKFlagIcon,
    CountrySideUK,
} from "../../assets/images/HeroSection/HeroImgs";

import Cards from "./HeroComponents/Cards";

const Hero = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => console.log(data);

    return (
        <section>
            <div className="w-full min-h-screen flex relative items-center justify-center overflow-hidden  mt-0  pt-0 bg-cover bg-center ">
                <img
                    src={CountrySideUK}
                    alt="Country side view"
                    className="absolute inset-0 w-full h-full object-cover z-[-1] brightness-50"
                />
                <div className="heroforimg  flex relative items-center justify-center w-full">
                    <div className="max-w-[64dvw] mx-auto pl-23 pr-32 flex flex-wrap justify-between items-center text-white w-full relative z-2">
                        <div className="relative z-2">
                            <p className="flex min-w-6 max-w-90 mb-4 bg-[linear-gradient(90deg,#c0b2ff,#ffffff)] p-[0.8em] rounded-[20px]  text-[#333] text-[1em] font-medium">
                                Welcome to Outsource Accounting Solutions
                            </p>
                            <h1 className="text-[2.5em] mb-[1em]">
                                Cheap <span className="text-(--color-veryLightBlue)">Online Accounting</span>{" "}
                                & Tax Filing Services in the UK{" "}
                                <img src={UKFlagIcon} alt="ukflage" className="Uk-Flag"></img>
                            </h1>
                            <p className="hero-subtitle">
                                Outsource Accounting is your trusted, reliable, and cheap online
                                accounting and tax services partner. Chin up, we are dedicated
                                to handling your Companies House and HM Revenue & Customs (HMRC)
                                filings, starting from only £75 per year.
                            </p>
                            <p className="hero-subtitle">
                                Time to give your business a proper leg up! Fancy a chat with
                                our expert UK accountants? Lets turn your business into an
                                absolute cracker – reach out today!{" "}
                            </p>
                            <button className="inline-flex items-center p-[1em] rounded-[2em] bg-[linear-gradient(135deg,#4f46e5,#817ceb)] text-white border-0 cursor-pointer pt-2">
                                {" "}
                                <img
                                    src={ContactIcon}
                                    alt="btnimage"
                                    aria-hidden="true"
                                    className="w-4 h-4 block object-contain"
                                />{" "}
                                Free Consultation
                            </button>
                        </div>
                    </div>
                    <div className="bg-[rgba(255,255,255,0.45)] backdrop-blur p-12 rounded-lg shadow-[0_4px_12px_rgba(0,0,0,0.15)] text-[#333] flex-[1_1_40%] min-w-[4dvw] relative mr-22">
                        <h2 className="text-[2em] mb-5 text-left">
                            Quik <span className="text-(--color-buttonBlue)">Quote</span>{" "}
                        </h2>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="mb-8">
                                <input
                                    type="text"
                                    className="w-full p-4 mb-4 border bg-amber-50 border-gray-300 rounded text-[0.7em] box-border focus:border-[#4f46e5] focus:outline-none focus:shadow-[0_0_5px_rgba(79,70,229,0.5)]"
                                    placeholder="Enter Full Name"
                                    {...register("name", { required: true })}
                                    aria-invalid={errors.name ? "true" : "false"}
                                />
                                {errors.name?.type === "required" && (
                                    <p
                                        role="alert"
                                        className="text-[#ff2424] text-[0.8em] -mt-4 mb-4"
                                    >
                                        Name is required
                                    </p>
                                )}
                                <input
                                    type="text"
                                    className="w-full p-4 mb-4 border bg-amber-50 border-gray-300 rounded text-[0.7em] box-border focus:border-[#4f46e5] focus:outline-none focus:shadow-[0_0_5px_rgba(79,70,229,0.5)]"
                                    placeholder="Enter Company Name"
                                    {...register("company", { required: true })}
                                    aria-invalid={errors.name ? "true" : "false"}
                                />
                                {errors.company?.type === "required" && (
                                    <p
                                        role="alert"
                                        className="text-[#ff2424] text-[0.8em] -mt-4 mb-4">
                                        Company name is required
                                    </p>
                                )}
                                <div className="form-field">
                                    <select
                                        id="company-turnover"
                                        className="w-full p-4 mb-4 border bg-amber-50 border-gray-300 rounded text-[0.7em] box-border focus:border-[#4f46e5] focus:outline-none focus:shadow-[0_0_5px_rgba(79,70,229,0.5)]"
                                        {...register("companyTurnover", {
                                            required: "Please select a turnover",
                                        })}
                                        aria-invalid={errors.companyTurnover ? "true" : "false"}>
                                        <option value="" disabled>
                                            Company Turnover
                                        </option>
                                        <option value="under_50k">Under £50,000</option>
                                        <option value="50k_150k">£50,000 - £150,000</option>
                                        <option value="150k_500k">£150,000 - £500,000</option>
                                        <option value="over_500k">Over £500,000</option>
                                    </select>
                                    {errors.companyTurnover && (
                                        <p
                                            className="text-[#ff2424] text-[0.8em] -mt-4 mb-4"
                                            role="alert"
                                        >
                                            {errors.companyTurnover.message}
                                        </p>
                                    )}
                                </div>
                                <input
                                    type="email"
                                    className="w-full p-4 mb-4 border bg-amber-50 border-gray-300 rounded text-[0.7em] box-border focus:border-[#4f46e5] focus:outline-none focus:shadow-[0_0_5px_rgba(79,70,229,0.5)]"
                                    placeholder="Enter Email"
                                    {...register("email", { required: true })}
                                    aria-invalid={errors.email ? "true" : "false"}
                                />
                                {errors.email?.type === "required" && (
                                    <p
                                        role="alert"
                                        className="text-[#ff2424] text-[0.8em] -mt-4 mb-4">
                                        Email is required
                                    </p>
                                )}
                            </div>
                            <button
                                className="w-1/2 p-4 border-0 rounded-5 bg-(--color-buttonBlue) text-white text-[1em] cursor-pointer block mx-auto rounded-2xl"
                                type="submit">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            <Cards />
        </section>
    );
};
export default Hero;
