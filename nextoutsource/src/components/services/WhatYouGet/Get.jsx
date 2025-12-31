"use client";
import Cards from "./components/Cards";

const Get = ({ data }) => {
  return (
    <div className="flex flex-col items-center bg-blue-50 my-3 md:my-12 lg:my-24">
      <div className="py-3 md:py-8">
        <h1 className="text-blue-800 font-semibold md:font-semibold text-2xl md:text-4xl">
          {data.heading}
        </h1>
      </div>

      <Cards data={data.whatYouGetcards} />
    </div>
  );
};

export default Get;
