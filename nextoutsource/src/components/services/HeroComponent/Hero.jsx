import GetStartedButton from "@/components/shared/buttons/GetStartedButton";
import Cards from "./subComponents/Cards";

const Hero = ({ data }) => {
  return (
    // MAIN CONTAINER
    // 1. Removed nested duplicate divs.
    // 2. Added overflow-hidden so the background image doesn't spill out of the rounded corners.
    <section className="relative mx-4 my-4 md:mx-12 md:my-8 lg:mx-24 lg:my-12 rounded-2xl overflow-hidden border border-transparent shadow-sm">
      {/* BACKGROUND IMAGE layer */}
      <div className="absolute inset-0 w-full h-full -z-10">
        <img
          src={data.bgImage}
          alt="Background"
          className="w-full h-full object-cover"
        />
        {/* Optional: Overlay to ensure text readability if bg is busy */}
        {/* <div className="absolute inset-0 bg-white/50"></div> */}
      </div>

      {/* CONTENT FLEX WRAPPER */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between p-6 md:p-12 gap-8 lg:gap-12">
        {/* --- LEFT COLUMN: TEXT --- */}
        <div className="w-full lg:w-1/2 flex flex-col text-center lg:text-left items-center lg:items-start space-y-6">
          {/* Headings */}
          <div className="space-y-2">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-black">
              {data.title}{" "}
              <span className="text-blue-800">{data.titleHighlight}</span>
            </h1>

            {data.subtitle && (
              <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
                {data.subtitle}
              </h2>
            )}
          </div>

          {/* Description */}
          {/* Changed 'hidden' to visible on mobile but smaller text, or keep hidden if strictly intended */}
          <div className="space-y-4 max-w-xl">
            {data.description.map((paragraph, index) => (
              <p
                key={index}
                className="text-gray-700 text-sm md:text-base leading-relaxed"
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* CTA Button */}
          <div className="pt-2">
            <GetStartedButton />
          </div>

          {/* Cards Subcomponent */}
          {/* Added w-full so it can control its own layout */}
          <div className=" pt-4 lg:pt-8 flex justify-center lg:justify-start">
            <Cards />
          </div>
        </div>

        {/* --- RIGHT COLUMN: HERO IMAGE --- */}
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <img
            src={data.image}
            alt={data.title}
            className="w-full h-auto max-w-md lg:max-w-full object-contain drop-shadow-lg hidden lg:inline-block"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
