"use client";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Home,
  MapPin,
  BedDouble,
  Bath,
  Ruler,
  Heart,
  Share2,
  Phone,
  Mail,
  MessageSquare,
} from "lucide-react";
import Image from "next/image";
import { InquiryForm } from "./inquiry-form";
import { PropertyGallery } from "./property-gallery";
import { FeaturesList } from "./features-list";
import { NeighborhoodSection } from "./neighborhood-section";
import { ContactFab } from "./contact-fab";

export function PropertyDetails({ property }: { property: any }) {
  console.log(property);

  return (
    <div className="relative">
      {/* Property Header */}
      <header className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
          {property.title}
        </h1>
        <div className="flex items-center text-muted-foreground gap-2 mb-4">
          <MapPin className="w-4 h-4" />
          <span>{property.address}</span>
        </div>

        {/* Price and Status Badge */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <span className="text-2xl font-bold text-primary">
              {property.price}
            </span>
            <span className="text-muted-foreground ms-0.5 font-bold">AED</span>
            {/* {property.priceSuffix && (
                {property.priceSuffix}
            )} */}
          </div>
          {/* <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm">
            {property.status}
          </span> */}
        </div>
      </header>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Gallery Section */}
          <PropertyGallery images={property.images} status={property.status} />
          {/* Key Details */}
          <section className="bg-card rounded-lg p-6 shadow-sm border">
            <h2 className="text-xl font-semibold mb-4 text-foreground">
              Property Details
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="flex items-center gap-2">
                <BedDouble className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Bedrooms</p>
                  <p className="font-medium">{property.bedrooms}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Bath className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Bathrooms</p>
                  <p className="font-medium">{property.bathrooms}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Ruler className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Area</p>
                  <p className="font-medium">{property.area} sqft</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Home className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Type</p>
                  <p className="font-medium">{property.type}</p>
                </div>
              </div>
            </div>
          </section>

          {/* Description */}
          <section className="bg-background rounded-lg p-6 shadow-sm border">
            <h2 className="text-xl font-semibold mb-4 text-foreground">
              Description
            </h2>
            <p className="prose text-foreground/90 max-w-none">
              {property.description}
            </p>
          </section>

          {property.video_url && (
            <section className="bg-card rounded-lg p-6 shadow-sm border mt-8">
              <h2 className="text-xl font-semibold mb-4 text-foreground">
                Property Video
              </h2>
              <video controls width="640" height="360">
                <source src="/videos/property-tour.mp4" type="video/mp4" />
                <track
                  src="/captions/property-tour.en.vtt"
                  kind="captions"
                  label="English"
                  default
                />
                Your browser does not support the video tag.
              </video>
            </section>
          )}

          {/* Neighborhood */}
          {property.features?.length > 0 && <FeaturesList features={property.features} />}

          {/* Neighborhood */}
          <NeighborhoodSection
            amenities={property.amenities}
            neighborhood={property.neighborhood}
          />
        </div>

        {/* Right Column - Sidebar */}
        <div className="space-y-6">
          {/* Inquiry Form - Sticky */}
          <div className="sticky top-6">
            {/* <InquiryForm property={property} /> */}

            {/* Contact Options */}
            <div className="bg-background rounded-lg p-6 shadow-sm mt-6 space-y-3">
              <h3 className="font-medium text-foreground">Contact Options</h3>
              <a href="tel:+971564418632" className="block w-full">
                <Button
                  variant="outline"
                  className="p-4 cursor-pointer  w-full"
                >
                  <Phone className="w-4 h-4" />
                  Call Agent
                </Button>
              </a>

              <a href="https://wa.me/+971559669372" className="block w-full ">
                <Button
                  variant="outline"
                  className="p-4 cursor-pointer  w-full"
                >
                  Contact Us <MessageSquare className="w-4 h-4" />
                </Button>
              </a>

              <a
                href="mailto:info@tmr-realestatecom.org"
                className="block cursor-pointer"
              >
                <Button
                  variant="outline"
                  className="w-full gap-2 cursor-pointer"
                >
                  <Mail className="flex-shrink-0 size-5" />
                  Email TMR
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Contact FAB */}
      <ContactFab property={property} />
    </div>
  );
}
