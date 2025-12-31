// Import images
import HONE from "../assets/images/serivePgsImg/Hero/HONE.png";
import HTOO from "../assets/images/serivePgsImg/Hero/HTOO.png";
import HTHREE from "../assets/images/serivePgsImg/Hero/HTHREE.png";
import HFOOR from "../assets/images/serivePgsImg/Hero/HFOOR.png";
import HFIVE from "../assets/images/serivePgsImg/Hero/HFIVE.png";
import HSIX from "../assets/images/serivePgsImg/Hero/HSIX.png";
import HSEVEN from "../assets/images/serivePgsImg/Hero/HSEVEN.png";
import HeroBackgroundImg from "../assets/images/serivePgsImg/Hero/HeroBackgroundImg.png";
import addbusiness from "../assets/images/serivePgsImg/Get/addbusiness.png";
import affordableCleanEnergy from "../assets/images/serivePgsImg/Get/affordableCleanEnergy.png";
import arttrack from "../assets/images/serivePgsImg/Get/arttrack.png";
import housecompliance from "../assets/images/serivePgsImg/Get/housecompliance.png";
import parkoutline from "../assets/images/serivePgsImg/Get/parkoutline.png";
import userexpert from "../assets/images/serivePgsImg/Get/userexpert.png";
import tickCircle from "../assets/images/WhyOutsourceAccounting/tickcircle.svg";
import whyOutSourceUperImg from "../assets/images/serivePgsImg/WhyChooseUs/WhyChooseUs.png";
import vatreturns from "../assets/images/serivePgsImg/WhyChooseUs/vatreturns.svg";
import companyformation from "../assets/images/serivePgsImg/WhyChooseUs/companyformation.svg";
import corporatetax from "../assets/images/serivePgsImg/WhyChooseUs/corporatetax.svg";
import selfassesment from "../assets/images/serivePgsImg/WhyChooseUs/selfassesment.svg";
import bookkeeping from "../assets/images/serivePgsImg/WhyChooseUs/bookkeeping.svg";
import payroll from "../assets/images/serivePgsImg/WhyChooseUs/payroll.svg";
import { Heading } from "lucide-react";

