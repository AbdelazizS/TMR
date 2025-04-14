// app/properties/layout.tsx
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Explore Properties for Sale & Rent | TRM Real Estate Dubai',
  description: 'Browse a wide selection of villas, apartments, and commercial properties in Dubai. Find your next home or investment with TRM Real Estate.',

  keywords: [
    'Dubai real estate listings',
    'Properties for sale in Dubai',
    'Apartments for rent Dubai',
    'Luxury villas Dubai',
    'Commercial real estate Dubai',
    'TRM properties'
  ],

  metadataBase: new URL('https://yourdomain.com'),

  openGraph: {
    title: 'Properties for Sale & Rent in Dubai | TRM Real Estate',
    description: 'Find your dream home or next big investment in Dubai. Browse TRM’s curated list of villas, apartments, and commercial properties.',
    url: 'https://yourdomain.com/properties',
    siteName: 'TRM Real Estate Agency',
    images: [
      {
        url: '/images/trm-logo.png',
        width: 800,
        height: 600,
        alt: 'TRM Real Estate Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Properties in Dubai | TRM Real Estate',
    description: 'Discover homes, rentals, and commercial properties for every lifestyle and budget in Dubai.',
    images: ['/images/trm-logo.png'],
  },
};


export default function PropertiesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}