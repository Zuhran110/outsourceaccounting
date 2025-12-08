import React, { forwardRef } from "react";
import Card from "./Card";

import {
    CTBG,
    CTPersonIMG,
    StarIcon,
    CTBGTWO,
    CTPersonIMGTWO,
    CTBGThree,
    CTPersonIMGthree,
} from "../../../assets/images/ClientsTestimonials/CTimg.js";

const data = [
    {
        id: 1,
        bgImg: CTBG,
        personImg: CTPersonIMG,
        name: "Thomson Reuters",
        title: "Founder",
        description:
            "I have never felt more confident about my finances than I do with outsource accounting services. Their personalized support is exceptional!",
    },
    {
        id: 2,
        bgImg: CTBGTWO,
        personImg: CTPersonIMGTWO,
        name: "Intuit Inc.",
        title: "CEO",
        description:
            "Outsource accounting has transformed the way I manage my business finances. Their expertise and attention to detail are unparalleled.",
    },
    {
        id: 3,
        bgImg: CTBGThree,
        personImg: CTPersonIMGthree,
        name: "FreshBooks",
        title: "Co-Founder",
        description:
            "Choosing outsource accounting services was the best decision I made for my business. Their team is knowledgeable, responsive, and truly cares about my success.",
    },
    {
        id: 4,
        bgImg: CTBG,
        personImg: CTPersonIMG,
        name: "Xero Ltd.",
        title: "Managing Director",
        description:
            "Outsource accounting services have exceeded my expectations in every way. Their professionalism and dedication to client satisfaction are truly commendable.",
    },
    {
        id: 5,
        bgImg: CTBGTWO,
        personImg: CTPersonIMGTWO,
        name: "Wave Financial",
        title: "President",
        description:
            "I highly recommend outsource accounting services to any business owner looking for reliable and efficient financial management. Their team is top-notch!",
    },
];

const Cards = forwardRef((props, ref) => {
    return (

        < div ref={ref} className="grid gap-8 grid-flow-col justify-items-center relative overflow-x-scroll scroll-smooth no-scrollbar " >
            {
                data.map((card, index) => {
                    const { bgImg, personImg, name, title, description } = card;

                    return (
                        <div key={index} className="flex">
                            <Card
                                key={index}
                                bgImg={bgImg}
                                personImg={personImg}
                                name={name}
                                title={title}
                                description={description}
                            />
                        </div>
                    );
                })
            }
        </div >
    );
});

export default Cards;
