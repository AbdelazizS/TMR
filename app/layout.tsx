import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'TRM Real Estate Agency | Properties in Dubai',
  description: 'Find luxury villas, apartments, and commercial spaces in Dubai with TRM Real Estate — your trusted property partner.',

  keywords: [
    'Real Estate Dubai',
    'Dubai Properties',
    'Villas for Sale Dubai',
    'Apartments in Dubai',
    'TRM Real Estate Agency',
    'Luxury Properties Dubai'
  ],

  authors: [{ name: 'TRM Real Estate Agency', url: 'https://yourdomain.com' }],
  creator: 'TRM Real Estate',
  publisher: 'TRM Real Estate Agency',

  metadataBase: new URL('https://yourdomain.com'),

  openGraph: {
    title: 'TRM Real Estate Agency | Properties in Dubai',
    description: 'Discover luxury villas, apartments, and commercial spaces in Dubai with TRM Real Estate.',
    url: 'https://yourdomain.com',
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
    title: 'TRM Real Estate Agency | Properties in Dubai',
    description: 'Find luxury villas, apartments, and commercial spaces in Dubai with TRM Real Estate.',
    images: ['/images/trm-logo.png'],
    site: '@TRMRealEstate', // optional
    creator: '@TRMRealEstate', // optional
  },

  icons: {
    icon: '/images/trm-logo.png',
    shortcut: '/images/trm-logo.png',
    apple: '/images/trm-logo.png',
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ colorScheme: 'light' }} className="light">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
