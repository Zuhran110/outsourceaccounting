import AnnualAccounts from "@/assets/images/serivePgsImg/AnnualAccounts/AnnualAccounts.png";

const AnnualAcounts = ({ data }) => {
  return (
    <div className="flex flex-col items-center mx-12 my-6 md:mx-24 md:my-12">
      <div className="flex flex-col lg:flex-row justify-center lg:justify-evenly items-center gap-4 lg:gap-8 mt-8">
        <div className="relative flex items-center justify-center mt-6 ">
          <img
            src={data.img}
            alt="Annual accounts preparation illustration"
            className="rounded z-50 w-3/4 h-3/4"
          />
        </div>
        <div className="flex flex-col justify-center lg:items-start w-full lg:w-120 gap-3 md:gap-6">
          <h1 className="text-3xl font-semibold">{data.heading}</h1>
          <p className="font-light">{data.descriptionone}</p>
          <p className="font-light">{data.descriptiontwo}</p>
        </div>
      </div>
    </div>
  );
};
export default AnnualAcounts;
