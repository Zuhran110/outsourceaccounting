import AboutHero from "@/components/about/AboutHero/AboutHero.jsx";
import MissionStatement from "@/components/about/MissionStatement/MissionStatement";
import OurStoryPg from "@/components/about/OurStory/OurStory";
import OurValues from "@/components/about/OurValues/OurValues";
import JoinUs from "@/components/home/JoinUs/JoinUs.jsx";

export default function aboutus() {
  return (
    <>
      <AboutHero />
      <OurStoryPg />
      <MissionStatement />
      <OurValues />
      <JoinUs />
    </>
  );
}
