import GetStartedButton from "@/components/shared/buttons/GetStartedButton";
import Cards from "./subComponents/Cards";

const Hero = ({ data }) => {
  return (
    <section className="relative mx-4 my-4 md:mx-12 md:my-8 lg:mx-24 lg:my-12 rounded-2xl overflow-hidden border border-transparent shadow-sm">
      <div className="absolute inset-0 w-full h-full -z-10">
        <img
          src={data.bgImage}
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between p-6 md:p-12 gap-8 lg:gap-12">
        <div className="w-full lg:w-1/2 flex flex-col text-center lg:text-left items-center lg:items-start space-y-6">
          <div className="space-y-2">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-black">
              {data.title}{" "}
              <span className="text-blue-800">{data.titleHighlight}</span>
            </h1>

            {data.subtitle && (
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-black">
                {data.subtitle}
              </h2>
            )}
          </div>
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

          <div className="pt-2">
            <GetStartedButton />
          </div>

          <div className=" pt-4 lg:pt-8 flex justify-center lg:justify-start">
            <Cards />
          </div>
        </div>

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
