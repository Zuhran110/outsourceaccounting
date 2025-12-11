import CardContact from "./CardContact";
const CardsContact = ({ id, img, title, description, details }) => {
  return (
    <div className="border p-2 md:p-4 lg:p-8 my-2 md:my-4 mx-2 lg:mx-0 border-purple-200 rounded-2xs shadow-2xs shadow-purple-50">
      <img src={img} alt="" />
      <h1 className="my-3 font-normal md:font-semibold ">{title}</h1>
      <p className="font-light md:font-normal">{description}</p>
      <p className="font-normal lg:font-semibold"> {details} </p>
    </div>
  );
};
export default CardsContact;
