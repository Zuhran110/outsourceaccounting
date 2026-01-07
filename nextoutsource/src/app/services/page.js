import Services from "@/components/home/Services/Services";
import JoinUs from "@/components/home/JoinUs/JoinUs.jsx";
import ContactForm from "@/components/shared/forms/contactForm/ContectForm";
import TimeTest from "@/components/shared/forms/contactForm/components/TimeTest";

export default function services() {
  return (
    <>
      <TimeTest />
      <ContactForm />
      <Services />
      <JoinUs />
    </>
  );
}
