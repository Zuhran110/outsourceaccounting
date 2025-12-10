import AboutHero from "../components/AboutUs/AboutHero/AboutHero";
import MissionStatement from "../components/AboutUs/MissionStatement/MissionStatement.jsx";
import JoinUs from "../components/JoinUs/JoinUs";
import OurStoryPg from "../components/AboutUs/OurStory/OurStory.jsx";
import Layout from "../layout";
import OurValues from "../components/AboutUs/OurValues/OurValues.jsx";

const AboutUsPg = () => {
  return (
    <Layout>
      <AboutHero />
      <OurStoryPg />
      <MissionStatement />
      <OurValues />
      <JoinUs />
    </Layout>
  );
};
export default AboutUsPg;
