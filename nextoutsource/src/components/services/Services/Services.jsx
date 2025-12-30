import ServiceCards from "./ServiceComponents/ServiceCards.jsx";

const Services = () => {
  return (
    <section
      className="flex flex-col self-center items-center content-center justify-center text-black bg-white lg:my-12 mx-12 md:mx-20"
      id="services"
    >
      <div className="flex self-center items-center content-center justify-center text-black bg-white flex-wrap">
        <h2 className="text-2xl font-bold mb-4 w-full text-center">
          Our Simple Process –{" "}
          <span className="text-blue-800">How It Works</span>
        </h2>
        <ServiceCards />
      </div>
      <div>
        <button className="border px-6 py-3 border-blue-800 bg-blue-800 m-6 text-white rounded">
          Get Started Know
        </button>
      </div>
    </section>
  );
};

export default Services;
