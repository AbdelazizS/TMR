// lib/constants.ts
export const PROPERTY_TYPES = [
    { value: 'apartment', label: 'Apartment' },
    { value: 'villa', label: 'Villa' },
    { value: 'townhouse', label: 'Townhouse' },
    { value: 'penthouse', label: 'Penthouse' },
  ];
  
  export const AMENITIES = [
    'Pool',
    'Gym',
    'Parking',
    'Security',
    'Pet Friendly',
    'Balcony',
    'Furnished',
  ];

  // lib/constants.ts
export type Property = {
  id: string
  slug: string
  title: string
  status: string
  description: string
  type: 'house' | 'apartment' | 'condo' | 'townhouse'
  price: number
  bedrooms: number
  bathrooms: number
  sqft: number
  location: string
  address: string
  yearBuilt: number
  features: string[]
  images: {
    url: string
    alt: string
    caption?: string
  }[]
  listedDate: string
}

export const sampleProperties: Property[] = [
  {
    id: '1',
    slug: 'modern-downtown-loft',
    title: 'Modern Downtown Loft',
    status: 'for-rent',
    description: 'Stunning modern loft in the heart of Downtown Dubai with panoramic Burj Khalifa views. Features open floor plan, floor-to-ceiling windows, and luxury finishes.',
    type: 'apartment',
    price: 7500,
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1800,
    location: 'Downtown Dubai',
    address: '123 Sheikh Mohammed Blvd, Downtown Dubai',
    yearBuilt: 2021,
    features: [
      'Open floor plan',
      'Smart home system',
      'Rooftop terrace',
      'Fitness center',
      'Concierge service'
    ],
    images: [
      {
        url: '/images/2.jpg',
        alt: 'Modern living room with floor-to-ceiling windows'
      },
      {
        url: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb',
        alt: 'Contemporary kitchen with island'
      },
      {
        url: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688',
        alt: 'Luxury bedroom with city view'
      }
    ],
    listedDate: '2024-12-01'
  },
  {
    id: '2',
    slug: 'emirates-hills-mansion',
    title: 'Elegant Mansion in Emirates Hills',
    status: 'for-sale',
    description: 'Elegant 5-bedroom villa in Emirates Hills with private pool, garden, and skyline views. Premium interior, marble floors, and home cinema.',
    type: 'villa',
    price: 12500000,
    bedrooms: 5,
    bathrooms: 6,
    sqft: 7200,
    location: 'Emirates Hills',
    address: '7 Royal Drive, Emirates Hills, Dubai',
    yearBuilt: 2018,
    features: [
      'Private pool',
      'Home cinema',
      'Marble floors',
      'Maid’s room',
      'Panoramic views'
    ],
    images: [
      {
        url: '/images/1.jpg',
        alt: 'Two-story family home with front porch'
      },
      {
        url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
        alt: 'Spacious living room with fireplace'
      },
      {
        url: 'https://images.unsplash.com/photo-1600121848594-d8644e57abab',
        alt: 'Modern kitchen with island'
      }
    ],
    listedDate: '2024-10-10'
  },
  {
    id: '5',
    slug: 'downtown-dubai-apartment',
    title: 'Modern Apartment in Downtown Dubai',
    status: 'for-rent',
    description: 'Stylish loft apartment in Business Bay with canal views and smart automation. Walking distance to metro and commercial towers.',
    type: 'apartment',
    price: 6200,
    bedrooms: 1,
    bathrooms: 1.5,
    sqft: 1300,
    location: 'Business Bay',
    address: '501 Vision Tower, Business Bay, Dubai',
    yearBuilt: 2022,
    features: [
      'Canal view',
      'Smart automation',
      'Gym access',
      'Underground parking',
      'Close to metro'
    ],
    images: [
      {
        url: '/images/2.jpg',
        alt: 'Modern living room with floor-to-ceiling windows'
      },
      {
        url: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb',
        alt: 'Contemporary kitchen with island'
      },
      {
        url: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688',
        alt: 'Luxury bedroom with city view'
      }
    ],
    listedDate: '2025-03-02'
  }
];


