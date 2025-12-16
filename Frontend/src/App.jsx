import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Services from "./pages/Services.jsx";
import AboutUsPg from "./pages/AboutUsPg.jsx";
import Blogs from "./pages/BlogsPg.jsx";
import FAQSPg from "./pages/FAQSPg.jsx";
import ContactUSPg from "./pages/ContactUsPg.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/aboutus" element={<AboutUsPg />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/faqs" element={<FAQSPg />} />
      <Route path="/contactUs" element={<ContactUSPg />} />
    </Routes>
  );
}

export default App;
