"use client";

import { Search, X } from "lucide-react";
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
import { useSearchParams, useRouter } from "next/navigation";
import { Skeleton } from "../ui/skeleton";

export default function PropertyFilters() {
  const [isMounted, setIsMounted] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [propertyType, setPropertyType] = useState<string | undefined>(
    undefined
  );
  const [bathrooms, setBathrooms] = useState<number | undefined>(undefined);
  const [bedrooms, setBedrooms] = useState<number | undefined>(undefined);
  const router = useRouter();
  const searchParams = useSearchParams();

  const propertyTypes = [
    { value: "apartment", label: "Apartment" },
    { value: "villa", label: "Villa" },
    { value: "commercial", label: "Commercial" },
    { value: "office", label: "Office" },
    { value: "land", label: "Land" },
  ];

  const bedroomOptions = Array.from({ length: 10 }, (_, i) => i + 1);
  const bathroomsOptions = Array.from({ length: 6 }, (_, i) => i + 1);

  useEffect(() => {
    setIsMounted(true);
    if (searchParams) {
      setSearchTerm(searchParams.get("search") || "");
      setPropertyType(searchParams.get("type") || undefined);
      setBedrooms(
        searchParams.get("bedrooms")
          ? parseInt(searchParams.get("bedrooms")!)
          : undefined
      );
      setBedrooms(
        searchParams.get("bathrooms")
          ? parseInt(searchParams.get("bathrooms")!)
          : undefined
      );
    }
  }, [searchParams]);

  const applyFilters = () => {
    const params = new URLSearchParams();
    if (searchTerm) params.set("search", searchTerm);
    if (propertyType) params.set("type", propertyType);
    if (bedrooms) params.set("bedrooms", bedrooms.toString());
    if (bathrooms) params.set("bathrooms", bathrooms.toString());

    // console.log("Applied Filters:", {
    //   searchTerm,
    //   city,
    //   propertyType,
    //   bedrooms,
    // });

    router.push(`?${params.toString()}`, { scroll: false });
  };

  const hasFilters = Boolean(
    searchTerm || bathrooms || propertyType || bedrooms !== undefined
  );

  const handleReset = () => {
    setSearchTerm("");
    setPropertyType(undefined);
    setBedrooms(undefined);
    setBathrooms(undefined);

    // console.log("Filters Reset - Showing all properties");
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
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 items-center gap-4">
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

            {/* Property Type */}
            <div>
              <Select
                value={propertyType ?? ""}
                onValueChange={setPropertyType}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select property type" />
                </SelectTrigger>
                <SelectContent>
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
            {/* Bathrooms*/}
            <div>
              <Select
                value={bathrooms?.toString() ?? ""}
                onValueChange={(value) =>
                  setBathrooms(value ? parseInt(value) : undefined)
                }
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Bathrooms" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="any">Any</SelectItem>
                  {bathroomsOptions.map((num) => (
                    <SelectItem key={num} value={num.toString()}>
                      {num === 6 ? "6+" : num.toString()}
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
          >
            <X className="w-4 h-4 mr-1" />
            Reset All
          </Button>
          <Button size="sm" disabled={!hasFilters} onClick={applyFilters}>
            Apply Filters
          </Button>
        </div>
      </div>
    </div>
  );
}
