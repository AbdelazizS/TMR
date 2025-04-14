// ContactPage.tsx
import Footer from "@/components/Footer";
import Navbar5 from "@/components/NavBar";
import { Linkedin, Mail, MapPin, PhoneCall } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import { Fragment } from "react";

export const metadata: Metadata = {
  title: "Contact Us | TRM Real Estate Dubai",
  description:
    "Get in touch with TRM Real Estate for expert guidance on buying, selling, or renting properties in Dubai. We’re here to help you find your dream home or investment.",
  keywords: [
    "TRM Real Estate",
    "Dubai real estate",
    "contact TRM",
    "real estate agent Dubai",
    "property consultation",
    "buy property Dubai",
    "sell property Dubai",
    "real estate inquiry",
  ],
  openGraph: {
    title: "Contact TRM Real Estate Dubai",
    description:
      "Need help with real estate in Dubai? Contact TRM Real Estate for personalized assistance with buying, selling, or renting properties.",
    url: "https://yourdomain.com/contact_us",
    siteName: "TRM Real Estate",
    images: [
      {
        url: "/images/trm-logo.png",
        width: 1200,
        height: 630,
        alt: "TRM Real Estate Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact TRM Real Estate Dubai",
    description:
      "Reach out to TRM Real Estate for any inquiries related to properties in Dubai. Our team is ready to assist you.",
    images: ["/images/trm-logo.png"],
  },
};

export default function ContactPage() {
  return (
    <>
      <Navbar5 />
      <section
        className="relative  bg-gradient-to-b from-black via-black/90 to-black/50"
        aria-label="Contact our real estate experts"
      >
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero.jpg"
            alt="Dubai Marina skyline at dusk"
            fill
            loading="eager"
            className="object-cover mix-blend-soft-light opacity-30"
            sizes="100vw"
            priority
            quality={80}
          />
        </div>
        <div className="relative z-10 py-28 px-4 text-center lg:py-40">
          {/* Semantic heading structure with SEO keywords */}
          <h1
            className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
            itemProp="headline"
          >
            Connect with Dubai's <span className="sr-only">Real Estate</span>{" "}
            Experts
          </h1>

          {/* Accessible text with proper contrast */}
          <p
            className="mt-4 text-xl text-white" // Increased contrast
            aria-label="Company establishment date"
          >
            Premium Property Solutions Since 2022
          </p>

          {/* Hidden structured data for SEO */}
          {/* <div
            itemScope
            itemType="https://schema.org/RealEstateAgent"
            className="hidden"
          >
            <meta itemProp="name" content="Your Agency Name" />
            <meta
              itemProp="description"
              content="Dubai real estate experts providing premium property solutions"
            />
            <meta itemProp="image" content="/logo.png" />
          </div> */}
        </div>
      </section>

      <main className="relative mx-auto max-w-7xl px-4 py-16">
        {/* Floating Contact Cards */}
        <div className="grid gap-8 md:grid-cols-3 md:-translate-y-24">
          {/* Phone Card */}
          <article className="rounded-2xl bg-card p-8 shadow-lg border transition-all ">
            <div className="mb-6 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/40">
                <PhoneCall className="h-6 w-6 " />
              </div>
              <h2 className="text-2xl font-bold text-foreground">
                24/7 Support
              </h2>
            </div>
            <div className="space-y-2">
              <a
                href="tel:+9711564418632"
                className="block text-xl font-semibold text-primary"
                aria-label="Call our main office number"
              >
                +971 156 441 8632
              </a>
              <p className="text-sm text-muted-foreground">
                <a
                  href="tel:+9715596600372"
                  aria-label="Call our main office number"
                >
                  Emergency: +971 559 660 0372
                </a>
              </p>
            </div>
          </article>

          {/* Location Card */}
          <article className="rounded-2xl bg-card p-8 shadow-lg border transition-all l">
            <div className="mb-6 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/40">
                <MapPin className="h-6 w-6" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">
                Our Offices
              </h2>
            </div>
            <div className="space-y-3">
              <address className="not-italic text-muted-foreground">
                <p className="font-medium text-foreground">Main Office</p>
                <p>Bussines Village, Tower -B-</p>
                <p>office 217 - Deira Duabi UAEE</p>
              </address>
              <div className="pt-4">
                <p className="text-sm font-medium text-foreground">
                  Open Daily: 8 AM - 10 PM GST
                </p>
              </div>
            </div>
          </article>

          {/* Digital Card */}
          <article className="rounded-2xl bg-card p-8 shadow-lg border transition-all ">
            <div className="mb-6 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/40">
                <Mail className="h-6 w-6 " />
              </div>
              <h2 className="text-2xl font-bold text-foreground">
                Digital Connect
              </h2>
            </div>
            <div className="space-y-4">
              <a
                href="mailto:info@trm-realestatecom.org"
                className="block font-medium text-primary"
              >
                info@trm-realestatecom.org
              </a>
              <div className="flex gap-4 pt-2">
                <a
                  href="/Linkedin"
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-muted/80 hover:bg-muted transition-all"
                  aria-label="Connect via Linkedin"
                >
                  <Linkedin className="h-6 w-6 text-foreground" />
                </a>
              </div>
            </div>
          </article>
        </div>

        <section className="mt-6 md:mt-10 grid gap-12">
          <div className="h-[522px] border-2 overflow-hidden rounded-2xl shadow">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d28865.380014951268!2d55.343189921314305!3d25.26478193760498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sBussines%20Village%20%2C%20Tower%20-B-%20office%20217%20-%20Deira%20Duabi%20UAE!5e0!3m2!1sar!2s!4v1744659400334!5m2!1sar!2s"
              className="h-full w-full"
              // style="border:0;"
              // allowfullscreen=""
              loading="lazy"
              title="Office Location"
              aria-label="Interactive map showing our office location"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
