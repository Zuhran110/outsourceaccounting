import {
  one,
  two,
  three,
  four,
} from "../../../assets/images/AboutUs/OurValues/OurValuesImg.js";

const OurValues = () => {
  return (
    <div className="flex flex-col justify-between items-center mx-6 md:mx-12 my-12 md:my-20 lg:my-36">
      <h1 className="font-semibold text-2xl md:text-3xl lg:text-4xl my-12 lg:mb-12 text-center">
        Mission Statement & Vision Statement
      </h1>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-24 h-full">
        <div className="grid grid-rows-[1fr_auto_.5fr] h-full justify-items-center ">
          <img src={one} alt="one" className="w-full h-full object-contain" />
          <p className="flex items-center text-center mt-2">
            Customer success is our priority
          </p>
          <div>{/* Empty Space Bottom */}</div>
        </div>

        <div className="grid grid-rows-[.25fr_3fr_1fr] h-full justify-items-center ">
          <div>{/* Empty Space Top */}</div>
          <img src={two} alt="two" className="w-full h-full object-contain" />
          <p className="flex items-center text-center mt-2">
            Top quality & constant growth
          </p>
        </div>

        <div className="grid grid-rows-[1fr_auto_.5fr] h-full justify-items-center ">
          <img
            src={three}
            alt="three"
            className="w-full h-full object-contain"
          />
          <p className="flex items-center text-center mt-2">New technologies</p>
          <div></div>
        </div>

        <div className="grid grid-rows-[.25fr_3fr_1fr] h-full justify-items-center ">
          <div></div>
          <img src={four} alt="four" className="w-full h-full object-contain" />
          <p className="flex items-center text-center mt-2">
            Ecological materials & production
          </p>
        </div>
      </div>
    </div>
  );
};
export default OurValues;
