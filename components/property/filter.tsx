"use client";

import { Search, X, Filter } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { useSearchParams, useRouter } from "next/navigation";
import { Skeleton } from "../ui/skeleton";

export default function PropertyFilters() {
  const [isMounted, setIsMounted] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [city, setCity] = useState<string | undefined>(undefined);
  // Use undefined as the initial state instead of null or empty string
  const [propertyType, setPropertyType] = useState<string | undefined>(
    undefined
  );
  const [bedrooms, setBedrooms] = useState<number | undefined>(undefined);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 10000000]);
  const router = useRouter();
  const searchParams = useSearchParams();

  // Data options
  const cities = [
    { value: "dubai", label: "Dubai" },
    { value: "abu-dhabi", label: "Abu Dhabi" },
    { value: "sharjah", label: "Sharjah" },
  ];

  const propertyTypes = [
    { value: "apartment", label: "Apartment" },
    { value: "villa", label: "Villa" },
    { value: "townhouse", label: "Townhouse" },
    { value: "penthouse", label: "Penthouse" },
  ];

  const bedroomOptions = Array.from({ length: 10 }, (_, i) => i + 1);

  // Initialize state from URL params
  useEffect(() => {
    setIsMounted(true);
    if (searchParams) {
      setSearchTerm(searchParams.get("search") || "");
      setCity(searchParams.get("city") || undefined);
      setPropertyType(searchParams.get("type") || undefined);
      setBedrooms(
        searchParams.get("bedrooms")
          ? parseInt(searchParams.get("bedrooms")!)
          : undefined
      );
      setPriceRange([
        searchParams.get("minPrice")
          ? parseInt(searchParams.get("minPrice")!)
          : 0,
        searchParams.get("maxPrice")
          ? parseInt(searchParams.get("maxPrice")!)
          : 10000000,
      ]);
    }
  }, [searchParams]);

  // Update URL when filters change
  const applyFilters = () => {
    const params = new URLSearchParams();
    if (searchTerm) params.set("search", searchTerm);
    if (city) params.set("city", city);
    if (propertyType) params.set("type", propertyType);
    if (bedrooms) params.set("bedrooms", bedrooms.toString());
    params.set("minPrice", priceRange[0].toString());
    params.set("maxPrice", priceRange[1].toString());

    // Log filtered values to console
    console.log("Applied Filters:", {
      searchTerm,
      city,
      propertyType,
      bedrooms,
      priceRange: {
        min: priceRange[0],
        max: priceRange[1],
      },
    });

    router.push(`?${params.toString()}`, { scroll: false });
  };

  const hasFilters = Boolean(
    searchTerm ||
      city ||
      propertyType ||
      bedrooms !== undefined ||
      priceRange[0] !== 0 ||
      priceRange[1] !== 10000000
  );

  const handleReset = () => {
    setSearchTerm("");
    setCity(undefined);
    // Set to undefined to clear the selection
    setPropertyType(undefined);
    setBedrooms(undefined);
    setPriceRange([0, 10000000]);

    // Log reset action
    console.log("Filters Reset - Showing all properties");

    // Immediately update URL
    router.push("?", { scroll: false });
  };

  if (!isMounted) {
    return (
      <div className="w-full">
        <Skeleton className="h-36 w-full rounded-xl my-4" />
      </div>
    );
  }

  return (
    <div className="border-y space-y-4 py-4">
      <div className="grid max-w-7xl mx-auto px-4 items-center gap-y-4">
        <div className="w-full">
          <div className="grid grid-cols-2 md:grid-cols-4   lg:grid-cols-5 items-center gap-4">
            {/* Search Bar */}
            <div className="relative w-full col-span-full md:col-span-3 lg:col-span-2">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Enter an address, town, street, zip or property ID"
                className="ps-10 w-full"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* City Select */}
            <div>
              <Select value={city ?? ""} onValueChange={setCity}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="All Cities" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Cities</SelectItem>
                  {cities.map(({ value, label }) => (
                    <SelectItem key={value} value={value}>
                      {label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Property Type */}
            <div>
              <Select
                // Use undefined or empty string to show placeholder
                value={propertyType ?? ""}
                onValueChange={setPropertyType}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select property type" />
                </SelectTrigger>
                <SelectContent>
                  {/* 
              Use a special reserved value like "all" instead of empty string.
              This is the key fix for the error.
            */}
                  <SelectItem value="all">All Property Types</SelectItem>
                  {propertyTypes.map((type) => (
                    <SelectItem key={type.value} value={type.value}>
                      {type.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Bedrooms */}
            <div>
              <Select
                value={bedrooms?.toString() ?? ""}
                onValueChange={(value) =>
                  setBedrooms(value ? parseInt(value) : undefined)
                }
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Bedrooms" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="any">Any</SelectItem>
                  {bedroomOptions.map((num) => (
                    <SelectItem key={num} value={num.toString()}>
                      {num === 10 ? "10+" : num.toString()}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
        {/* Action Buttons */}
        <div className="flex justify-end gap-3">
          <Button
            variant="outline"
            size="sm"
            disabled={!hasFilters}
            onClick={handleReset}
            className="cursor-pointer"
          >
            <X className="w-4 h-4 mr-1" />
            Reset All
          </Button>
          <Button
            size="sm"
            disabled={!hasFilters}
            onClick={applyFilters}
            className="cursor-pointer"
          >
            <Filter className="w-4 h-4 mr-1" />
            Apply Filters
          </Button>
        </div>
      </div>
    </div>
  );
}
