import React from "react";
import {
    whyOutSourceAccounting, whyOutSourceUperImg
} from "../../assets/images/WhyOutsourceAccounting/WhyOutSourceAccounting.js"
import BulletPoints from "./components/BulletPoints.jsx";

const Outsource = () => {
    return (
        <>
            <div className="flex justify-center lg:justify-between items-center mx-12 my-12 flex-wrap">
                <div className="flex flex-col h-auto items-center lg:items-start mr-4 w-120 ">
                    <h1 className="text-3xl font-semibold">Why Outsource Accounting</h1>
                    <p className="my-2 font-light">
                        You’ve got a team behind you! Our expert team of budget-friendly
                        online accountants is set and raring to provide you with the
                        one-on-one expert support your business deserves. Whether you’re
                        just kicking off, running a tight ship, or a seasoned pro, we are
                        locked and loaded to guide you through the complexities of UK
                        accounting and tax filing. With our hands- on vibe, we make sure
                        you’re savvy enough to make sound financial moves. Cheers to your
                        success!
                    </p>
                    <BulletPoints />
                    <button className="h-auto w-auto text-amber-50 bg-(--color-buttonBlue) px-8 py-3 rounded-2xl ">Get a Quote</button>
                </div>
                <div className="relative flex mt-3 w-140 h-120 items-center justify-center lg:justify-end overflow-hidden">
                    <img src={whyOutSourceUperImg} alt="whyOutSourceUperImg"
                        className="absolute inline-block h-80 w-80 rounded  ring-white z-50 left-0 lg:left-6" />
                    <img src={whyOutSourceAccounting} alt="whyOutSourceAccounting"
                        className="absolute inline-block h-90 w-90 rounded ring-white right-1" />
                </div>
            </div>
        </>
    );
};
export default Outsource;