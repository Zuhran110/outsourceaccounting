import { useParams } from "react-router-dom";
import {
  HSIX,
  HTHREE,
  HTOO,
  HONE,
  HFOOR,
  HFIVE,
  HeroBackgroundImg,
} from "../../../assets/images/serivePgsImg/Hero/HeroServicePgImg.js";

const Hero = () => {
  return (
    <div
      className="relative flex flex-row  md:justify-evenly align-middle content-center
    border border-transparent rounded-2xl 
    mx-3 md:mx-12 lg:mx-24 my-3 md:my-6 lg:my-12
    px-3 md:px-4 lg:px-8 py-2 md:py-6 lg:py-12"
    >
      {
        <img
          src={HeroBackgroundImg}
          alt=""
          className="absolute inset-0 w-screen h-full object-cover  -z-10 border border-transparent rounded-2xl align-middle"
        />
      }
      <div className="w-full md:w-1/2  text-black flex flex-col justify-center">
        <h1 className="text-2xl md:text-3xl font-bold leading-snug md:max-w-120">
          Preparing <span className="text-blue-800">Annual</span>
        </h1>
        <h1 className="text-2xl md:text-3xl font-bold mb-6 leading-snug md:max-w-120">
          <span className="text-blue-800">Accounts </span> for Year-End
        </h1>
        <div>
          <p className="hidden md:block mb-4 max-w-3/4">
            Preparing annual accounts can be time-consuming and complicated, but
            it doesn’t have to be. At online accountant, we provide annual
            accounts services designed to make the process seamless and
            stress-free. Our expert team ensures your year-end accounts are
            accurate, compliant, and submitted on time, helping you avoid
            penalties and maintain peace of mind.
          </p>
          <p className="hidden md:block mb-4 max-w-3/4">
            Whether you're a small business or a growing enterprise, we
            offer annual accounts service tailored to meet your unique needs.
            Let us handle your Ltd company accounts, so you can focus on running
            your business with confidence
          </p>
        </div>
        <div>
          <button className="border border-transparent bg-blue-800 rounded-2xl text-white py-3 px-6">
            Get Started Know
          </button>
        </div>
      </div>
      <div>
        <img src={HONE} alt="" className="w-100 h-100" />
      </div>
    </div>
  );
};

export default Hero;
