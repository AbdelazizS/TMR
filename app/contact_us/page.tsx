// ContactPage.tsx
import Footer from "@/components/Footer";
import Navbar5 from "@/components/NavBar";
import { Linkedin, Mail, MapPin, PhoneCall } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import { Fragment } from "react";

export const metadata: Metadata = {
  title: "Contact Us | TMR Real Estate Dubai",
  description:
    "Get in touch with TMR Real Estate for expert guidance on buying, selling, or renting properties in Dubai. We’re here to help you find your dream home or investment.",
  keywords: [
    "TMR Real Estate",
    "Dubai real estate",
    "contact TMR",
    "real estate agent Dubai",
    "property consultation",
    "buy property Dubai",
    "sell property Dubai",
    "real estate inquiry",
  ],
  openGraph: {
    title: "Contact TMR Real Estate Dubai",
    description:
      "Need help with real estate in Dubai? Contact TMR Real Estate for personalized assistance with buying, selling, or renting properties.",
    url: "https://tmrrealestate.org/contact_us",
    siteName: "TMR Real Estate",
    images: [
      {
        url: "/tmr_logo.png",
        width: 1200,
        height: 630,
        alt: "TMR Real Estate Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact TMR Real Estate Dubai",
    description:
      "Reach out to TMR Real Estate for any inquiries related to properties in Dubai. Our team is ready to assist you.",
    images: ["/tmr_logo.png"],
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
            <div className="mb-4 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/60">
                <PhoneCall className="h-6 w-6 text-white " />
              </div>
              <h2 className="text-2xl font-bold text-foreground">
                24/7 Support
              </h2>
            </div>
            <div className="space-y-2">
              <a
                href="tel:+971564418632"
                className="block text-xl font-semibold text-primary"
                aria-label="Call our main office number"
              >
                +971 156 441 8632
              </a>
            </div>

            <div className="flex items-center gap-2 mt-6">
              <div className="flex items-center justify-center p-1 rounded-lg bg-primary/5">
                <svg
                  className="w-11 h-11"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 175.216 175.552"
                >
                  <defs>
                    <linearGradient
                      id="b"
                      x1="85.915"
                      x2="86.535"
                      y1="32.567"
                      y2="137.092"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0" stop-color="#57d163" />
                      <stop offset="1" stop-color="#23b33a" />
                    </linearGradient>
                    <filter
                      id="a"
                      width="1.115"
                      height="1.114"
                      x="-.057"
                      y="-.057"
                      color-interpolation-filters="sRGB"
                    >
                      <feGaussianBlur stdDeviation="3.531" />
                    </filter>
                  </defs>
                  <path
                    fill="#b3b3b3"
                    d="m54.532 138.45 2.235 1.324c9.387 5.571 20.15 8.518 31.126 8.523h.023c33.707 0 61.139-27.426 61.153-61.135.006-16.335-6.349-31.696-17.895-43.251A60.75 60.75 0 0 0 87.94 25.983c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.312-6.179 22.558zm-40.811 23.544L24.16 123.88c-6.438-11.154-9.825-23.808-9.821-36.772.017-40.556 33.021-73.55 73.578-73.55 19.681.01 38.154 7.669 52.047 21.572s21.537 32.383 21.53 52.037c-.018 40.553-33.027 73.553-73.578 73.553h-.032c-12.313-.005-24.412-3.094-35.159-8.954zm0 0"
                    filter="url(#a)"
                  />
                  <path
                    fill="#fff"
                    d="m12.966 161.238 10.439-38.114a73.42 73.42 0 0 1-9.821-36.772c.017-40.556 33.021-73.55 73.578-73.55 19.681.01 38.154 7.669 52.047 21.572s21.537 32.383 21.53 52.037c-.018 40.553-33.027 73.553-73.578 73.553h-.032c-12.313-.005-24.412-3.094-35.159-8.954z"
                  />
                  <path
                    fill="url(#linearGradient1780)"
                    d="M87.184 25.227c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.312-6.179 22.559 23.146-6.069 2.235 1.324c9.387 5.571 20.15 8.518 31.126 8.524h.023c33.707 0 61.14-27.426 61.153-61.135a60.75 60.75 0 0 0-17.895-43.251 60.75 60.75 0 0 0-43.235-17.929z"
                  />
                  <path
                    fill="url(#b)"
                    d="M87.184 25.227c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.313-6.179 22.558 23.146-6.069 2.235 1.324c9.387 5.571 20.15 8.517 31.126 8.523h.023c33.707 0 61.14-27.426 61.153-61.135a60.75 60.75 0 0 0-17.895-43.251 60.75 60.75 0 0 0-43.235-17.928z"
                  />
                  <path
                    fill="#fff"
                    fill-rule="evenodd"
                    d="M68.772 55.603c-1.378-3.061-2.828-3.123-4.137-3.176l-3.524-.043c-1.226 0-3.218.46-4.902 2.3s-6.435 6.287-6.435 15.332 6.588 17.785 7.506 19.013 12.718 20.381 31.405 27.75c15.529 6.124 18.689 4.906 22.061 4.6s10.877-4.447 12.408-8.74 1.532-7.971 1.073-8.74-1.685-1.226-3.525-2.146-10.877-5.367-12.562-5.981-2.91-.919-4.137.921-4.746 5.979-5.819 7.206-2.144 1.381-3.984.462-7.76-2.861-14.784-9.124c-5.465-4.873-9.154-10.891-10.228-12.73s-.114-2.835.808-3.751c.825-.824 1.838-2.147 2.759-3.22s1.224-1.84 1.836-3.065.307-2.301-.153-3.22-4.032-10.011-5.666-13.647"
                  />
                </svg>
              </div>
              <a
                href="https://wa.me/971559660372"
                className="w-full ti leading-8 underline block text-lg  lg:text-xl font-semibold "
              >
                Contact Us on Whatsapp
                {/* <Button
                  variant="outline"
                  className="p-4 cursor-pointer  w-full"
                >
                  Contact Us <MessageSquare className="w-4 h-4" />
                </Button> */}
              </a>
            </div>
          </article>

          {/* Location Card */}
          <article className="rounded-2xl bg-card p-8 shadow-lg border transition-all l">
            <div className="mb-6 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/60">
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">
                Our Offices
              </h2>
            </div>
            <div className="space-y-3">
              <address className="not-italic text-muted-foreground">
                <p className="font-medium text-foreground">Main Office</p>
                <p>Bussines Village, Tower -B-</p>
                <p>floor 6 - Deira Duabi UAE</p>
              </address>
              <div className="pt-4">
                <p className="text-sm font-medium text-foreground">
                  Open Daily : 8:30 AM - 6:00 PM
                </p>
              </div>
            </div>
          </article>

          {/* Digital Card */}
          <article className="rounded-2xl bg-card p-8 shadow-lg border transition-all ">
            <div className="mb-6 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/60">
                <Mail className="h-6 w-6 text-white " />
              </div>
              <h2 className="text-2xl font-bold text-foreground">
                Digital Connect
              </h2>
            </div>
            <div className="space-y-4">
              <a
                href="mailto:info@tmrrealestate.org"
                className="block font-medium text-primary"
              >
                info@tmrrealestate.org
              </a>
              <div className="flex gap-4 pt-2">
                {/* <a
                  href="/Linkedin"
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-muted/80 hover:bg-muted transition-all"
                  aria-label="Connect via Linkedin"
                >
                  <Linkedin className="h-6 w-6 text-foreground" />
                </a> */}
              </div>
            </div>
          </article>
        </div>

        <section className="mt-6 md:mt-10 grid gap-12">
          <div className="h-[522px] border-2 overflow-hidden rounded-2xl shadow">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14433.385174008556!2d55.3448567445801!3d25.258933783246533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5cda192a2ea7%3A0x71a4bae5fbdac1ea!2z2YLYsdmK2Kkg2KfZhNij2LnZhdin2YQ!5e0!3m2!1sar!2sus!4v1745139940526!5m2!1sar!2sus"
              title="Office Location"
              aria-label="Interactive map showing our office location"
              referrerPolicy="no-referrer-when-downgrade"
              // style="border:0;"
              // allowfullscreen=""
              loading="lazy"
              loading="lazy"
              className="h-full w-full"
            ></iframe>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
