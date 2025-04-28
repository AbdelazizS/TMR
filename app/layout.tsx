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
  title: 'TMR Real Estate Agency | Properties in Dubai',
  description: 'Find luxury villas, apartments, and commercial spaces in Dubai with TMR Real Estate — your trusted property partner.',

  keywords: [
    'Real Estate Dubai',
    'Dubai Properties',
    'Villas for Sale Dubai',
    'Apartments in Dubai',
    'TMR Real Estate Agency',
    'Luxury Properties Dubai'
  ],

  authors: [{ name: 'TMR Real Estate Agency', url: 'https://tmrrealestate.org' }],
  creator: 'TMR Real Estate',
  publisher: 'TMR Real Estate Agency',

  metadataBase: new URL('https://tmrrealestate.org'),

  openGraph: {
    title: 'TMR Real Estate Agency | Properties in Dubai',
    description: 'Discover luxury villas, apartments, and commercial spaces in Dubai with TMR Real Estate.',
    url: 'https://tmrrealestate.org',
    siteName: 'TMR Real Estate Agency',
    images: [
      {
        url: '/tmr_logo.png',
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
    title: 'TMR Real Estate Agency | Properties in Dubai',
    description: 'Find luxury villas, apartments, and commercial spaces in Dubai with TMR Real Estate.',
    images: ['/tmr_logo.png'],
    site: '@TMRRealEstate', // optional
    creator: '@TMRRealEstate', // optional
  },

  icons: {
    icon: '/tmr_logo.png',
    shortcut: '/tmr_logo.png',
    apple: '/tmr_logo.png',
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
