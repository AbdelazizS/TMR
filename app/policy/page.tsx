// ContactPage.tsx
import Footer from "@/components/Footer";
import Navbar5 from "@/components/NavBar";
import { Linkedin, Mail, MapPin, PhoneCall } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import { Fragment } from "react";

export default function ContactPage() {
  return (
    <>
      <Navbar5 />
     

      <main className="relative">
        <div className="min-h-screen ">
          {/* Hero Section */}
          <section className="relative w-full h-[calc(60vh-4rem)] overflow-hidden flex items-center justify-center">
            <Image
              src="/hero.jpg"
              alt="Real estate policy"
              layout="fill"
              objectFit="cover"
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black via-black/60 to-black/20"></div>
            <div className="relative container mx-auto px-4 py-12 text-center text-white">
              <h1 className="text-4xl font-bold">Our Real Estate Policies</h1>
              <p className="text-lg mt-4">
                Transparent, fair, and modern real estate services for your
                peace of mind.
              </p>
            </div>
          </section>

          {/* Policy Sections */}
          <div className="max-w-7xl mx-auto px-4 py-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold">
                Our Real Estate Policies at TMR
              </h2>
              <p className="text-lg mt-4">
                We believe in transparency and fairness. Below are the key
                policies that guide our business practices.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Property Listings Policy */}
              <div className="bg-card shadow-md rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">
                  Property Listings
                </h3>
                <p className="text-foreground">
                  We ensure accurate and up-to-date property listings for all
                  our clients.
                </p>
                <ul className="list-disc pl-6 mt-4">
                  <li>Verified listings</li>
                  <li>Detailed property descriptions</li>
                  <li>Photos and videos included</li>
                </ul>
              </div>

              {/* Fair Pricing Policy */}
              <div className="bg-card shadow-md rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Fair Pricing</h3>
                <p className="text-foreground">
                  We offer competitive pricing, ensuring the best value for all
                  transactions.
                </p>
                <ul className="list-disc pl-6 mt-4">
                  <li>No hidden fees</li>
                  <li>Price transparency</li>
                  <li>Custom pricing options</li>
                </ul>
              </div>

              {/* Client Rights Policy */}
              <div className="bg-card shadow-md rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Client Rights</h3>
                <p className="text-foreground">
                  Your satisfaction and trust are our priority, with clear and
                  concise policies that protect your rights.
                </p>
                <ul className="list-disc pl-6 mt-4">
                  <li>Right to privacy</li>
                  <li>Right to clear terms</li>
                  <li>Right to timely services</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
