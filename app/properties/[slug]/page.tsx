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
    title: `${property?.title || "Property"} in ${property?.location || "Unknown"} | TMR Real Estate Dubai`,
    description: property?.description?.substring(0, 160) || "No description available.",
    alternates: {
      canonical: `/properties/${slug}`,
    },
    keywords: [
      property?.title || "Property",
      property?.location || "Unknown",
      "Dubai real estate",
      "TMR Real Estate",
      "property for sale",
      "property for rent",
    ],
    openGraph: {
      title: `${property?.title || "Property"} | TMR Real Estate`,
      description: property?.description?.substring(0, 160) || "No description available.",
      images: [
        {
          url: property?.images?.[0] || "/default-og-image.jpg",
          width: 1200,
          height: 630,
          alt: property?.title || "Property Image",
        },
      ],
      locale: "en_US",
      type: "article",
      url: `/properties/${slug}`,
      siteName: "TMR Real Estate",
    },
    twitter: {
      card: "summary_large_image",
      title: `${property?.title || "Property"} | TMR Real Estate`,
      description: property?.description || "No description available.",
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
