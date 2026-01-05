import Points from "./points/Points";
import GetStartedButton from "@/components/shared/buttons/GetStartedButton";

const Statistics = ({ data }) => {
  return (
    <div className="flex flex-col justify-between content-center items-center md:flex-row bg-blue-100 my-3 md:my-12 mx-3 md:mx-24 lg:my-24 py-3 md:py-8 px-3 md:px-12">
      <div className="flex flex-col gap-1 text-center md:text-start max-w-3/4 md:max-w-2/4">
        <h1 className="font-bold text-2xl md:text-3xl">{data.heading}</h1>
        <p>{data.description}</p>
        <div className="my-3">
          <Points data={data.data} />
        </div>
        <div className="">
          <GetStartedButton />
        </div>
      </div>
      <div className="flex flex-row items-end md:flex-col w-2/3 md:w-1/4">
        <img
          src={data.imgone}
          alt="statisticsone"
          className="min-w-1/4 self-end"
        />
        <img
          src={data.imgtwo}
          alt="statisticstwo"
          className="min-w-1/4 items-start self-start"
        />
        <img
          src={data.imgthree}
          alt="statisticsthree"
          className="min-w-1/4 self-end"
        />
      </div>
    </div>
  );
};

export default Statistics;
