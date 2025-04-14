import { ArrowUpRightFromSquare } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

const RealEstateTypesSection = () => {
  const propertyTypes = [
    {
      title: "Office Spaces",
      description: "Modern workspaces for growing businesses",
      image: "/hero.jpg",
      link: "/properties?type=offices",
    },
    {
      title: "Luxury Apartments",
      description: "Premium urban living experiences",
      image: "/hero.jpg",
      link: "/properties",
    },
    {
      title: "Commercial Properties",
      description: "Strategic locations for your business",
      image: "/hero.jpg",
      link: "/properties",
    },
    {
      title: "Vacation Homes",
      description: "Your perfect getaway destinations",
      image: "/hero.jpg",
      link: "/properties",
    },
  ];

  return (
    <section
      aria-labelledby="property-types-heading"
      className="relative py-16 md:py-20 lg:py-24"
    >
      <div className="max-w-7xl mx-auto px-4 ">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2
            id="property-types-heading"
            className="text-3xl md:text-4xl font-bold text-foreground mb-2"
          >
            Explore Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary/60 via-primary to-primary">
              Properties
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover spaces that inspire and transform lifestyles
          </p>
        </div>

        {/* Property Cards Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {propertyTypes.map((property, index) => (
            <article
              key={index}
              className="group relative block rounded-xl overflow-hidden transition-transform duration-300 hover:scale-105 "
            >
              <div className="relative h-80">
                <Image
                  src={property.image}
                  alt={property.title}
                  fill
                  className="object-cover"
                  // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={index < 2}
                  placeholder="blur"
                  blurDataURL="/images/placeholder.jpg"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-xl font-bold mb-2">
                  <Link
                    href={property.link}
                    className="focus:outline-none focus:ring-2 focus:ring-white"
                  >
                    <span className="absolute inset-0" aria-hidden="true" />
                    {property.title}
                  </Link>
                </h3>
                <p className="text-sm opacity-90">{property.description}</p>
                <div className="mt-4 group-hover:opacity-100 transition-opacity duration-300">
                  <Link
                    href="/properties"
                    aria-label={`Explore ${property.title}`}
                  >
                    <Button>
                      View Listings <ArrowUpRightFromSquare />
                    </Button>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RealEstateTypesSection;
