"use client";
import CardsContact from "./CardsContact";
import callIcon from "../../../assets/images/ContactUS/ContactUsHero/callIcon.png";
import mailIcon from "../../../assets/images/ContactUS/ContactUsHero/mailIcon.png";
import whatsapp from "../../../assets/images/ContactUS/ContactUsHero/whatsapp.png";

const data = [
  {
    id: 1,
    img: whatsapp.src,
    title: "Whatsapp:",
    description: "Speak to our friendly team",
    details: "0208 144 6811",
  },
  {
    id: 2,
    img: callIcon.src,
    title: "Call Us",
    description: "Speak to our friendly team",
    details: "0208 144 6811",
  },
  {
    id: 3,
    img: mailIcon.src,
    title: "Email:",
    description: "We are here to help you",
    details: "admin@outsourseaccountings.co.uk",
  },
];

const CardContact = () => {
  return (
    <div className="mx-12 lg:mx-0 flex flex-col  items-center md:items-start">
      <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl text-blue-800">
        Get In Touch
      </h1>
      <p>Fill out the form and a member of our team will be in touch soon.</p>
      {data.map((card, index) => {
        const { id, img, title, description, details } = card;
        return (
          <div key={id} className="w-3/4 min-w-auto md:min-w-120">
            <CardsContact
              img={img}
              title={title}
              description={description}
              details={details}
            />
          </div>
        );
      })}
    </div>
  );
};

export default CardContact;
