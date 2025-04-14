// import Image from "next/image";
// import Head from "next/head";
// import { Button } from "@/components/ui/button";
// import BlogSection from "@/components/grid";
// import BlogSection1 from "@/components/FeaturedProperties copy";
// import Features from "@/components/Services";
// import CtaSection from "@/components/Cta";
// import FeaturedProperties from "@/components/FeaturedProperties";
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
  title: 'TRM Real Estate Agency | Properties in Dubai',
  description: 'Find luxury villas, apartments, and commercial spaces in Dubai with TRM Real Estate — your trusted property partner.',

  keywords: [
    'Real Estate Dubai',
    'Dubai Properties',
    'Villas for Sale Dubai',
    'Apartments in Dubai',
    'TRM Real Estate Agency',
    'Luxury Properties Dubai'
  ],

  authors: [{ name: 'TRM Real Estate Agency', url: 'https://yourdomain.com' }],
  creator: 'TRM Real Estate',
  publisher: 'TRM Real Estate Agency',

  metadataBase: new URL('https://yourdomain.com'),

  openGraph: {
    title: 'TRM Real Estate Agency | Properties in Dubai',
    description: 'Discover luxury villas, apartments, and commercial spaces in Dubai with TRM Real Estate.',
    url: 'https://yourdomain.com',
    siteName: 'TRM Real Estate Agency',
    images: [
      {
        url: '/images/trm-logo.png',
        width: 800,
        height: 600,
        alt: 'TRM Real Estate Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'TRM Real Estate Agency | Properties in Dubai',
    description: 'Find luxury villas, apartments, and commercial spaces in Dubai with TRM Real Estate.',
    images: ['/images/trm-logo.png'],
    site: '@TRMRealEstate', // optional
    creator: '@TRMRealEstate', // optional
  },

  icons: {
    icon: '/images/trm-logo.png',
    shortcut: '/images/trm-logo.png',
    apple: '/images/trm-logo.png',
  },
}

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <RealEstateTypesSection />
      <Services />
      <FeaturedAreas />
      <CTA />
      <FooterBlock />
      {/* <HeroCTA2 />  */}
    </>
  );
}
