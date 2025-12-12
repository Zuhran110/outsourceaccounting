import BlogsCardMultiple from "../blogsCardMulitple/BlogsCardMultiple";
import {
  BlogsCardImgTHREE,
  BlogsCardImgTWO,
  BlogsCardImgONE,
  BlogsCardImgFOUR,
  BlogsCardImgFIVE,
  BlogsCardImgSIX,
} from "../../../../assets/images/AboutUs/BlogsCard/BlogsCardImg";

const data = [
  {
    id: 1,
    img: BlogsCardImgONE,
    title:
      "Online Accountant vs Traditional Accountant: What’s Best for Your Business?",
    description:
      "Choosing the right accountant can make or break your financial peace of mind. For UK business owners, the decision between hiring an online accountant or going the traditional route isn’t always clear. Both offer value but which one suits your situation? ",
  },
  {
    id: 2,
    img: BlogsCardImgTWO,
    title:
      "Online Accountant vs Traditional Accountant: What’s Best for Your Business?",
    description:
      "Choosing the right accountant can make or break your financial peace of mind. For UK business owners, the decision between hiring an online accountant or going the traditional route isn’t always clear. Both offer value but which one suits your situation?",
  },
  {
    id: 3,
    img: BlogsCardImgTHREE,
    title:
      "Online Accountant vs Traditional Accountant: What’s Best for Your Business?",
    description:
      "Choosing the right accountant can make or break your financial peace of mind. For UK business owners, the decision between hiring an online accountant or going the traditional route isn’t always clear. Both offer value but which one suits your situation?",
  },
  {
    id: 4,
    img: BlogsCardImgFOUR,
    title:
      "Online Accountant vs Traditional Accountant: What’s Best for Your Business?",
    description:
      "Choosing the right accountant can make or break your financial peace of mind. For UK business owners, the decision between hiring an online accountant or going the traditional route isn’t always clear. Both offer value but which one suits your situation?",
  },
  {
    id: 5,
    img: BlogsCardImgFIVE,
    title:
      "Online Accountant vs Traditional Accountant: What’s Best for Your Business?",
    description:
      "Choosing the right accountant can make or break your financial peace of mind. For UK business owners, the decision between hiring an online accountant or going the traditional route isn’t always clear. Both offer value but which one suits your situation?",
  },
  {
    id: 6,
    img: BlogsCardImgSIX,
    title:
      "Online Accountant vs Traditional Accountant: What’s Best for Your Business?",
    description:
      "Choosing the right accountant can make or break your financial peace of mind. For UK business owners, the decision between hiring an online accountant or going the traditional route isn’t always clear. Both offer value but which one suits your situation?",
  },
];

const BlogsCardSingle = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 container mx-auto p-4 w-full">
      {data.map((cardDetails, index) => {
        // Logic: On desktop (md), index 0, 3, 6 are full width.
        // On mobile, everything is automatically full width due to grid-cols-1.
        const isFullRow = index % 3 === 0;

        return (
          <div
            key={cardDetails.id}
            className={`${isFullRow ? "md:col-span-2" : "md:col-span-1"}`}
          >
            <BlogsCardMultiple
              img={cardDetails.img}
              title={cardDetails.title}
              description={cardDetails.description}
              // Pass whether it should be a row or col on desktop
              isFullRow={isFullRow}
            />
          </div>
        );
      })}
    </div>
  );
};
export default BlogsCardSingle;
