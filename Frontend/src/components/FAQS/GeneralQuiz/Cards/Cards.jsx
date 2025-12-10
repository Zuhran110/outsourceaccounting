const Cards = ({ index, img, service, description }) => {
  return (
    <div className="flex justify-center gap-6 my-6 lg:my-12 mx-6 md:mx-12 border-b pb-2 md:pb-4 lg:mb-6">
      <div className="shrink">
        <img src={img} alt="" className="w-10 h-7 object-contain max-w-6" />
      </div>
      <div className="flex flex-col  ">
        <h1 className="font-semibold leading-tight mb-4 lg:mb-8">{service}</h1>
        <p className="font-light text-gray-600 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Cards;
