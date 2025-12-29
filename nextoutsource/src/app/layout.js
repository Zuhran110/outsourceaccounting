import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";
import TopBar from "@/components/layout/TopBar/TopBar.jsx";
import Navbar from "@/components/layout/Navbar/Navbar.jsx";
import Footer from "@/components/layout/Footer/Footer.jsx";

export const metadata = {
  title: "Outsource Accounting",
  description: "Professional accounting services for your business",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <TopBar />
        <Navbar />
        {children}
        <Footer />
        <ToastContainer position="top-right" />
      </body>
    </html>
  );
}
