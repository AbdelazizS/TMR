"use client";
import { Property } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Heart, MapPin, BedSingle, Bath, Ruler, Star, ArrowUpRightFromSquare, Share2, Eye } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";

interface PropertyCardProps {
  property: Property;
  variant?: 'default' | 'featured';
}

export function PropertyCard({ property, variant = 'default' }: PropertyCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const statusStyles = {
    for_sale: "bg-green-600/90 text-white",
    for_rent: "bg-blue-600/90 text-white",
    sold: "bg-rose-600/90 text-white",
    featured: "bg-gradient-to-r from-primary to-purple-600 text-white",
  };

  const ribbonPosition = variant === 'featured' ? "left-4" : "left-0";

  return (
    <article className={cn(
      "group relative rounded-md overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 bg-background border border-muted/50 hover:border-primary/30",
      variant === 'featured' && "border-2 border-primary/20 hover:border-primary/40"
    )}>
      {/* Status Ribbon */}
      <div
        className={cn(
          "absolute top-4 z-10 px-4 py-1 text-sm font-semibold shadow-sm",
          statusStyles[property.status],
          ribbonPosition
        )}
      >
        {property.status.replace("_", " ").toUpperCase()}
      </div>

      {/* Featured Badge */}
      {variant === 'featured' && (
        <div className="absolute top-4 right-4 bg-gradient-to-r from-primary to-purple-600 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1 z-10 shadow-md">
          <Star className="h-4 w-4 text-yellow-300 fill-yellow-300" />
          <span className="text-white">Featured</span>
        </div>
      )}

      {/* New Listing Badge */}
      {new Date(property.listedDate) > new Date(Date.now() - 7 * 24 * 60 * 60 * 1000) && (
        <div className="absolute top-16 left-4 bg-amber-500 text-white px-2 py-1 rounded-md text-xs font-medium z-10 shadow-sm">
          NEW LISTING
        </div>
      )}

      {/* Image Container */}
      <Link href={`/properties/${property.slug}`} className="group">
        <div className="relative aspect-[4/3] overflow-hidden">
          {/* Loading Skeleton */}
          {!imageLoaded && (
            <div className="absolute inset-0 bg-gradient-to-br from-muted/30 to-muted/50 animate-pulse" />
          )}

          {/* Main Image */}
          <Image
            src={property.images[0]}
            alt={property.title}
            fill
            className={cn(
              "object-cover transition-all duration-500 group-hover:scale-105",
              imageLoaded ? "opacity-100" : "opacity-0"
            )}
            onLoad={() => setImageLoaded(true)}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />

          {/* Quick Info Overlay */}
          <div className="absolute bottom-0 left-0 right-0 z-20 p-4">
            <div className="flex justify-between items-end">
              <div>
                <p className="text-2xl font-bold text-white drop-shadow-md">
                  AED {Number(property.price).toLocaleString()}
                  {property.status === "for_rent" && (
                    <span className="text-sm font-normal">/mo</span>
                  )}
                </p>
                <div className="flex gap-3 text-white/90 text-sm mt-1">
                  <span>•</span>
                  <span>{property.bedrooms} beds</span>
                  <span>•</span>
                  <span>{property.bathrooms} baths</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>

      {/* Card Content */}
      <div className="p-5 space-y-3">
        {/* Property Type & Location */}
        <div className="flex justify-between items-start">
          <span className="inline-block px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded-md">
            {property.type.replace("-", " ").toUpperCase()}
          </span>
          <div className="flex items-center gap-1 text-muted-foreground text-sm">
            <MapPin className="h-4 w-4 text-primary" />
            <span className="line-clamp-1">{property.location}</span>
          </div>
        </div>

        {/* Title & Address */}
        <div>
          <h3 className="font-semibold text-lg line-clamp-1">
            <Link href={`/properties/${property.slug}`} className="hover:underline">
              {property.title}
            </Link>
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2 mt-1">
            {property.address}
          </p>
        </div>

        {/* Amenities Grid */}
        <div className="grid grid-cols-3 gap-2 py-2">
          <div className="flex flex-col items-center p-2 bg-muted/30 rounded-lg">
            <BedSingle className="h-5 w-5 text-primary" />
            <span className="text-xs mt-1">{property.bedrooms} Beds</span>
          </div>
          <div className="flex flex-col items-center p-2 bg-muted/30 rounded-lg">
            <Bath className="h-5 w-5 text-primary" />
            <span className="text-xs mt-1">{property.bathrooms} Baths</span>
          </div>
          <div className="flex flex-col items-center p-2 bg-muted/30 rounded-lg">
            <Ruler className="h-5 w-5 text-primary" />
            <span className="text-xs mt-1">
              {Number(property.area).toLocaleString()} sqft
            </span>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-muted/40" />

        {/* Footer with CTA */}
        <div className="flex justify-between items-center pt-2">
          <Button
            asChild
            // variant={variant === 'featured' ? 'default' : 'outline'}
            // size="sm"
            className="group/button transition-all hover:gap-1 !px-8"
          >
            <Link href={`/properties/${property.slug}`}>
            View Details
              <ArrowUpRightFromSquare className="h-3.5 w-3.5 ml-1 transition-transform group-hover/button:translate-x-0.5" />
            </Link>
          </Button>
        </div>
      </div>
    </article>
  );
}