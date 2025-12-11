import Layout from "../layout.jsx";
import ContactUsForm from "../components/ContactUs/ContactUsForm/ContactUsForm.jsx";
import ContactUsHero from "../components/ContactUs/ContactUsHero/ContactUsHero.jsx";
import BookACall from "../components/FAQS/BookACall/BookACall.jsx";

const ContactUs = () => {
  return (
    <Layout>
      <ContactUsHero />
      <ContactUsForm />
      <BookACall />
    </Layout>
  );
};

export default ContactUs;