export const heroData = {
  // ========== SERVICE 1: Annual Accounts ==========
  "Annual-Accounts": {
    title: "Preparing ",
    titleHighlight: "Annual Accounts",
    subtitle: "for Year-End",
    description: [
      "Preparing annual accounts can be time-consuming and complicated, but it doesn’t have to be. At online accountant, we provide annual accounts services designed to make the process seamless and stress-free. Our expert team ensures your year-end accounts are accurate, compliant, and submitted on time, helping you avoid penalties and maintain peace of mind.",
      "Whether you're a small business or a growing enterprise, we offer annual accounts service tailored to meet your unique needs. Let us handle your Ltd company accounts, so you can focus on running your business with confidence",
    ],
    buttonText: "Get Started Now",
    image: HONE.src,
    bgImage: HeroBackgroundImg.src,
    whatYouGet: {
      heading: "What You Will Get",
      whatYouGetcards: [
        {
          key: 1,
          img: parkoutline.src,
          title: "Comprehensive Online Accounting Services for UK Businesses",
          description:
            "Outsource Accounting offers a suite of core financial and accounting services designed to support businesses of all sizes. These include monthly bookkeeping, accounts preparation, corporation tax filing, self-assessment tax returns, payroll management, and VAT return submissions.",
        },
        {
          key: 2,
          img: affordableCleanEnergy.src,
          title: "Affordable Pricing with Transparent, Flat-Rate Fees",
          description:
            "One of the standout benefits highlighted on the website is clear and affordable pricing. Outsource Accounting emphasises flat-rate pricing with no hidden charges — meaning you know what you'll pay from the start, whether you're a small start-up or an established company.",
        },
        {
          key: 3,
          img: userexpert.src,
          title: "Expert Support from Professional UK Accountants",
          description:
            "Instead of automated bots or generic financial software, the services are delivered by a real team of expert accountants who provide personalised one-on-one support. This means you get direct access to professionals who can explain complex financial requirements.",
        },
        {
          key: 4,
          img: addbusiness.src,
          title: "Insightful Financial Reporting Tailored to Your Business",
          description:
            "Outsource Accounting doesn't just manage numbers — they provide insightful financial reporting that goes beyond basic bookkeeping. These reports are designed to give you a clearer picture of your company's financial health, helping you understand profitability, cash flow trends, and tax obligations.",
        },
        {
          key: 5,
          img: arttrack.src,
          title: "Supportive Mission and Proven Track Record",
          description:
            "According to the website's 'About Us' section, the company started with a simple mission: to make professional accounting affordable and accessible to all UK businesses. With over two decades of experience and more than 1,000 clients served, Outsource Accounting positions itself as a reliable and trustworthy partner committed to helping businesses.",
        },
        {
          key: 6,
          img: housecompliance.src,
          title: "Tax Filing, HMRC and Companies House Compliance",
          description:
            "A core part of the service is handling all regulatory filings required in the UK. This includes Corporation Tax returns, VAT return submissions, annual accounts filings with Companies House, and Self-Assessment tax returns for business owners. Outsource Accounting liaises with HM Revenue & Customs (HMRC) and Companies House on your behalf.",
        },
      ],
    },
    whyChooseUs: {
      heading: "Why Choose Us for Your UK Annual Accounts?",
      img: whyOutSourceUperImg.src,
      whyChooseUscards: [
        {
          key: 1,
          img: tickCircle.src,
          title: "Compliance You Can Trust",
          description:
            "We handle everything from preparing your financial statements to submitting them to HMRC and Companies House. Our experts stay up to date with the latest regulations, ensuring your statutory accounts and end of the year accounting are fully compliant and filed correctly.",
        },
        {
          key: 2,
          img: tickCircle.src,
          title: "No Hidden Costs:",
          description:
            "We believe in transparency. Our annual accounts services operate on a fixed pricing model—what we quote is what you pay, with no hidden fees.",
        },
        {
          key: 3,
          img: tickCircle.src,
          title: "Expert Advice, Anytime:",
          description:
            "Your company annual accounts service isn’t just a legal requirement—it’s an opportunity to gain insights into your financial health. We go beyond compliance, offering actionable advice to help you reduce tax liabilities and identify growth opportunities.",
        },
      ],
    },
  },
  // ========== SERVICE 2: Self Assessment Tax ==========
  "Self-Assessment-Tax": {
    title: "File ",
    titleHighlight: "Self Assessment Tax",
    subtitle: "Return Online",
    description: [
      "Filing your Self Assessment tax return in the UK doesn’t have to be stressful. With us, we simplify the process of submitting your tax return online, ensuring accuracy, timeliness, and compliance with HMRC regulations. Whether you are self-employed, a freelancer, or an individual with additional income sources, our expert team is here to guide you through every step.",
      "The online submission of self-assessment tax returns offers a secure, efficient way to meet your tax obligations, saving you from the complexities of manual filing. filing a self-assessment tax return online minimises the chance of errors and allows quicker processing. With us, you can leverage our user-friendly online tools and expert guidance to ensure a seamless process from start to finish.",
    ],
    buttonText: "Get Started Now",
    image: HTOO.src,
    bgImage: HeroBackgroundImg.src,
    whatYouGet: {
      heading: "What You Will Get",
      whatYouGetcards: [
        {
          key: 1,
          img: parkoutline.src,
          title: "Comprehensive Online Accounting Services for UK Businesses",
          description:
            "Outsource Accounting offers a suite of core financial and accounting services designed to support businesses of all sizes. These include monthly bookkeeping, accounts preparation, corporation tax filing, self-assessment tax returns, payroll management, and VAT return submissions.",
        },
        {
          key: 2,
          img: affordableCleanEnergy.src,
          title: "Affordable Pricing with Transparent, Flat-Rate Fees",
          description:
            "One of the standout benefits highlighted on the website is clear and affordable pricing. Outsource Accounting emphasises flat-rate pricing with no hidden charges — meaning you know what you'll pay from the start, whether you're a small start-up or an established company.",
        },
        {
          key: 3,
          img: userexpert.src,
          title: "Expert Support from Professional UK Accountants",
          description:
            "Instead of automated bots or generic financial software, the services are delivered by a real team of expert accountants who provide personalised one-on-one support. This means you get direct access to professionals who can explain complex financial requirements.",
        },
        {
          key: 4,
          img: addbusiness.src,
          title: "Insightful Financial Reporting Tailored to Your Business",
          description:
            "Outsource Accounting doesn't just manage numbers — they provide insightful financial reporting that goes beyond basic bookkeeping. These reports are designed to give you a clearer picture of your company's financial health, helping you understand profitability, cash flow trends, and tax obligations.",
        },
        {
          key: 5,
          img: arttrack.src,
          title: "Supportive Mission and Proven Track Record",
          description:
            "According to the website's 'About Us' section, the company started with a simple mission: to make professional accounting affordable and accessible to all UK businesses. With over two decades of experience and more than 1,000 clients served, Outsource Accounting positions itself as a reliable and trustworthy partner committed to helping businesses.",
        },
        {
          key: 6,
          img: housecompliance.src,
          title: "Tax Filing, HMRC and Companies House Compliance",
          description:
            "A core part of the service is handling all regulatory filings required in the UK. This includes Corporation Tax returns, VAT return submissions, annual accounts filings with Companies House, and Self-Assessment tax returns for business owners. Outsource Accounting liaises with HM Revenue & Customs (HMRC) and Companies House on your behalf.",
        },
      ],
    },
    whyChooseUs: {
      heading: "Why Choose Affotax for Your Self Assessment?",
      img: selfassesment.src,
      whyChooseUscards: [
        {
          key: 1,
          img: tickCircle.src,
          title: "Ease of Use",
          description:
            "Our simple, user-friendly online service guides you through every step of the Self Assessment process. No confusing jargon—just clear, concise instructions",
        },
        {
          key: 2,
          img: tickCircle.src,
          title: "Expert Support",
          description:
            "If you have any questions, our team of tax professionals is available to provide guidance and help resolve any issues.",
        },
        {
          key: 3,
          img: tickCircle.src,
          title: "Accuracy and Compliance",
          description:
            "We meticulously check your return to ensure it meets all of HMRC's requirements. With us, you can be confident that your tax return is error-free and fully compliant.",
        },
        {
          key: 4,
          img: tickCircle.src,
          title: "Timeliness",
          description:
            "We ensure your Self Assessment is filed on time, every time—avoiding penalties and ensuring you meet your tax obligations with ease.",
        },
      ],
    },
  },
  // ========== SERVICE 3: Bookkeeping-Services ==========
  "Bookkeeping-Services": {
    title: "Reliable ",
    titleHighlight: "Bookkeeping",
    subtitle: "Services",
    description: [
      "Managing your finances shouldn’t be stressful. At outsource, we specialize in offering bookkeeping UK services that simplify financial management for businesses of all sizes. Our expert team ensures your records are organized, compliant, and always up-to-date, allowing you to focus on the growth of your business while we handle the numbers.",
      "Whether you need expert help with online bookkeeping, are searching for bookkeepers near me, or need assistance with double entry bookkeeping, Outsource delivers customized solutions that fit your unique needs. Our aim is to provide businesses across the UK with accessible, efficient, and error-free financial management services.",
    ],
    buttonText: "Get Started Now",
    image: HTHREE.src,
    bgImage: HeroBackgroundImg.src,
    whatYouGet: {
      heading: "What You Will Get",
      whatYouGetcards: [
        {
          key: 1,
          img: parkoutline.src,
          title: "Comprehensive Online Accounting Services for UK Businesses",
          description:
            "Outsource Accounting offers a suite of core financial and accounting services designed to support businesses of all sizes. These include monthly bookkeeping, accounts preparation, corporation tax filing, self-assessment tax returns, payroll management, and VAT return submissions.",
        },
        {
          key: 2,
          img: affordableCleanEnergy.src,
          title: "Affordable Pricing with Transparent, Flat-Rate Fees",
          description:
            "One of the standout benefits highlighted on the website is clear and affordable pricing. Outsource Accounting emphasises flat-rate pricing with no hidden charges — meaning you know what you'll pay from the start, whether you're a small start-up or an established company.",
        },
        {
          key: 3,
          img: userexpert.src,
          title: "Expert Support from Professional UK Accountants",
          description:
            "Instead of automated bots or generic financial software, the services are delivered by a real team of expert accountants who provide personalised one-on-one support. This means you get direct access to professionals who can explain complex financial requirements.",
        },
        {
          key: 4,
          img: addbusiness.src,
          title: "Insightful Financial Reporting Tailored to Your Business",
          description:
            "Outsource Accounting doesn't just manage numbers — they provide insightful financial reporting that goes beyond basic bookkeeping. These reports are designed to give you a clearer picture of your company's financial health, helping you understand profitability, cash flow trends, and tax obligations.",
        },
        {
          key: 5,
          img: arttrack.src,
          title: "Supportive Mission and Proven Track Record",
          description:
            "According to the website's 'About Us' section, the company started with a simple mission: to make professional accounting affordable and accessible to all UK businesses. With over two decades of experience and more than 1,000 clients served, Outsource Accounting positions itself as a reliable and trustworthy partner committed to helping businesses.",
        },
        {
          key: 6,
          img: housecompliance.src,
          title: "Tax Filing, HMRC and Companies House Compliance",
          description:
            "A core part of the service is handling all regulatory filings required in the UK. This includes Corporation Tax returns, VAT return submissions, annual accounts filings with Companies House, and Self-Assessment tax returns for business owners. Outsource Accounting liaises with HM Revenue & Customs (HMRC) and Companies House on your behalf.",
        },
      ],
    },
    whyChooseUs: {
      heading: "Why Digital Bookkeeping?",
      img: bookkeeping.src,
      whyChooseUscards: [
        {
          key: 1,
          img: tickCircle.src,
          title: "Access Your Financial Data Anywhere, Anytime:",
          description:
            "Our cloud-based solutions give you real-time access to your financial data, no matter where you are or what device you use.",
        },
        {
          key: 2,
          img: tickCircle.src,
          title: "Go Paperless:",
          description:
            "Say goodbye to manual paperwork. All of your financial records are stored digitally in secure, user-friendly apps, making it easier to organize and access them when needed",
        },
        {
          key: 3,
          img: tickCircle.src,
          title: "Automate Routine Tasks:",
          description:
            "With automated processes like invoicing, bank reconciliation, and financial reporting, our system reduces the potential for human error, saving you time and increasing efficiency.",
        },
      ],
    },
  },
  // ========== SERVICE 4: Payroll Services ==========
  "Payroll-services": {
    title: "Efficient",
    titleHighlight: "Payroll Services",
    subtitle: "Tax Return Services",
    description: [
      "Small businesses spend roughly six hours per month sorting their own payroll, this is time you can’t afford to waste.",
      "Payroll outsourcing is the way forward.  Let the team of expert accountants at Online Accountant manage the process for you with our online payroll services. Payroll outsourcing eliminates costly mistakes as the whole process will be managed by a qualified accountant.",
    ],
    buttonText: "Get Started Now",
    image: HFOOR.src,
    bgImage: HeroBackgroundImg.src,
    whatYouGet: {
      heading: "What You Will Get",
      whatYouGetcards: [
        {
          key: 1,
          img: parkoutline.src,
          title: "Comprehensive Online Accounting Services for UK Businesses",
          description:
            "Outsource Accounting offers a suite of core financial and accounting services designed to support businesses of all sizes. These include monthly bookkeeping, accounts preparation, corporation tax filing, self-assessment tax returns, payroll management, and VAT return submissions.",
        },
        {
          key: 2,
          img: affordableCleanEnergy.src,
          title: "Affordable Pricing with Transparent, Flat-Rate Fees",
          description:
            "One of the standout benefits highlighted on the website is clear and affordable pricing. Outsource Accounting emphasises flat-rate pricing with no hidden charges — meaning you know what you'll pay from the start, whether you're a small start-up or an established company.",
        },
        {
          key: 3,
          img: userexpert.src,
          title: "Expert Support from Professional UK Accountants",
          description:
            "Instead of automated bots or generic financial software, the services are delivered by a real team of expert accountants who provide personalised one-on-one support. This means you get direct access to professionals who can explain complex financial requirements.",
        },
        {
          key: 4,
          img: addbusiness.src,
          title: "Insightful Financial Reporting Tailored to Your Business",
          description:
            "Outsource Accounting doesn't just manage numbers — they provide insightful financial reporting that goes beyond basic bookkeeping. These reports are designed to give you a clearer picture of your company's financial health, helping you understand profitability, cash flow trends, and tax obligations.",
        },
        {
          key: 5,
          img: arttrack.src,
          title: "Supportive Mission and Proven Track Record",
          description:
            "According to the website's 'About Us' section, the company started with a simple mission: to make professional accounting affordable and accessible to all UK businesses. With over two decades of experience and more than 1,000 clients served, Outsource Accounting positions itself as a reliable and trustworthy partner committed to helping businesses.",
        },
        {
          key: 6,
          img: housecompliance.src,
          title: "Tax Filing, HMRC and Companies House Compliance",
          description:
            "A core part of the service is handling all regulatory filings required in the UK. This includes Corporation Tax returns, VAT return submissions, annual accounts filings with Companies House, and Self-Assessment tax returns for business owners. Outsource Accounting liaises with HM Revenue & Customs (HMRC) and Companies House on your behalf.",
        },
      ],
    },
    whyChooseUs: {
      heading: "Comprehensive Payroll",
      img: payroll.src,
      whyChooseUscards: [
        {
          key: 1,
          img: tickCircle.src,
          title: "Accurate Payroll Calculations:",
          description:
            "We ensure accurate calculations for income tax and National Insurance deductions.",
        },
        {
          key: 2,
          img: tickCircle.src,
          title: "Monthly HMRC Returns:",
          description:
            "We take care of all HMRC submissions, ensuring you stay compliant throughout the year.",
        },
        {
          key: 3,
          img: tickCircle.src,
          title: "Electronic Pay slips:",
          description:
            "Your pay slips are emailed directly to you, making it easy to access your financial records.",
        },
        {
          key: 4,
          img: tickCircle.src,
          title: "Year-End Processing:",
          description:
            "At the end of the year, we prepare and submit P60s for each director, ensuring all year-end obligations are met.",
        },
      ],
    },
  },
  // ========== SERVICE 5: vat-returns ==========
  "vat-returns": {
    title: "Expert ",
    titleHighlight: "VAT",
    subtitle: "Services",
    description: [
      "Simplify your VAT registration process with Online accountant expert-driven VAT registration service. Whether you’re registering voluntarily or out of necessity, our streamlined process ensures compliance with HMRC VAT online registration requirements, saving you time and hassle.",
      "VAT (Value Added Tax) is a tax on goods and services in the UK. Businesses must register for VAT if their annual turnover exceeds £85,000. Registering allows you to charge VAT on your sales and reclaim VAT on business purchases.",
    ],
    buttonText: "Get Started Now",
    image: HFIVE.src,
    bgImage: HeroBackgroundImg.src,
    whatYouGet: {
      heading: "What You Will Get",
      whatYouGetcards: [
        {
          key: 1,
          img: parkoutline.src,
          title: "Comprehensive Online Accounting Services for UK Businesses",
          description:
            "Outsource Accounting offers a suite of core financial and accounting services designed to support businesses of all sizes. These include monthly bookkeeping, accounts preparation, corporation tax filing, self-assessment tax returns, payroll management, and VAT return submissions.",
        },
        {
          key: 2,
          img: affordableCleanEnergy.src,
          title: "Affordable Pricing with Transparent, Flat-Rate Fees",
          description:
            "One of the standout benefits highlighted on the website is clear and affordable pricing. Outsource Accounting emphasises flat-rate pricing with no hidden charges — meaning you know what you'll pay from the start, whether you're a small start-up or an established company.",
        },
        {
          key: 3,
          img: userexpert.src,
          title: "Expert Support from Professional UK Accountants",
          description:
            "Instead of automated bots or generic financial software, the services are delivered by a real team of expert accountants who provide personalised one-on-one support. This means you get direct access to professionals who can explain complex financial requirements.",
        },
        {
          key: 4,
          img: addbusiness.src,
          title: "Insightful Financial Reporting Tailored to Your Business",
          description:
            "Outsource Accounting doesn't just manage numbers — they provide insightful financial reporting that goes beyond basic bookkeeping. These reports are designed to give you a clearer picture of your company's financial health, helping you understand profitability, cash flow trends, and tax obligations.",
        },
        {
          key: 5,
          img: arttrack.src,
          title: "Supportive Mission and Proven Track Record",
          description:
            "According to the website's 'About Us' section, the company started with a simple mission: to make professional accounting affordable and accessible to all UK businesses. With over two decades of experience and more than 1,000 clients served, Outsource Accounting positions itself as a reliable and trustworthy partner committed to helping businesses.",
        },
        {
          key: 6,
          img: housecompliance.src,
          title: "Tax Filing, HMRC and Companies House Compliance",
          description:
            "A core part of the service is handling all regulatory filings required in the UK. This includes Corporation Tax returns, VAT return submissions, annual accounts filings with Companies House, and Self-Assessment tax returns for business owners. Outsource Accounting liaises with HM Revenue & Customs (HMRC) and Companies House on your behalf.",
        },
      ],
    },
    whyChooseUs: {
      heading: "Why Choose Us for VAT Registration Online?",
      img: vatreturns.src,
      whyChooseUscards: [
        {
          key: 1,
          img: tickCircle.src,
          title: "Expert Guidance:",
          description:
            "Our VAT specialists are available to assist with queries and ensure accurate registration.",
        },
        {
          key: 2,
          img: tickCircle.src,
          title: "HMRC Compliance:",
          description:
            "All documentation and filings meet HMRC VAT online regulations, avoiding delays or penalties.",
        },
        {
          key: 3,
          img: tickCircle.src,
          title: "Fast Processing:",
          description:
            "Get your VAT registration number within 7-10 working days.",
        },
      ],
    },
  },
  // ========== SERVICE 6: Company Formation ==========
  "company-formation": {
    title: "Seamless",
    titleHighlight: "Company Formation",
    subtitle: "",
    description: [
      "Setting up a UK company as a non-resident is simple and straightforward with outsource accounting. Whether you’re an entrepreneur expanding globally or seeking access to the thriving UK market, our hassle-free process ensures you can establish your presence with ease. Our service is designed to cater specifically to non-UK residents, offering you everything you need to start your business smoothly, including fast registration and a prestigious London office address.",
      "",
    ],
    buttonText: "Get Started Now",
    image: HSIX.src,
    bgImage: HeroBackgroundImg.src,
    whatYouGet: {
      heading: "What You Will Get",
      whatYouGetcards: [
        {
          key: 1,
          img: parkoutline.src,
          title: "Comprehensive Online Accounting Services for UK Businesses",
          description:
            "Outsource Accounting offers a suite of core financial and accounting services designed to support businesses of all sizes. These include monthly bookkeeping, accounts preparation, corporation tax filing, self-assessment tax returns, payroll management, and VAT return submissions.",
        },
        {
          key: 2,
          img: affordableCleanEnergy.src,
          title: "Affordable Pricing with Transparent, Flat-Rate Fees",
          description:
            "One of the standout benefits highlighted on the website is clear and affordable pricing. Outsource Accounting emphasises flat-rate pricing with no hidden charges — meaning you know what you'll pay from the start, whether you're a small start-up or an established company.",
        },
        {
          key: 3,
          img: userexpert.src,
          title: "Expert Support from Professional UK Accountants",
          description:
            "Instead of automated bots or generic financial software, the services are delivered by a real team of expert accountants who provide personalised one-on-one support. This means you get direct access to professionals who can explain complex financial requirements.",
        },
        {
          key: 4,
          img: addbusiness.src,
          title: "Insightful Financial Reporting Tailored to Your Business",
          description:
            "Outsource Accounting doesn't just manage numbers — they provide insightful financial reporting that goes beyond basic bookkeeping. These reports are designed to give you a clearer picture of your company's financial health, helping you understand profitability, cash flow trends, and tax obligations.",
        },
        {
          key: 5,
          img: arttrack.src,
          title: "Supportive Mission and Proven Track Record",
          description:
            "According to the website's 'About Us' section, the company started with a simple mission: to make professional accounting affordable and accessible to all UK businesses. With over two decades of experience and more than 1,000 clients served, Outsource Accounting positions itself as a reliable and trustworthy partner committed to helping businesses.",
        },
        {
          key: 6,
          img: housecompliance.src,
          title: "Tax Filing, HMRC and Companies House Compliance",
          description:
            "A core part of the service is handling all regulatory filings required in the UK. This includes Corporation Tax returns, VAT return submissions, annual accounts filings with Companies House, and Self-Assessment tax returns for business owners. Outsource Accounting liaises with HM Revenue & Customs (HMRC) and Companies House on your behalf.",
        },
      ],
    },
    whyChooseUs: {
      heading: "Key Features of Our UK Company Registration Service",
      img: companyformation.src,
      whyChooseUscards: [
        {
          key: 1,
          img: tickCircle.src,
          title: "Efficient Registration Process:",
          description:
            "Hassle-Free Registration Secure Documentation Name Check Assistance",
        },
        {
          key: 2,
          img: tickCircle.src,
          title: "Business Essentials for Startups:",
          description: "Free Domain Names Marketing Credits Business Listings",
        },
        {
          key: 3,
          img: tickCircle.src,
          title: "Banking Solutions:",
          description: "Business Account Assistance Prepaid Credit Card",
        },
      ],
    },
  },
  // ========== SERVICE 7: Corporation Tax Services (CT600) ==========
  "Corporation-Tax": {
    title: "Corporation Tax ",
    titleHighlight: "Services (CT600)",
    subtitle: "",
    description: [
      "Managing corporation tax is a crucial yet complex aspect of running a UK-based business. At Affotax, we provide expert Corporation Tax Return (CT600) filing services designed to keep your company compliant with HMRC regulations while maximising tax-saving opportunities.",
      "",
    ],
    buttonText: "Get Started Now",
    image: HSEVEN.src,
    bgImage: HeroBackgroundImg.src,
    whatYouGet: {
      heading: "What You Will Get",
      whatYouGetcards: [
        {
          key: 1,
          img: parkoutline.src,
          title: "Comprehensive Online Accounting Services for UK Businesses",
          description:
            "Outsource Accounting offers a suite of core financial and accounting services designed to support businesses of all sizes. These include monthly bookkeeping, accounts preparation, corporation tax filing, self-assessment tax returns, payroll management, and VAT return submissions.",
        },
        {
          key: 2,
          img: affordableCleanEnergy.src,
          title: "Affordable Pricing with Transparent, Flat-Rate Fees",
          description:
            "One of the standout benefits highlighted on the website is clear and affordable pricing. Outsource Accounting emphasises flat-rate pricing with no hidden charges — meaning you know what you'll pay from the start, whether you're a small start-up or an established company.",
        },
        {
          key: 3,
          img: userexpert.src,
          title: "Expert Support from Professional UK Accountants",
          description:
            "Instead of automated bots or generic financial software, the services are delivered by a real team of expert accountants who provide personalised one-on-one support. This means you get direct access to professionals who can explain complex financial requirements.",
        },
        {
          key: 4,
          img: addbusiness.src,
          title: "Insightful Financial Reporting Tailored to Your Business",
          description:
            "Outsource Accounting doesn't just manage numbers — they provide insightful financial reporting that goes beyond basic bookkeeping. These reports are designed to give you a clearer picture of your company's financial health, helping you understand profitability, cash flow trends, and tax obligations.",
        },
        {
          key: 5,
          img: arttrack.src,
          title: "Supportive Mission and Proven Track Record",
          description:
            "According to the website's 'About Us' section, the company started with a simple mission: to make professional accounting affordable and accessible to all UK businesses. With over two decades of experience and more than 1,000 clients served, Outsource Accounting positions itself as a reliable and trustworthy partner committed to helping businesses.",
        },
        {
          key: 6,
          img: housecompliance.src,
          title: "Tax Filing, HMRC and Companies House Compliance",
          description:
            "A core part of the service is handling all regulatory filings required in the UK. This includes Corporation Tax returns, VAT return submissions, annual accounts filings with Companies House, and Self-Assessment tax returns for business owners. Outsource Accounting liaises with HM Revenue & Customs (HMRC) and Companies House on your behalf.",
        },
      ],
    },
    whyChooseUs: {
      heading: "What is Corporation Tax (CT600)?",
      img: corporatetax.src,
      whyChooseUscards: [
        {
          key: 1,
          img: tickCircle.src,
          title: "",
          description:
            "Corporation Tax is a mandatory tax levied on the profits of UK-registered limited companies. Every active company must file a Corporation Tax Return (CT600) with HMRC within 12 months of the financial year-end. However, tax payments are due within 9 months and 1 day after the accounting period ends.",
        },
        {
          key: 2,
          img: tickCircle.src,
          title: "",
          description:
            "Failure to meet these deadlines can lead to significant penalties and interest charges. Affotax ensures your tax returns are prepared accurately and submitted on time, preventing unnecessary financial burdens.",
        },
      ],
    },
  },
};
