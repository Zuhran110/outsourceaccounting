import React from "react";

import {
    CompanyIcon,
    ReviewSubmitIcon,
    SendInfoIcon,
} from "../../assets/images/HowWeWork/HowWeWork";

const HowWeWork = () => {
    return (
        <div className="px-12 py-12 relative">
            <h1 className="text-center font-bold text-3xl mb-12">How We Work</h1>

            <div className="grid grid-flow-row md:grid-flow-col gap-6 mx-auto w-full lg:w-3/4 font-light ">
                <div className="border border-blue-800 flex flex-col justify-start items-start p-6 py-24 rounded-2xl grow">
                    <img
                        src={CompanyIcon}
                        alt="SendInfoIcon"
                        className="border-blue-800 p-3 border rounded-2xl absolute top-24 bg-white"
                    />
                    <h1 className="font-bold mb-3 text-left">Choose Your Service</h1>
                    <p>
                        Select the service you need online, enter your details and complete
                        the payment.
                    </p>
                </div>

                <div className="border border-blue-800 flex flex-col justify-start items-start p-6 py-24 rounded-2xl grow">
                    <img
                        src={ReviewSubmitIcon}
                        alt="SendInfoIcon"
                        className="border-blue-800 p-3 border rounded-2xl absolute top-24 bg-white"
                    />
                    <h1 className="font-bold  mb-3 text-left">
                        Send us Your information
                    </h1>
                    <p>
                        Email your bank statements and last year’s accounts. We will confirm
                        once we have everything and if you have chosen the 48-hour
                        turnaround, it starts then.
                    </p>
                </div>

                <div className="border border-blue-800 flex flex-col justify-start items-start p-6 py-24  rounded-2xl grow">
                    <img
                        src={SendInfoIcon}
                        alt="SendInfoIcon"
                        className="border-blue-800 p-3 border rounded-2xl absolute top-24 bg-white"
                    />
                    <h1 className="font-bold  mb-3 text-left">Review & Submission</h1>
                    <p>
                        We will prepare your accounts and send them for approval .Once
                        approved we will file them online- Quick, Hassle Free and done in as
                        little as 48 hours.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default HowWeWork;
