import {
  Mission,
  Vision,
} from "../../../assets/images/AboutUs/Mission/MissionScript.js";

const MissionStatement = () => {
  return (
    <div className="bg-blue-800 flex flex-col justify-between items-center p-8 text-white">
      <div>
        <h1 className="font-semibold text-2xl md:text-3xl lg:text-4xl my-6 lg:mb-12">
          Mission Statement & Vision Statement
        </h1>
      </div>
      <div className="w-auto h-auto flex flex-col lg:flex-row gap-8 justify-center items-center">
        <div className="bg-white text-black grid grid-cols-1 grid-rows-[auto_auto_1fr] h-screen p-6 justify-items-center max-w-220 lg:max-w-120 max-h-min md:max-h-90 rounded-2xl">
          <img src={Mission} alt="Mission" className="w-24 h-24  my-2" />
          <h1 className="font-semibold my-2">Mission Statement</h1>
          <p>
            At Outsource Accounting, weʼve got a straightforward mission – weʼre
            here to hook you up with outstanding accounting services that fit
            your needs like a glove. And guess what? Weʼre doing it all while
            keeping things cheaper for you. We understand that juggling finances
            can be a bit of a head-scratcher.
          </p>
        </div>
        <div className="bg-white text-black grid grid-cols-1 grid-rows-[auto_auto_1fr] h-screen p-6 justify-items-center max-w-220 lg:max-w-120 max-h-min md:max-h-90 rounded-2xl">
          <img src={Vision} alt="Vision" className="w-24 h-24  my-2" />
          <h1 className="font-semibold my-2">Vision Statement</h1>
          <p className="">
            To become the UKʼs most trusted online accounting partner, making
            business finance management simple, affordable, and fully digital
            for entrepreneurs, freelancers, and small businesses everywhere.
          </p>
        </div>
      </div>
    </div>
  );
};
export default MissionStatement;
