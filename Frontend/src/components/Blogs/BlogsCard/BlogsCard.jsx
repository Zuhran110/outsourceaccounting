import BlogsCardSingle from "./blogsCardSingle/blogsCardSingle";

const BlogsCard = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center content-center lg:justify-between mx-2 md:mx-6 my-6 md:my-12 lg:my-20">
      <BlogsCardSingle />
    </div>
  );
};
export default BlogsCard;
