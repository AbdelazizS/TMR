import ContentSection from "@/components/about";
import ContentSection1 from "./page copy 2";
import Navbar5 from "@/components/NavBar";
import { Verified } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import CTASection from "@/components/Cta";
import AboutFeatures from "@/components/Features";
import Footer from "@/components/Footer";
import AboutFaqs from "@/components/Faq";

export const metadata: Metadata = {
  title: 'About Us | TRM Real Estate Dubai',
  description:
    'Learn more about TRM Real Estate, a trusted agency in Dubai offering expert real estate services. Discover our mission, values, and how we help clients succeed in the property market.',
  keywords: [
    'TRM Real Estate',
    'About TRM Real Estate',
    'real estate agency Dubai',
    'Dubai property experts',
    'real estate company UAE',
    'property consultants Dubai'
  ],
  openGraph: {
    title: 'About TRM Real Estate Dubai',
    description:
      'Discover TRM Real Estate’s story, mission, and team. We are a Dubai-based real estate agency committed to guiding clients through successful property journeys.',
    url: 'https://yourdomain.com/about',
    siteName: 'TRM Real Estate',
    images: [
      {
        url: '/images/trm-logo.png',
        width: 1200,
        height: 630,
        alt: 'TRM Real Estate Logo'
      }
    ],
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About TRM Real Estate Dubai',
    description:
      'Meet the team behind TRM Real Estate — your trusted property advisors in Dubai. Learn what drives us and how we serve clients.',
    images: ['/images/trm-logo.png']
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
      {/* <!-- Features --> */}
      <AboutFaqs />
      <Footer />


      
    </>
  );
};


export default AboutPage;
