import CardsContact from "./CardsContact";
import {
  callIcon,
  locationIcon,
  heroLineIcon,
  mailIcon,
} from "../../../../assets/images/ContactUS/ContactUsHero/ContactUseroImgs.js";

const data = [
  {
    id: 1,
    img: callIcon,
    title: "Call Us",
    description: "Speak to our friendly team",
    details: "0208 144 6811",
  },
  {
    id: 2,
    img: mailIcon,
    title: "Email:",
    description: "We are here to help you",
    details: "admin@outsourseaccountings.co.uk",
  },
  {
    id: 3,
    img: locationIcon,
    title: "Address:",
    description: "Monday-Friday 7:00-18:00",
    details: "61 Bridge Street, Kington, United Kingdom, HR5 3DJ",
  },
];

const CardContact = () => {
  return (
    <div>
      {data.map((card, index) => {
        const { id, img, title, description, details } = card;
        return (
          <div key={id}>
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
