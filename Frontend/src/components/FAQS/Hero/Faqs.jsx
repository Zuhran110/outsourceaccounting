import OutSourceHero from "../../../assets/images/OutSourseHero/OutSourceHero.png";
const Faqs = () => {
  return (
    <div className="relative flex justify-center items-center content-center my-6 lg:my-12 mx-6 md:mx-12">
      <div className=" my-6 lg:my-12 mx-6 md:mx-12">
        <img src={OutSourceHero} alt="" />
      </div>
      <div className="absolute flex flex-col items-center">
        <h1 className="text-transparent bg-clip-text bg-linear-to-r from-[#9A84FF] to-black font-semibold text-2xl md:text-3xl lg:text-4xl my-2 md:my-3 md:m-6">
          Frequently Ask Questions
        </h1>
        <p className="font-light max-w-140 text-center">
          These are most commonly question about Outsource Accounting. Can’t
          find what you’re Looking for ?{" "}
          <a href=""> Chat to our friendly team</a>
        </p>
      </div>
    </div>
  );
};

export default Faqs;
