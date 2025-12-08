import React from "react";

const Card = ({ index, bgImg, personImg, name, title, description }) => {
    return (
        <div className="grid gap-2 border rounded w-100 h-auto grid-flow-row  relative overflow-x-hidden">
            <img src={bgImg} alt="" className="border-b-2 border-blue-500 " />

            <img
                src={personImg}
                alt=""
                className=" h-auto w-auto justify-self-center absolute top-30"
            />

            <div className="mt-16 p-3 space-y-2">
                <h2 className="justify-self-center ">{name}</h2>

                <h3 className="justify-self-center">{title}</h3>

                <p className="flex-wrap font-light text-center">{description}</p>
            </div>
        </div>
    );
};
export default Card;
