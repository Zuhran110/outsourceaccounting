import HeroBackgroundImg from "../../../assets/images/serivePgsImg/Hero/HeroBackgroundImg.png";

const Hero = ({ data }) => {
  return (
    <div className="relative flex flex-row md:justify-evenly align-middle content-center border border-transparent rounded-2xl mx-3 md:mx-12 lg:mx-24 my-3 md:my-6 lg:my-12 px-3 md:px-4 lg:px-8 py-2 md:py-6 lg:py-12">
      {/* Background Image - can be from data or default */}
      <img
        src={data?.bgImage || HeroBackgroundImg.src}
        alt=""
        className="absolute inset-0 w-screen h-full object-cover -z-10 border border-transparent rounded-2xl align-middle"
      />

      <div className="w-full md:w-1/2 text-black flex flex-col justify-center">
        {/* ✅ DYNAMIC TITLE */}
        <h1 className="text-2xl md:text-3xl font-bold leading-snug md:max-w-120">
          {data.title}{" "}
          <span className="text-blue-800">{data.titleHighlight}</span>
        </h1>

        {/* ✅ DYNAMIC SUBTITLE */}
        <h1 className="text-2xl md:text-3xl font-bold mb-6 leading-snug md:max-w-120">
          <span className="">{data.subtitle}</span>
        </h1>

        {/* ✅ DYNAMIC DESCRIPTION - Loop through paragraphs */}
        <div>
          {data.description.map((paragraph, index) => (
            <p key={index} className="hidden md:block mb-4 max-w-3/4">
              {paragraph}
            </p>
          ))}
        </div>

        {/* ✅ DYNAMIC BUTTON TEXT */}
        <div>
          <button className="border border-transparent bg-blue-800 rounded-2xl text-white py-3 px-6">
            {data.buttonText}
          </button>
        </div>
      </div>

      {/* ✅ DYNAMIC IMAGE */}
      <div>
        <img src={data.image} alt="" className="w-100 h-100" />
      </div>
    </div>
  );
};

export default Hero;
