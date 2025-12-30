import AboutUsImg from "../../../assets/images/AboutUs/AboutUs.png";

const AboutHero = () => {
  return (
    <div className="flex flex-col justify-center items-center my-6 lg:my-12 mx-6 md:mx-12">
      <div className="flex flex-col justify-center items-center mb-7 md:mb-14 mx-4 content-center ">
        <h1 className="font-semibold text-3xl md:text-4xl">About Us</h1>
        <h2 className="my-3 md:my-6 font-serif text-2xl lg:text-3xl">
          Reliable & affordable accounting services for your businesses!
        </h2>
      </div>
      <img src={AboutUsImg.src} alt="AboutUsImg" />
    </div>
  );
};

export default AboutHero;
