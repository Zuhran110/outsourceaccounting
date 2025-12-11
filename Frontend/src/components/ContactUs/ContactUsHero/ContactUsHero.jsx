import CardContact from "./Card/CardContact.jsx";
import {
  callIcon,
  locationIcon,
  heroLineIcon,
  mailIcon,
  ContactUsPeople,
} from "../../../assets/images/ContactUS/ContactUsHero/ContactUseroImgs.js";

import {
  PersonOne,
  PersonTwo,
  PersonThree,
  PersonFour,
  PersonFive,
  PersonSix,
  PersonSeven,
  PersonEigth,
  PersonNine,
} from "../../../assets/images/ContactUS/ContactUsHero/PersonsImg/PersonsImg.js";

const ContactUsHero = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center text-center my-3 md:my-6 lg:my-12 mx-6 md:mx-12">
        <img src={heroLineIcon} alt="heroLineIcon" className="m-6" />
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-serif font-semibold m-6">
          Contact Our Friendly Team
        </h1>
        <p className="font-semibold m-6">Let us know how we can help you</p>
      </div>
      <div className="flex flex-col md:flex-row justify-evenly">
        <div>
          <CardContact />
        </div>
        <div className="">
          <img src={ContactUsPeople} alt="ContactUsPeople" />
        </div>
      </div>
    </div>
  );
};
export default ContactUsHero;
