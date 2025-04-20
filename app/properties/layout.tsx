// app/properties/layout.tsx
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Explore Properties for Sale & Rent | TMR Real Estate Dubai',
  description: 'Browse a wide selection of villas, apartments, and commercial properties in Dubai. Find your next home or investment with TMR Real Estate.',

  keywords: [
    'Dubai real estate listings',
    'Properties for sale in Dubai',
    'Apartments for rent Dubai',
    'Luxury villas Dubai',
    'Commercial real estate Dubai',
    'TMR properties'
  ],

  metadataBase: new URL('https://yourdomain.com'),

  openGraph: {
    title: 'Properties for Sale & Rent in Dubai | TMR Real Estate',
    description: 'Find your dream home or next big investment in Dubai. Browse TMR’s curated list of villas, apartments, and commercial properties.',
    url: 'https://yourdomain.com/properties',
    siteName: 'TMR Real Estate Agency',
    images: [
      {
        url: '/tmr.png',
        width: 800,
        height: 600,
        alt: 'TMR Real Estate Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Properties in Dubai | TMR Real Estate',
    description: 'Discover homes, rentals, and commercial properties for every lifestyle and budget in Dubai.',
    images: ['/tmr.png'],
  },
};


export default function PropertiesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}