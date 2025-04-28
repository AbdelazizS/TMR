import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Testimonials() {
  return (
    <>
      {/* <!-- Testimonials Section: Large Photo --> */}

      <div
        id="testimonials"
        className="overflow-hidden bg-gradient bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 my-16"
      >
        <div className="max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32 xl:max-w-7xl">
          <div className="flex flex-col items-center gap-16 md:flex-row">
            <div className="max-auto relative w-2/3 p-6 md:w-1/4">
              <div className="absolute inset-0 m-6 -rotate-6 rounded-lg bg-white/10 shadow-lg"></div>
              <img
                src="/ceo.jpg"
                className="relative rounded-lg"
                alt="User Photo"
              />
            </div>
            <div className="relative md:w-3/4">
              <div className="absolute top-0 right-0 -mt-5 font-serif text-9xl tex-fo text-foreground/20 opacity-75 sm:-mt-10">
                “
              </div>

              <blockquote>
                <p className="mb-5 text-lg leading-8 font-medium text-foreground">
                  At TMR Real Estate, we specialize in connecting buyers,
                  sellers, and investors with exceptional properties. Whether
                  you're searching for a luxury home, commercial space, or
                  investment opportunity, our expert agents provide personalized
                  service, in-depth market knowledge, and seamless transactions.
                  Discover your dream property with a team dedicated to
                  excellence. Explore listings today.
                </p>
                <footer>
                  <div className="text-lg font-semibold text-foreground/80 hover:text-foreground/70">
                    KEHINDE ARIYO AFOLALU
                  </div>
                  <p className="text-sm font-medium text-foreground/50">
                    CEO at [TMR Real Estates]
                  </p>
                </footer>
                
              </blockquote>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- END Testimonials Section: Large Photo --> */}
    </>
  );
}
