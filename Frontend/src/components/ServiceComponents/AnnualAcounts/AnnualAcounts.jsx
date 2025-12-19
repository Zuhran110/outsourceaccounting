import AnnualAccounts from "../../../assets/images/serivePgsImg/AnnualAccounts/AnnualAccounts.png";
import BulletPoints from "./components/BulletPoints.jsx";

const AnnualAcounts = () => {
  return (
    <div className="flex flex-col items-center mx-12 my-6 md:mx-24 md:my-12">
      <h1 className="text-3xl font-semibold text-center pb-4">
        Annual Accounts Preparation Service
      </h1>

      <p className="text-center max-w-3xl">
        Our year-end accounting process includes a thorough review of your
        financial records, adjustments to meet accounting standards, and
        preparing final accounts.
      </p>

      <div className="flex flex-col lg:flex-row justify-center lg:justify-evenly items-center gap-6 lg:gap-12 mt-8">
        <div className="flex flex-col justify-center lg:items-start w-full lg:w-[480px]">
          <BulletPoints />
        </div>

        <div
          className="relative flex items-center justify-center mt-6 
          w-2/4 h-2/4 md:w-3/4 md:h-3/4 lg:w-3/4 lg:h-3/4"
        >
          <img
            src={AnnualAccounts}
            alt="Annual accounts preparation illustration"
            className="rounded z-50"
          />
        </div>
      </div>
    </div>
  );
};
export default AnnualAcounts;
