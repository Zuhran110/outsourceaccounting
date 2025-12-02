import React from "react";
import Group from "../../assets/images/Services/Group.png";
import payroll from "../../assets/images/Services/payroll.png";
import tax from "../../assets/images/Services/tax.png";
import selfAssessment from "../../assets/images/Services/self-assessment.png";
import vat from "../../assets/images/Services/vat-returns.png";
import companyFormation from "../../assets/images/Services/company-formation.png";

import "./Services.css";

const Services = () => {
    return (
        <section className="services" id="services">
            <div className="services-container">
                <h2 className="services-title">Services</h2>
                <p className="services-description">
                    Welcome to our all-inclusive professional Accountancy service
                    portfolio, designed to satisfy the various financial requirements of
                    individuals, partnerships, limited liability programs, sole traders,
                    and limited corporations across the United Kingdom. Our expert team
                    works tirelessly to ensure the financial success of organisations We
                    offer a comprehensive range of services designed to simplify and
                    manage your tax responsibilities.
                </p>
                <div className="services-cards">
                    <a href="#Learn-more" className="service-card-link">
                        <div className="service-card">
                            <div className="service-card-section1">
                                <img
                                    src={Group}
                                    alt="service cards"
                                    className="service-cards-img"
                                />
                                <h3 className="service-card-title">Company Accounts</h3>
                            </div>
                            <div className="services-card-section2">
                                <p className="service-card-description">
                                    Outsource Accounting, where your business company accounts get
                                    the royal treatment, making you a financial king.
                                </p>
                                <span className="learn-more">Learn more...</span>
                            </div>
                        </div>
                    </a>
                    <a href="#Learn-more" className="service-card-link">
                        <div className="service-card">
                            <div className="service-card-section1">
                                <img
                                    src={tax}
                                    alt="service cards"
                                    className="service-cards-img"
                                />
                                <h3 className="service-card-title">Corporation Tax</h3>
                            </div>
                            <div className="services-card-section2">
                                <p className="service-card-description">
                                    Managing corporation tax is a crucial yet complex aspect of
                                    running a UK-based business.
                                </p>
                                <a className="learn-more">Learn more...</a>
                            </div>
                        </div>
                    </a>
                    <a href="#Learn-more" className="service-card-link">
                        <div className="service-card">
                            <div className="service-card-section1">
                                <img
                                    src={selfAssessment}
                                    alt="service cards"
                                    className="service-cards-img"
                                />
                                <h3 className="service-card-title">Self Assessment</h3>
                            </div>
                            <div className="services-card-section2">
                                <p className="service-card-description">
                                    financial tranquility of self-assessment tax return, where
                                    your financial worries take a back seat.
                                </p>
                                <span className="learn-more">Learn more...</span>
                            </div>
                        </div>
                    </a>
                    <a href="#Learn-more" className="service-card-link">
                        <div className="service-card">
                            <div className="service-card-section1">
                                <img
                                    src={payroll}
                                    alt="service cards"
                                    className="service-cards-img"
                                />
                                <h3 className="service-card-title">Payroll</h3>
                            </div>
                            <div className="services-card-section2">
                                <p className="service-card-description">
                                    Sick of swimming in the payroll paperwork ocean? We
                                    understand, and that is why we are here.
                                </p>
                                <span className="learn-more">Learn more...</span>
                            </div>
                        </div>
                    </a>
                    <a href="#Learn-more" className="service-card-link">
                        <div className="service-card">
                            <div className="service-card-section1">
                                <img
                                    src={vat}
                                    alt="service cards"
                                    className="service-cards-img"
                                />
                                <h3 className="service-card-title">Vat returns</h3>
                            </div>
                            <div className="services-card-section2">
                                <p className="service-card-description">
                                    Alright, buckle up, mates! Our online VAT Return services in
                                    the UK are crafted with you in mind.
                                </p>
                                <span className="learn-more">Learn more...</span>
                            </div>
                        </div>
                    </a>
                    <a href="#Learn-more" className="service-card-link">
                        <div className="service-card">
                            <div className="service-card-section1">
                                <img
                                    src={companyFormation}
                                    alt="service cards"
                                    className="service-cards-img"
                                />
                                <h3 className="service-card-title">Company Formation </h3>
                            </div>
                            <div className="services-card-section2">
                                <p className="service-card-description">
                                    Kudos to you for deciding to start a new venture in the UK!
                                    You are in the perfect place for it.
                                </p>
                                <span className="learn-more">Learn more...</span>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    );
};
export default Services;
