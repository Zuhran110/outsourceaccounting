import Cards from "./components/Cards";

const Get = () => {
  return (
    <div
      className="flex flex-col items-center bg-blue-50
        mx-3 md:mx-12 lg:mx-24 
        my-3 md:my-12 lg:my-24"
    >
      <div className="py-3 md:py-8">
        <h1 className="text-blue-800 font-semibold md:font-semibold text-2xl md:text-4xl">
          What You Will Get
        </h1>
      </div>

      <Cards />
    </div>
  );
};

export default Get;
