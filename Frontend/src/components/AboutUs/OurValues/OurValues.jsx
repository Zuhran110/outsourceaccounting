import {
  one,
  two,
  three,
  four,
} from "../../../assets/images/AboutUs/OurValues/OurValuesImg.js";

const OurValues = () => {
  return (
    <div className="flex flex-col justify-between items-center mx-6 md:mx-20 my-6 md:my-12 lg:my-18">
      <h1 className="font-semibold text-2xl md:text-3xl lg:text-4xl my-12 lg:mb-12 text-center">
        Mission Statement & Vision Statement
      </h1>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-24">
        <div className="flex flex-col items-center">
          <img
            src={one}
            alt="one"
            className="w-46 md:w-48 lg:w-66 h-auto object-contain"
          />
          <p className="text-center mt-2">Customer success is our priority</p>
        </div>

        <div className="flex flex-col items-center pt-6 md:pt-8 lg:pt-10">
          <img
            src={two}
            alt="two"
            className="w-46 md:w-48 lg:w-66 h-auto object-contain"
          />
          <p className="text-center mt-2">Top quality & constant growth</p>
        </div>

        <div className="flex flex-col items-center">
          <img
            src={three}
            alt="three"
            className="w-46 md:w-48 lg:w-66 h-auto object-contain"
          />
          <p className="text-center mt-2">New technologies</p>
        </div>

        <div className="flex flex-col items-center pt-6 md:pt-8 lg:pt-10">
          <img
            src={four}
            alt="four"
            className="w-46 md:w-48 lg:w-66 h-auto object-contain"
          />
          <p className="text-center mt-2">Ecological materials & production</p>
        </div>
      </div>
    </div>
  );
};
export default OurValues;
