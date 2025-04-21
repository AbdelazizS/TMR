"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import {
  ArrowDownRightFromSquare,
  ArrowUpRightFromSquare,
  PhoneCall,
  Star,
  Verified,
} from "lucide-react";

const CTASection = () => {
  return (
    <section
      aria-labelledby="call-to-action"
      className="relative py-16 md:py-20 lg:py-28  flex items-center overflow-hidden"
    >
      {/* <!-- Background Pattern --> */}
      <div className="absolute inset-0">
        <div className="relative h-full w-full bg-primary/15 [&>div]:absolute [&>div]:inset-0 [&>div]:bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] [&>div]:bg-[size:14px_24px] [&>div]:[mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-35">
          <div />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-2xl mx-auto text-center">
          {/* Section Heading */}
          <h2
            id="call-to-action-heading"
            className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
          >
            Ready to Find Your Dream Property?
          </h2>

          {/* Value Proposition */}
          <p className="mt-4 md:my-5 text-lg leading-8 text-muted-foreground">
            Join{" "}
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary/70 to-primary">
              100+
            </span>{" "}
            satisfied clients who found their perfect space through our
            expert-guided process
          </p>

          {/* Trust Badges */}
          <div className="mt-5 md:mt-8 flex flex-wrap justify-center gap-6">
            <div className="flex items-center gap-x-2 bg-card/70 px-4 py-2 rounded-full">
              <Verified className="text-green-400 size-5" />
              <span className="text-sm font-semibold text-foreground">
                Certified Company By Dubai Gov.
              </span>
            </div>
            {/* <div className="flex items-center gap-x-2 bg-card/70 px-4 py-2 rounded-full">
              <Star className="text-yellow-400 fill-yellow-400 size-4" />
              <span className="text-sm font-semibold text-foreground">
                5/5 Client Rating
              </span>
            </div> */}
          </div>

          {/* Action Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+971564418632"
              className="block text-xl font-semibold text-primary"
              aria-label="Call our main office number"
            >
              <Button className="py-6 cursor-pointer">
                Get Free Consultation
                <PhoneCall />
              </Button>
            </a>
            <Link
              href="/properties"
              aria-label="Browse current property listings"
            >
              <Button className="py-6 cursor-pointer" variant={"outline"}>
                View Available Properties
                <ArrowUpRightFromSquare />
              </Button>
            </Link>
          </div>

          {/* Assurance Text */}
          <p className="mt-8 text-xs leading-5 text-muted-foreground">
            100% Confidentiality Assured · No Obligation Quotes · Direct
            Developer Prices
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
