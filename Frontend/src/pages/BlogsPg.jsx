import HeroBlog from "../components/Blogs/HeroBlog";
import Layout from "../layout";
import JoinUs from "../components/JoinUs/JoinUs";
import CategoryGot from "../components/Blogs/Categories/CategoryGot";
import BlogsCard from "../components/Blogs/BlogsCard/BlogsCard";

const BlogsPg = () => {
  return (
    <Layout>
      <HeroBlog />
      <CategoryGot />
      <BlogsCard />
      <JoinUs />
    </Layout>
  );
};

export default BlogsPg;
