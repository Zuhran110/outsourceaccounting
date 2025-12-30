import OurStory from "../../../assets/images/AboutUs/OurStory/OurStory.png";

const OurStoryPg = () => {
  return (
    <div>
      <div className=" flex flex-col lg:flex-row justify-center items-center lg:justify-between mx-6 md:mx-12 lg:mx-24 my-6 md:my-16 lg:my-24">
        <img
          src={OurStory.src}
          alt="Our Story"
          className="hidden lg:block lg:w-auto lg:h-auto "
        />
        <div className="flex flex-col gap-3 lg:gap-6 lg:ml-12">
          <h1 className="text-center lg:text-start font-semibold lg:text-4xl md:text-3xl text-2xl my-3 md:my-0">
            Our Story
          </h1>
          <p className="font-light text-center md:text-start">
            Hello and welcome to Outsource Accounting! We’re all about blending
            expertise with affordability, putting your financial success right
            at the top of our task list. Our journey started with a simple idea
            – to shake up the world of accounting services in the UK. Why?
            Because we believe every business, big or small, should have access
            to spot on accounting without draining the bank. So, let’s make your
            financial journey silky and more successful together!
          </p>
          <p className="font-light mb-3 text-center md:text-start">
            Starting from our small beginnings, we’ve grown into a reliable ally
            for loads of businesses right here in the UK. We at Outsource
            Accounting have expert accountants who are clocked on to the fact
            that accounting needs a breath of fresh air – something beyond just
            numbers and charts. We want a way to really get what businesses
            deserve in the lively UK market.
          </p>
        </div>
      </div>
    </div>
  );
};
export default OurStoryPg;
