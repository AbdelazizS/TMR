// components/property/PropertyCard.tsx
"use client";
import { Property } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import {
  Heart,
  MapPin,
  Bed,
  Bath,
  Ruler,
  Star,
  MoveRight,
  BedSingle,
  ArrowUpRightFromSquare,
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface PropertyCardProps {
  property: Property;
  //   status?: 'for-sale' | 'for-rent' | 'sold' | 'featured'
}

export function PropertyCard({ property }: PropertyCardProps) {
  const statusStyles = {
    for_sale: "bg-green-600/90 text-white",
    for_rent: "bg-blue-600/90 text-white",
    sold: "bg-rose-600/90 text-white",
    featured: "bg-gradient-to-r from-primary to-purple-600 text-white",
  };

  return (
    <article className="group relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 bg-background border border-muted/50 hover:border-muted">
      {/* Status Ribbon */}
      <div
        className={cn(
          "absolute top-4 left-0 px-4 py-1 text-sm font-semibold z-10 shadow-sm",
          statusStyles[property.status]
        )}
      >
        {property.status.replace("_", " ").toUpperCase()}
      </div>

      {/* Featured Badge */}
      {status === "featured" && (
        <div className="absolute top-4 right-0 bg-background/90 px-3 py-1 rounded-l-full text-sm font-medium flex items-center gap-1">
          <Star className="h-4 w-4 text-yellow-600" />
          <span className="text-foreground">Featured</span>
        </div>
      )}

      <Link href={`/properties/${property.slug}`} className="group">
        <div className="relative aspect-video overflow-hidden">
          {/* Image with Gradient Overlay */}
          {/* <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10" /> */}

          <Image
            src={`${property.images[0]}`}
            alt={property.title}
            width={500} // Adjust as needed
            height={300} // Adjust as needed
            className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
          {/* <Image
            src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${property.images[0].url}`}
            alt={property.images[0].alt}
            className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105"
            width={320} // Provide a fixed width for optimization (adjust as needed)
            height={3200} // Provide a fixed height for optimization (adjust as needed)
            loading="lazy"
          /> */}
          {/* Quick Info Overlay */}
          <div className="absolute bottom-0 left-0 right-0 z-20 p-4 flex justify-between items-end">
            <div className="space-y-1">
              <p className="text-2xl font-bold text-white">
                <div className="text-2xl font-bold text-white">
                  AED {Number(property.price).toLocaleString()}
                  {property.status === "for-rent" && (
                    <span className="text-sm font-normal">/mo</span>
                  )}
                </div>
                {property.status === "for-rent" && (
                  <span className="text-sm font-normal">/mo</span>
                )}
              </p>
              {/* <div className="flex gap-2 text-white/90">
                <span className="text-sm">{property.bedrooms} beds</span>
                <span className="text-sm">•</span>
                <span className="text-sm">{property.bathrooms} baths</span>
                <span className="text-sm">•</span>
                <span className="text-sm">{property.sqft.toLocaleString()} sqft</span>
              </div> */}
            </div>

            {/* Favorite Button */}
          </div>
        </div>
      </Link>

      <div className="p-4 space-y-3">
        {/* Property Type & Location */}
        <div className="flex justify-between items-start">
          <span className="inline-block px-2 py-1 text-sm font-medium bg-muted/80 rounded-md">
            {property.type.replace("-", " ").toUpperCase()}
          </span>
          <div className="flex items-center gap-1 text-muted-foreground text-sm">
            <MapPin className="h-4 w-4" />
            <span>{property.location}</span>
          </div>
        </div>

        {/* Title & Address */}
        <h3 className="font-semibold text-lg line-clamp-1">
          <Link
            href={`/properties/${property.slug}`}
            className="hover:underline"
          >
            {property.title}
          </Link>
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-1">
          {property.address}
        </p>

        {/* Amenities Grid */}
        <div className="grid grid-cols-3 gap-2 py-2">
          <div className="flex items-center gap-2 p-2 bg-muted/60 rounded-md">
            <BedSingle className="h-5 w-5 text-primary" />
            <span className="text-sm">{property.bedrooms}</span>
          </div>
          <div className="flex items-center gap-2 p-2 bg-muted/60 rounded-md">
            <Bath className="h-5 w-5 text-primary" />
            <span className="text-sm">{property.bathrooms}</span>
          </div>
          <div className="flex items-center gap-2 p-2 bg-muted/60 rounded-md">
            <Ruler className="h-5 w-5 text-primary" />
            <span className="text-sm">
              {Number(property.area).toLocaleString()}
            </span>
          </div>
        </div>

        {/* CTA Button */}
        <Button
          asChild
          className="group/button transition-all hover:gap-2 py-4"
        >
          <Link href={`/properties/${property.slug}`}>
            View Details
            <ArrowUpRightFromSquare className="h-4 w-4 ml-1 transition-transform group-hover/button:translate-x-0.5" />
          </Link>
        </Button>
      </div>

      {/* New Listing Badge */}
      {new Date(property.listedDate) >
        new Date(Date.now() - 7 * 24 * 60 * 60 * 1000) && (
        <div className="absolute top-4 right-4 bg-amber-500 text-white px-2 py-1 rounded-md text-xs font-medium">
          NEW
        </div>
      )}
    </article>
  );
}
