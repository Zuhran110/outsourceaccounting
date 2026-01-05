const AnnualAcounts = ({ data }) => {
  return (
    <div className="flex flex-col items-center mx-12 my-6 md:mx-24 md:my-12">
      <div className="flex flex-col lg:flex-row justify-center md:justify-evenly items-center gap-6 lg:gap-12 mt-8">
        <div className="relative flex justify-center md:justify-start">
          <img
            src={data.img}
            alt="Annual accounts preparation illustration"
            className="rounded z-50 w-8/9 h-8/9"
          />
        </div>
        <div className="flex flex-col justify-center content-center items-center text-center md:text-start md:items-start lg:items-start w-full lg:w-120 gap-6 ">
          <h1 className="text-3xl font-semibold">{data.heading}</h1>
          <p className="font-light">{data.descriptionone}</p>
          <p className="font-light">{data.descriptiontwo}</p>
        </div>
      </div>
    </div>
  );
};
export default AnnualAcounts;
