import FAQS from "../components/FAQS/Hero/Faqs.jsx";
import GeneralQuiz from "../components/FAQS/GeneralQuiz/GeneralQuiz.jsx";
import BookACall from "../components/FAQS/BookACall/BookACall.jsx";
import Layout from "../layout";

const FAQSPg = () => {
  return (
    <Layout>
      <FAQS />
      <GeneralQuiz />
      <BookACall />
    </Layout>
  );
};

export default FAQSPg;
