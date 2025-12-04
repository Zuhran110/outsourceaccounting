import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form"
import "./Hero.css";

import {
    ContactIcon, UKFlagIcon
} from "../../assets/images/HeroSection/HeroImgs";

import Cards from "./HeroComponents/Cards";

const Hero = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => console.log(data)

    return (
        <section >
            <div className="hero">
                <div className="heroforimg">
                    <div className="hero-container">
                        <div className="hero-content">
                            <p className="hero-bar">Welcome to Outsource Accounting Solutions</p>
                            <h1 className="hero-title">Cheap <span className="hero-title-highlight">Online Accounting</span> & Tax Filing Services in the UK <img src={UKFlagIcon} alt="ukflage" className="Uk-Flag"></img></h1>
                            <p className="hero-subtitle">Outsource Accounting is your trusted, reliable, and cheap online accounting and tax services partner. Chin up, we are dedicated to handling your Companies House and HM Revenue & Customs (HMRC) filings, starting from only £75 per year.</p>
                            <p className="hero-subtitle">Time to give your business a proper leg up! Fancy a chat with our expert UK accountants? Lets turn your business into an absolute cracker – reach out today! </p>
                            <button className="hero-btn"> <img src={ContactIcon} alt="btnimage" aria-hidden="true" className="btn-icon" /> Free Consultation</button>
                        </div>
                    </div>
                    <div className="hero-form-card">
                        <h2 className="hero-form-title">Quik <span className="hero-form-highlight">Quote</span> </h2>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-group">
                                <input type="text" className="form-input" placeholder="Enter Full Name"
                                    {...register("name", { required: true })} aria-invalid={errors.name ? "true" : "false"} />
                                {errors.name?.type === "required" &&
                                    <p role="alert" className="error-message">Name is required</p>}
                                <input type="text" className="form-input" placeholder="Enter Company Name"
                                    {...register("company", { required: true })} aria-invalid={errors.name ? "true" : "false"} />
                                {errors.company?.type === "required" &&
                                    <p role="alert" className="error-message">Company name is required</p>}
                                <div className="form-field">
                                    <select
                                        id="company-turnover"
                                        className="form-input"
                                        {...register("companyTurnover", { required: "Please select a turnover" })}
                                        aria-invalid={errors.companyTurnover ? "true" : "false"}
                                    >
                                        <option value="" disabled>Company Turnover</option>
                                        <option value="under_50k">Under £50,000</option>
                                        <option value="50k_150k">£50,000 - £150,000</option>
                                        <option value="150k_500k">£150,000 - £500,000</option>
                                        <option value="over_500k">Over £500,000</option>
                                    </select>

                                    {errors.companyTurnover && (
                                        <p className="error-message" role="alert">
                                            {errors.companyTurnover.message}
                                        </p>
                                    )}
                                </div>
                                <input type="email" className="form-input" placeholder="Enter Email"
                                    {...register("email", { required: true })} aria-invalid={errors.email ? "true" : "false"} />
                                {errors.email?.type === "required" &&
                                    <p role="alert" className="error-message">Email is required</p>}
                            </div>
                            <button className="form-submit-btn" type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            </div>


            <Cards />


        </section>
    );
}
export default Hero;