import BookACall from "../../../assets/images/serivePgsImg/BookACall/BookACall.png";
import Group from "../../../assets/images/OutSourseHero/BookaCallImg/Group.png";

const FASolutions = () => {
  return (
    <div
      className="relative flex flex-col md:flex-row justify-between 
   my-6 lg:my-12 mx-6 md:mx-12 rounded-2xl overflow-hidden"
    >
      <img
        src={BookACall.src}
        alt="Book a call background"
        className="absolute w-full h-full object-cover"
      />
      <div
        className="relative z-10 flex flex-col md:flex-row justify-between items-center
    p-6 md:p-12 lg:p-16 w-full"
      >
        <div className="flex flex-col gap-6">
          <h1 className="font-semibold text-2xl md:text-3xl lg:text-4xl text-center md:text-start">
            Book a 1-on-1 Call
          </h1>

          <p className="font-light max-w-xl text-center md:text-start">
            Have questions or need personalized support? Our team is here to
            help you every step of the way—don't hesitate to reach out!
          </p>

          <button
            className="bg-purple-200 px-6 py-3 rounded-2xl font-medium 
        w-fit mx-auto md:mx-0 hover:bg-purple-300 transition"
          >
            Book free 30 Min Now
          </button>
        </div>

        <div className="mt-6 md:mt-0">
          <img
            src={Group.src}
            alt="Consultation illustration"
            className="w-64 md:w-80 lg:w-96"
          />
        </div>
      </div>
    </div>
  );
};
export default FASolutions;
