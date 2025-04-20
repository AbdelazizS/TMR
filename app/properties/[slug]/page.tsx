import Footer from "@/components/Footer";
import Navbar5 from "@/components/NavBar";
import { PropertyDetails } from "@/components/property-details";
import { getPropertyBySlug } from "@/lib/properties";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const { slug } = params;
  const property = await getPropertyBySlug(slug);

  if (!property) return notFound();

  return {
    title: `${property?.title} in ${property?.location} | TMR Real Estate Dubai`,
    description: property.description.substring(0, 160),
    alternates: {
      canonical: `/properties/${slug}`,
    },
    keywords: [
      property?.title,
      property?.location,
      "Dubai real estate",
      "TMR Real Estate",
      "property for sale",
      "property for rent",
    ],
    openGraph: {
      title: `${property?.title} | TMR Real Estate`,
      // description: `${property.description.substring(0, 160)} | Located in ${property.location}. Price: ${property.price}`,
      images: [
        {
          url: property?.images?.[0] || "/default-og-image.jpg",
          width: 1200,
          height: 630,
          alt: property.title,
        },
      ],
      locale: "en_US",
      type: "article",
      url: `/properties/${slug}`,
      siteName: "TMR Real Estate",
    },
    twitter: {
      card: "summary_large_image",
      title: `${property?.title} | TMR Real Estate`,
      description: property?.description,
      images: [property?.images?.[0] || "/default-twitter-image.jpg"],
    },
  };
}

export default async function PropertyPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;  
  const property = await getPropertyBySlug(slug);

  if (!property) {
    notFound();
  }

  return (
    <>
      <Navbar5 />
      <main className="max-w-7xl mx-auto px-4 my-12">
        <PropertyDetails property={property} />
      </main>
      <Footer />
    </>
  );
}
