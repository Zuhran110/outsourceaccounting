import React from "react";

import ServiceCards from "./ServiceComponents/ServiceCards.jsx";

const Services = () => {
    return (
        <section className="flex self-center items-center content-center justify-center text-black bg-white px-16 py-8" id="services">
            <div className="flex self-center items-center content-center justify-center text-black bg-white flex-wrap">
                <h2 className="text-[2rem] font-semibold mb-4 w-full text-center text-[#4632DA]">Services</h2>
                <p className="text-[1rem] font-normal mb-8 w-full text-center text-[#333333]">
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