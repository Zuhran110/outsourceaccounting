import HeroDataProvider from "./HeroDataProvider.jsx";

const HeroCard = ({ title, img, paragraphOne, paragraphTwo }) => {
  return (
    <div>
      <div>
        <div>{title}</div>
        <div>
          <p>{paragraphOne}</p>
          <p> {paragraphTwo} </p>
        </div>
        <div>
          <button>connect with us</button>
        </div>
      </div>
      <div>
        <img src={img} alt="" />
      </div>
    </div>
  );
};
export default HeroCard;
