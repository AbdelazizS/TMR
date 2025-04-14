// components/Services.tsx
import { Home, DollarSign, KeyRound, Building2 } from "lucide-react";

const services = [
  {
    title: "Buy a Property",
    description: "Explore the latest listings and find your dream home.",
    icon: Home,
  },
  {
    title: "Sell Your Home",
    description: "Get the best value with our expert valuation and marketing.",
    icon: DollarSign,
  },
  {
    title: "Rent a Property",
    description: "Find the perfect rental that fits your lifestyle and budget.",
    icon: KeyRound,
  },
  {
    title: "Property Management",
    description: "Let us handle the hassle while you earn passive income.",
    icon: Building2,
  },
];

const Services = () => (
  <section aria-labelledby="services-section" className="py-16 md:py-20 lg:py-24 bg-primary/5">
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-12">
        
        <h2
          id="services-heading"
          className="text-3xl md:text-4xl font-bold text-foreground mb-2"
        >
          Experience Exceptional <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary/70 to-primary" >
            
            Service
            </span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          At TRM, we’re dedicated to transforming the real estate experience.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map(({ title, description, icon: Icon }) => (
          <div className="p-6 rounded-3xl border bg-card  relative overflow-hidden">
            <div className="rounded-xl bg-muted  p-3 w-max relative">
            <Icon className="w-6 h-6 text-primary font-bold" />
            </div>
            <div className="mt-6 space-y-2 relative">
              <h3 className="text-lg md:text-xl font-semibold text-foreground">
              {title}
              </h3>
              <p className="text-muted-foreground">{description}</p>
            </div>
            <span className="absolute w-30 aspect-square -bottom-20 -right-20 bg-primary/20 rounded-full"></span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
