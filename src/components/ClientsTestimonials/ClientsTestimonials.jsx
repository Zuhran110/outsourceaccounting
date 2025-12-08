import React, { useRef } from "react";
import Cards from "./components/Cards";

import {
    arrow
} from "../../assets/images/ClientsTestimonials/CTimg.js";

const ClientsTestimonials = () => {

    const sliderRef = useRef(null);

    const scrollLeft = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollLeft -= 500;
        }
    }

    const scrollRight = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollLeft += 500;
        }
    }

    return (
        <div className="mx-12 my-12 ">
            <div className="grid grid-flow-col grid-cols-3 items-center content-center justify-center">
                <h1 className="font-bold py-12 text-3xl justify-self-center col-start-2">Clients testimonials</h1>
                <div className="justify-self-end col-start-3 justify-center gap-4 hidden md:flex">
                    <img src={arrow} alt="arrow" onClick={scrollLeft} className="rotate-180" />
                    <img src={arrow} alt="arrow" onClick={scrollRight} className=" " />
                </div>
            </div>
            <Cards ref={sliderRef} />

        </div >
    );
}

export default ClientsTestimonials;