'use client'
import { Eye } from "lucide-react";
import Image from "next/image";

const AboutPage = () => {
  return (
    <section className="py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="">
            <Image
              src="/team.png"
              alt="working on housing"
              width={1300}
              height={900}
              className="w-full md:h-full object-cover rounded-lg"
            />
          </div>

          <div className="">
            <h1 className="text-foreground font-semibold text-2xl sm:text-3xl md:text-4xl mb-4">
              Who We Are
            </h1>
            <p className="text-muted-foreground mb-4">
              At TRM, we don’t just sell properties—we build relationships and
              shape futures. Founded in 2022 by Amir , our agency has grown into
              a trusted leader in dubai, helping over 90 families and investors
              find their perfect place. With a blend of cutting-edge technology
              and old-fashioned dedication, we’re redefining what it means to
              serve clients in today’s dynamic real estate market.
            </p>

            <p className="text-muted-foreground mb-8">
              Whether you’re a first-time homebuyer, a seasoned investor, or a
              developer shaping skylines, our team of certified professionals
              partners with you at every step—from envisioning possibilities to
              turning keys
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              {/* Mission Card */}
              <div className="p-4 rounded-xl bg-card border shadow-xs ">
                <span className="rounded-full bg-primary/10  w-max p-3 flex">
                  {/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 text-foreground"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
                    />
                  </svg>
                </span>
                <h2 className="font-semibold text-xl text-foreground mb-3 mt-2">
                  Our mission
                </h2>
                <p>Guiding you home with expertise and genuine care.</p>
              </div>

              {/* Vision Card */}
              <div className="p-4 rounded-xl bg-card border shadow-xs ">
                <span className="rounded-full bg-primary/10  w-max p-3 flex">
                  <Eye className="" />
                </span>
                <h2 className="font-semibold text-xl text-foreground mb-3 mt-2">
                  Our vision
                </h2>
                <p>Building communities where every door opens possibilities</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
