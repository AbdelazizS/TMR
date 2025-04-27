import ContentSection from "@/components/about";
// import ContentSection1 from "./page copy 2";
import Navbar5 from "@/components/NavBar";
import { Verified } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import CTASection from "@/components/Cta";
import AboutFeatures from "@/components/Features";
import Footer from "@/components/Footer";
import AboutFaqs from "@/components/Faq";
import Testimonials from "@/components/feedbacks";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'About Us | TMR Real Estate Dubai',
  description:
    'Learn more about TMR Real Estate, a trusted agency in Dubai offering expert real estate services. Discover our mission, values, and how we help clients succeed in the property market.',
  keywords: [
    'TMR Real Estate',
    'About TMR Real Estate',
    'real estate agency Dubai',
    'Dubai property experts',
    'real estate company UAE',
    'property consultants Dubai'
  ],
  openGraph: {
    title: 'About TMR Real Estate Dubai',
    description:
      'Discover TMR Real Estate’s story, mission, and team. We are a Dubai-based real estate agency committed to guiding clients through successful property journeys.',
    url: 'https://tmrrealestate.org/about_us',
    siteName: 'TMR Real Estate',
    images: [
      {
        url: '/tmr.png',
        width: 1200,
        height: 630,
        alt: 'TMR Real Estate Logo'
      }
    ],
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About TMR Real Estate Dubai',
    description:
      'Meet the team behind TMR Real Estate — your trusted property advisors in Dubai. Learn what drives us and how we serve clients.',
    images: ['/tmr.png']
  }
};



const AboutPage = () => {
  return (
    <>
      {/* Hero Section with Gradient Overlay */}
      <Navbar5 />
      <ContentSection />
      <CTASection />
      <AboutFeatures />
      <Testimonials />
      {/* <!-- Features --> */}
      <AboutFaqs />
      <Footer />


      
    </>
  );
};


export default AboutPage;
