import {
  PersonOne,
  PersonTwo,
  PersonThree,
  PersonFour,
} from "../../../assets/images/OutSourseHero/BookaCallImg/BookaCallimg.js";

import Group from "../../../assets/images/OutSourseHero/BookaCallImg/Group.png";

const BookACall = () => {
  return (
    <div className="my-6 lg:my-12 mx-6 md:mx-12 flex justify-between flex-col md:flex-row bg-purple-50 p-6 md:p-12 lg:p-16">
      <div className=" flex flex-col gap-6">
        <h1 className="font-semibold text-2xl md:text-3xl lg:text-4xl my-2 md:my-3 text-center lg:text-start">
          Book a 1 -on- 1 Call
        </h1>
        <p className="font-light max-w-140 text-center md:text-start">
          Have questions or need personalized support? Our team is here to help
          you every step of the way—don't hesitate to reach out!
        </p>
        <p className="bg-purple-200 p-2 text-center lg:p-4 max-w-48 rounded-2xl">
          Book free 30 Min Now
        </p>
      </div>
      <div>
        <img src={Group} alt="" className="p-2" />
      </div>
    </div>
  );
};
export default BookACall;
