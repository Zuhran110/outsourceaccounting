import React from "react";

import {
    MailIcon, CallIcon, WhatsAppIcon, LocationIcon
} from "../../assets/images/Footer/footerImg.js";

import {
    LinkdinIcon, TwitterIcon, PintrestIcon, InstagramIcon, FacebookIcon
} from "../../assets/images/Footer/MoreUpdates/moreUpdates.js";

const Footer = () => {
    return (
        <footer className="bg-(--color-buttonBlue) text-amber-50 rounded-base shadow-xs border border-default">
            <div className="w-full max-w-7xl mx-auto p-4 md:py-8">
                <div className="flex items-start justify-between">
                    <div className="flex flex-col gap-6 h-auto">
                        <div>
                            <span className="text-heading self-center text-2xl font-semibold whitespace-nowrap">
                                Outsource Accounting
                            </span>
                            <p className="wrap max-w-120 mt-8 font-light">We at Outsource Accounting Ltd are a reliable UK-based Accounting firm that specialises in providing affordable accounting and tax filing services online for clients within the UK. </p>
                        </div>
                        <div className="mt-auto">
                            <p className="font-light">Follow us for more updates:</p>
                            <ul className="flex gap-6 mt-3">
                                <li><img src={LinkdinIcon} alt="LinkdinIcon" className="h-6 w-6" /></li>
                                <li><img src={TwitterIcon} alt="TwitterIcon" className="h-6 w-6" /></li>
                                <li><img src={PintrestIcon} alt="PintrestIcon" className="h-6 w-6" /></li>
                                <li><img src={InstagramIcon} alt="InstagramIcon" className="h-6 w-6" /></li>
                                <li><img src={FacebookIcon} alt="FacebookIcon" className="h-6 w-6" /></li>
                            </ul>
                        </div>
                    </div>
                    <ul className="flex flex-wrap items-start mb-6 text-sm font-medium text-body sm:mb-0 gap-16">
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6">Services</a>

                            <ul className="font-light mt-8">
                                <li className="mb-2">Accounts</li>
                                <li className="mb-2">VAT Return</li>
                                <li className="mb-2">Book Keeping</li>
                                <li className="mb-2">Payroll Services</li>
                                <li className="mb-2">Corporation Tax</li>
                                <li className="mb-2">Self Assessment</li>
                                <li className="mb-2">Company Formation</li>
                            </ul>

                        </li>
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6">
                                Company
                            </a>
                            <ul className="font-light mt-8">
                                <li className="mb-2">About Us</li>
                                <li className="mb-2">News & Articles</li>
                                <li className="mb-2">FAQS</li>
                                <li className="mb-2">Blogs</li>
                                <li className="mb-2">Contact Us</li>
                            </ul>
                        </li>
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6">
                                Contact Us
                            </a>
                            <ul className="font-light mt-8">
                                <li className="mb-2 flex flex-nowrap items-center content-center"> <img className="max-h-3 max-w-3 mr-2" src={CallIcon} alt="CallIcon" /> 0208 144 6811</li>
                                <li className="mb-2 flex flex-nowrap items-center content-center"> <img src={WhatsAppIcon} alt="WhatsAppIcon" className="max-h-3 max-w-3 mr-2" /> +44 7723 143223</li>
                                <li className="mb-2 flex flex-nowrap items-center content-center"> <img src={MailIcon} alt="MailIcon" className="max-h-3 max-w-3 mr-2" /> admin@outsourceaccontings.co.uk</li>
                                <li className="mb-2 flex items-center content-center max-w-48"> <img src={LocationIcon} alt="LocationIcon" className="max-h-3 max-w-3 mr-2" />61 Bridge Street, Kington, United Kingdom, HR5 3DJ</li>

                            </ul>
                        </li>

                    </ul>
                </div>
                <hr className="my-6 border-default sm:mx-auto lg:my-8" />
                <div className="flex justify-between">
                    <span className="block text-sm text-body items-start">
                        © 2024{" "}
                        <a href="#" className="hover:underline">
                            Outsource Accounting
                        </a>
                        Outsource Accounting. All rights reserved.
                    </span>
                    <span className=" flex text-sm text-body items-end gap-3">
                        <p>Terms and Conditions</p>
                        <p>Privacy Policy</p>
                    </span>
                </div>
            </div>
        </footer>
    );
};
export default Footer;
