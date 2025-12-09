import Hero from "../components/Hero/Hero.jsx";
import Services from "../components/Services/Services.jsx";
import Outsource from "../components/WhyOutsource/Outsource.jsx";
import JoinUs from "../components/JoinUs/JoinUs.jsx";
import HowWeWork from "../components/HowWeWork/HowWeWork.jsx";
import ClientsTestimonials from "../components/ClientsTestimonials/ClientsTestimonials.jsx";

import Layout from "../layout.jsx";

const Home = () => {
  return (
    <Layout>
      <Hero />
      <Outsource />
      <Services />
      <HowWeWork />
      <JoinUs />
      <ClientsTestimonials />
    </Layout>
  );
};
export default Home;
