// Import images
import {
  HSIX,
  HTHREE,
  HTOO,
  HONE,
  HFOOR,
  HFIVE,
  HeroBackgroundImg,
} from "../assets/images/serivePgsImg/Hero/HeroServicePgImg.js";

// Example data structure for Hero section
export const heroData = {
  // ========== SERVICE 1: Company Accounts ==========
  "company-accounts": {
    title: "Preparing Annual",
    titleHighlight: "Accounts",
    subtitle: "for Year-End",
    description: [
      "Preparing annual accounts can be time-consuming and complicated, but it doesn't have to be. At online accountant, we provide annual accounts services designed to make the process seamless and stress-free.",
      "Whether you're a small business or a growing enterprise, we offer annual accounts service tailored to meet your unique needs. Let us handle your Ltd company accounts, so you can focus on running your business with confidence",
    ],
    buttonText: "Get Started Now",
    image: HONE,
    bgImage: HeroBackgroundImg,
  },

  // ========== SERVICE 2: Corporation Tax ==========
  "corporation-tax": {
    title: "Expert",
    titleHighlight: "Corporation Tax",
    subtitle: "Services for UK Businesses",
    description: [
      "Simplify your tax responsibilities with our HMRC-approved Corporation Tax services for UK limited companies. Our qualified accountants handle everything from accurate tax calculations to timely online filing.",
      "Stay compliant and maximize your tax efficiency with our professional corporation tax services designed specifically for UK businesses.",
    ],
    buttonText: "Get Started Now",
    image: HTOO,
    bgImage: HeroBackgroundImg,
  },

  // ========== SERVICE 3: Self Assessment ==========
  "self-assessment": {
    title: "Stress-Free",
    titleHighlight: "Self Assessment",
    subtitle: "Tax Return Services",
    description: [
      "Navigate the complexities of self-assessment tax returns with ease. Our experienced team ensures your tax return is accurate, compliant, and submitted on time to HMRC.",
      "Whether you're self-employed, a contractor, or have additional income, we make self-assessment simple and hassle-free.",
    ],
    buttonText: "Get Started Now",
    image: HTHREE,
    bgImage: HeroBackgroundImg,
  },
};
