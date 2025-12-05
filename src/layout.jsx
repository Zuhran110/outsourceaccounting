import React from "react";
import TopBar from "./components/TopBar/TopBar";
import Navbar from "./components/Navbar/Navbar";

const Layout = ({ children }) => {
    return (
        <div>
            <div className="sticky top-0 left-0 w-full z-100 ">
                <TopBar />
                <Navbar />
            </div>
            <main className="pt-0 md:pt-0">{children}</main>
        </div>
    );
};

export default Layout;