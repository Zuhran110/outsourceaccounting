import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home.jsx";
import Services from "./pages/Services.jsx";
import AboutUsPg from "./pages/AboutUsPg.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/aboutus" element={<AboutUsPg />} />
    </Routes>
  );
}

export default App;
