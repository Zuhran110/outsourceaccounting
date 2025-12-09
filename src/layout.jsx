import TopBar from "./components/TopBar/TopBar";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <div className="sticky top-0 left-0 w-full z-100 ">
        <TopBar />
        <Navbar />
      </div>
      <main className="pt-0 md:pt-0">{children}</main>

      <Footer />
    </div>
  );
};

export default Layout;
