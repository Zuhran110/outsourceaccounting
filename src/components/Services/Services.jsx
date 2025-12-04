import React from "react";

import "./Services.css";
import ServiceCards from "./ServiceComponents/ServiceCards.jsx";

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
                <ServiceCards />
            </div>
        </section>
    );
};

export default Services;