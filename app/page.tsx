// import Image from "next/image";
// import Head from "next/head";
// import { Button } from "@/components/ui/button";
// import BlogSection from "@/components/grid";
// import BlogSection1 from "@/components/FeaturedProperties copy";
// import Features from "@/components/Services";
// import CtaSection from "@/components/Cta";
import PropertiesListing from "@/components/listing";
import FeaturedAreas from "@/components/FeaturedAreas";
import Services from "@/components/Services";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/NavBar";
import RealEstateTypesSection from "@/components/FeaturedTypes";
import CTA from "@/components/Cta";
import FooterBlock from "@/components/Footer";
import type { Metadata } from "next";

// app/page.tsx

export const metadata: Metadata = {
  title: "TMR Real Estate Agency | Properties in Dubai",
  description:
    "Find luxury villas, apartments, and commercial spaces in Dubai with TMR Real Estate — your trusted property partner.",

  keywords: [
    "Real Estate Dubai",
    "Dubai Properties",
    "Villas for Sale Dubai",
    "Apartments in Dubai",
    "TMR Real Estate Agency",
    "Luxury Properties Dubai",
  ],

  authors: [
    { name: "TMR Real Estate Agency", url: "https://tmrrealestate.org" },
  ],
  creator: "TMR Real Estate",
  publisher: "TMR Real Estate Agency",

  metadataBase: new URL("https://tmrrealestate.org"),

  openGraph: {
    title: "TMR Real Estate Agency | Properties in Dubai",
    description:
      "Discover luxury villas, apartments, and commercial spaces in Dubai with TMR Real Estate.",
    url: "https://tmrrealestate.org",
    siteName: "TMR Real Estate Agency",
    images: [
      {
        url: "/tmr_logo.png",
        width: 800,
        height: 600,
        alt: "TMR Real Estate Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "TMR Real Estate Agency | Properties in Dubai",
    description:
      "Find luxury villas, apartments, and commercial spaces in Dubai with TMR Real Estate.",
    images: ["/tmr_logo.png"],
    site: "@TMRRealEstate", // optional
    creator: "@TMRRealEstate", // optional
  },

  icons: {
    icon: "/tmr_logo.png",
    shortcut: "/tmr_logo.png",
    apple: "/tmr_logo.png",
  },
};

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Services />
      <PropertiesListing />
      {/* <FeaturedAreas /> */}
      <CTA />
      <FooterBlock />
      {/* <HeroCTA2 />  */}
    </>
  );
}
