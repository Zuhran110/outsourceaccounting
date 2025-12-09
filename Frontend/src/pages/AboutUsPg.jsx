import AboutHero from "../components/AboutUs/AboutHero/AboutHero";
import MissionStatement from "../components/AboutUs/MissionStatement/MissionStatement.jsx";
import JoinUs from "../components/JoinUs/JoinUs";
import OurStoryPg from "../components/AboutUs/OurStory/OurStory.jsx";
import Layout from "../layout";

const AboutUsPg = () => {
  return (
    <Layout>
      <AboutHero />
      <OurStoryPg />
      <MissionStatement />
      <JoinUs />
    </Layout>
  );
};
export default AboutUsPg;
