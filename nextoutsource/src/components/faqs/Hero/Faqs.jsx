import OutSourceHero from "../../../assets/images/OutSourseHero/OutSourceHero.png";
const Faqs = () => {
  return (
    <div
      className="flex flex-col justify-center items-center content-center justify-self-center
      md:items-start border-transparent rounded-2xl 
      w-8/9 md:w-2/3
    bg-linear-to-r from-gray-50 to-blue-300  
    my-6 lg:my-12 mx-3 md:m-12
    py-6 lg:py-12 px-6 md:px-12"
    >
      <h1
        className="text-transparent bg-clip-text bg-linear-to-r from-blue-800 to-gray-600 font-semibold 
      text-2xl md:text-3xl lg:text-4xl my-2 md:my-3 text-center md:text-start"
      >
        Frequently Ask Questions
      </h1>
      <p className="font-light max-w-140 text-center md:text-start">
        These are most commonly question about Outsource Accounting. Can’t find
        what you’re Looking for ?{" "}
        <a href="" className="text-blue-600">
          {" "}
          Chat to our friendly team
        </a>
      </p>
    </div>
  );
};

export default Faqs;
