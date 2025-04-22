"use client";

import { useEffect, useState } from "react";
import { PropertyCard } from "@/components/property/PropertyCard";
import { Property } from "@/types/property";
import { api } from "@/lib/api";
import Navbar5 from "@/components/NavBar";
import Footer from "@/components/Footer";
import { MapPin, Search } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

export default function PropertiesListing() {
  const [properties, setProperties] = useState<Property[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await api.get("/properties", {
          params: { featured: true },
        });

        setProperties(response?.data?.data);
      } catch (error) {
        console.error("Failed to load properties:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProperties();
  }, []);

  if (isLoading) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="animate-pulse space-y-8">
          <div className="h-10 w-1/3 bg-muted rounded"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-96 bg-muted rounded-lg"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <section className="max-w-7xl px-4 mx-auto py-16 md:py-20 lg:py-24  ">
        {properties?.length === 0 ? (
          <div className="text-center py-16 md:py-20 lg:py-24 space-y-6">
            <div className="flex flex-col items-center justify-center space-y-2">
              <MapPin className="w-14 h-14 text-primary bg-muted p-2 font-bold rounded-full" />
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6d">
                No Featured Properties Yet
              </h2>
              <p className="text-muted-foreground max-w-md text-sm md:text-base">
                We're currently curating our best listings. In the meantime,
                explore all available properties to find your perfect match.
              </p>
            </div>

            <Link href={"/properties"}>
              <Button className=" cursor-pointer py-6">
                <Search className="w-4 h-4" />
                Browse All Properties
              </Button>
            </Link>
          </div>
        ) : (
          <>
            <div className="text-center  mb-6 md:mb-8 lg:mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Our
                <span className="mx-1 text-transparent bg-clip-text bg-gradient-to-r from-primary/70 to-primary">
                  Featured
                </span>
                Properties{" "}
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                At TRM, we’re dedicated to transforming the real estate
                experience.
              </p>
            </div>

        

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
              {properties?.slice(0, 6).map((property) => (
                <div key={property.id || property.slug} className="">
                  <PropertyCard property={property} />
                </div>
              ))}

              
            </div>
          </>
        )}
      </section>
    </>
  );
}
