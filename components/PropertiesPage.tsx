"use client";

import { useEffect, useState } from "react";
import { PropertyCard } from "@/components/property/PropertyCard";
import { Property } from "@/types/property";
import { api } from "@/lib/api";
import Navbar5 from "@/components/NavBar";
import Footer from "@/components/Footer";
import PropertyFilters from "./property/filter";

interface Filters {
  status?: string;
  type?: string;
  location?: string;
  search?: string;
  featured?: string;
}

export default function PropertiesClient({ filters }: { filters: Filters }) {
  const [properties, setProperties] = useState<Property[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProperties = async () => {
      // Ensure filters is always an object before passing to the API
      const filterParams = new URLSearchParams();

      if (filters.status) filterParams.append("status", filters.status);
      if (filters.type) filterParams.append("type", filters.type);
      if (filters.location) filterParams.append("location", filters.location);
      if (filters.search) filterParams.append("search", filters.search);
      if (filters.featured) filterParams.append("featured", filters.featured);

      const parsedValue = JSON.parse(filters.value);

      // Step 2: Extract the 'type' field
      // if (filters.type) cfilterParams.append('status', filters.status);

      console.log(filterParams);

      try {
        const response = await api.get("/properties", {
          params: { status: parsedValue.status, search: parsedValue.search , type: parsedValue.type }, // Send the filters as URLSearchParams
        });
        setProperties(response.data.data);
      } catch (error) {
        console.error("Failed to load properties:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProperties();
  }, [filters]); // Ensure that we refetch data if filters change

  if (isLoading) {
    return (
      <div
        className="container mx-auto px-4 py-12"
        role="status"
        aria-busy="true"
        aria-live="polite"
      >
        <div className="space-y-6 animate-pulse">
          <div className="h-8 w-1/4 bg-muted rounded" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="h-80 bg-muted rounded-lg shadow-sm" />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <Navbar5 />
      <PropertyFilters />
      <main>
        <h1 className="max-w-7xl px-4 mx-auto text-3xl font-bold mt-8 text-foreground">
          Available Properties ({properties.length})
        </h1>

        {properties.length === 0 ? (
          <div className="text-center py-12 space-y-4">
            <p className="text-muted-foreground">No properties found.</p>
          </div>
        ) : (
          <div className="max-w-7xl px-4 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
            {properties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
