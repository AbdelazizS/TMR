"use client";
import {
  FacebookIcon,
  InstagramIcon,
  Mail,
  MapPin,
  PhoneCall,
  TwitterIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-primary/10 pt-16 pb-8">
      <div className="border-b border-b-muted-foreground/25 ">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-12 gap-8  pb-12">
          {/* Branding Column */}
          <div className="md:col-span-4 lg:col-span-3">
            <Link href="/" className="block mb-6">
              <Image
                src="/images/trm-logo.png"
                alt="Elite Properties"
                width={160}
                height={40}
                // className="h-28 w-auto"
              />
            </Link>
            <div className="space-y-4">
              <p className="text-sm text-foreground leading-relaxed">
                TRM is a leading real estate agency in the UAE, dedicated to
                delivering exceptional property solutions tailored to your
                needs.
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2 lg:col-span-2">
            <h3 className="text-sm font-semibold text-foreground mb-4">
              Quick Links
            </h3>
            <nav className="space-y-3">
              <FooterLink href="/about">About Us</FooterLink>
              <FooterLink href="/careers">Careers</FooterLink>
              <FooterLink href="/contact">Contact</FooterLink>
              <FooterLink href="/faq">FAQ</FooterLink>
            </nav>
          </div>

          {/* Property Types */}
          <div className="md:col-span-3 lg:col-span-3">
            <h3 className="text-sm font-semibold text-foreground mb-4">
              Property Types
            </h3>
            <nav className="grid grid-cols-1 gap-3">
              <FooterLink href="/offices">Office Spaces</FooterLink>
              <FooterLink href="/apartments">Luxury Apartments</FooterLink>
              <FooterLink href="/commercial">Commercial Properties</FooterLink>
              <FooterLink href="/developments">New Developments</FooterLink>
            </nav>
          </div>

          {/* Contact & Social */}
          <div className="md:col-span-3 lg:col-span-4">
            <h3 className="text-sm font-semibold text-foreground mb-4">
              Connect With Us
            </h3>
            <div className="space-y-6">
              <div className="space-y-3">
                <div className="flex items-center space-x-1">
                  <MapPin className="flex-shrink-0 size-5" />
                  <span className="text-sm text-foreground/80">
                    Bussines Village , Tower -B- office 217 - Deira Duabi UAE
                  </span>
                </div>
                <div className="flex items-center space-x-1">
                  <PhoneCall className="flex-shrink-0 size-5" />
                  <a
                    href="tel:+971 4 234 5678"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    +971 4 234 5678
                  </a>
                </div>
                <div className="flex items-center space-x-1">
                  <Mail className="flex-shrink-0 size-5" />
                  <a
                    href="mailto:info@trm-realestatecom.org"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    info@trm-realestatecom.org
                  </a>
                </div>
              </div>

              {/* <div className="flex space-x-4">
                <SocialLink href="#" icon={<LinkedInIcon />} label="LinkedIn" />
                <SocialLink href="#" icon={<InstagramIcon />} label="Instagram" />
                <SocialLink href="#" icon={<TwitterIcon />} label="Twitter" />
                <SocialLink href="#" icon={<FacebookIcon />} label="Facebook" />
              </div> */}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-4 mt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
        <div className="order-2 md:order-1">
          © {new Date().getFullYear()} TRM Properties , All rights reserved.
        </div>
        <div className="order-1 md:order-2 flex space-x-6">
          <Link
            href="/privacy"
            className="hover:text-foreground transition-colors"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms"
            className="hover:text-foreground transition-colors"
          >
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
};

// Reusable Footer Link Component
const FooterLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <Link
    href={href}
    className="text-sm text-muted-foreground hover:text-foreground transition-colors block"
  >
    {children}
  </Link>
);

// Social Link Component
const SocialLink = ({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) => (
  <a
    href={href}
    className="text-muted-foreground hover:text-foreground transition-colors p-2 rounded-md bg-white/5 hover:bg-white/10"
    aria-label={label}
  >
    {icon}
  </a>
);
// Add other social icons similarly

export default Footer;
