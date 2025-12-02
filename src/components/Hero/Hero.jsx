import React, { useState, useEffect } from "react";
import "./Hero.css";
import connect from "../../assets/images/HeroSection/fluent-mdl2_connect-contacts.png";
import UKflag from "../../assets/images/HeroSection/UKflage.png";

const Hero = () => {
    const [formData, setFormData] = useState({
        name: "",
        company: "",
        companyTurnover: "",
        email: ""
    });

    function handleChange(event) {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    }

    function handleSubmit(event) {
        event.preventDefault();
        // Handle form submission logic here
        setFormData({
            name: "",
            company: "",
            companyTurnover: "",
            email: ""
        });
    }

    return (
        <section className="hero">
            <div className="hero-container">
                <div className="hero-content">
                    <p className="hero-bar">Welcome to Outsource Accounting Solutions</p>
                    <h1 className="hero-title">Cheap <span className="hero-title-highlight">Online Accounting</span> & Tax Filing Services in the UK <img src={UKflag} alt="ukflage" className="Uk-Flag"></img></h1>
                    <p className="hero-subtitle">Outsource Accounting is your trusted, reliable, and cheap online accounting and tax services partner. Chin up, we are dedicated to handling your Companies House and HM Revenue & Customs (HMRC) filings, starting from only £75 per year.</p>
                    <p className="hero-subtitle">Time to give your business a proper leg up! Fancy a chat with our expert UK accountants? Lets turn your business into an absolute cracker – reach out today! </p>
                    <button className="hero-btn"> <img src={connect} alt="btnimage" aria-hidden="true" className="btn-icon" /> Free Consultation</button>
                </div>
            </div>
            <div className="hero-form-card">
                <h2 className="hero-form-title">Quik <span className="hero-form-highlight">Quote</span> </h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input type="text" className="form-input" onChange={handleChange} name="name" value={formData.name} placeholder="Enter Full Name" required />
                        <input type="text" className="form-input" onChange={handleChange} name="company" value={formData.company} placeholder="Enter Company Name" required />
                        <select id="company-turnover" name="companyTurnover" onChange={handleChange} className="form-input" value={formData.companyTurnover} required>
                            <option value="" disabled>Company Turnover</option>
                            <option value="under_50k">Under £50,000</option>
                            <option value="50k_150k">£50,000 - £150,000</option>
                            <option value="150k_500k">£150,000 - £500,000</option>
                            <option value="over_500k">Over £500,000</option>
                        </select>
                        <input type="email" className="form-input" onChange={handleChange} name="email" value={formData.email} placeholder="Enter Email" required />
                    </div>
                    <button className="form-submit-btn" type="submit">Submit</button>
                </form>
            </div>

        </section>
    );
}
export default Hero;