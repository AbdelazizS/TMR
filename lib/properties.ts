import { api } from "./api";

// Sample property data - in a real app, you'd fetch this from a CMS or API
const properties = [
  {
    id: '1',
    slug: 'sed-dolore-architecto-spHfS',
    title: 'Modern Downtown Loft', 
    description: 'Exquisite beachfront villa in Palm Jumeirah with private beach access, infinity pool, and state-of-the-art smart home technology.',
    address: 'Palm Jumeirah, Dubai, UAE',
    location: 'Palm Jumeirah, Dubai',
    price: 'AED 28,000,000',
    priceValue: 28000000,
    priceSuffix: 'or AED 95,000/month',
    status: 'for-sale',
    bedrooms: 5,
    bathrooms: 6,
    area: 7200,
    type: 'Villa',
    images: [
      '/images/1.jpg',
      '/images/2.jpg',
      '/images/3.jpg',
      '/images/4.jpg'
    ],
    features: [
      'Private Beach',
      'Infinity Pool',
      'Smart Home System',
      'Gourmet Kitchen',
      'Walk-in Closets',
      'Cinema Room',
      'Maid’s Room',
      'Covered Parking',
      'Security System'
    ],
    floorPlans: [
      {
        name: 'Ground Floor',
        image: '/floorplans/villa-floor-1.jpg',
        area: 4000
      },
      {
        name: 'Upper Floor',
        image: '/floorplans/villa-floor-2.jpg',
        area: 3200
      }
    ],
    neighborhood: {
      description: '<p>Located in one of Dubai’s most iconic waterfront communities, offering unparalleled luxury and lifestyle. Minutes from Atlantis and The Pointe.</p>',
      amenities: [
        { name: 'Atlantis The Palm', distance: '1.2 km' },
        { name: 'Nakheel Mall', distance: '2 km' },
        { name: 'Dubai Marina', distance: '8 km' },
        { name: 'Burj Al Arab', distance: '10 km' },
        { name: 'DXB Airport', distance: '35 km' },
        { name: 'Al Ittihad Park', distance: '1.5 km' }
      ]
    },
    agent: {
      name: 'Ayesha Al Farsi',
      title: 'Senior Property Consultant',
      phone: '+971 50 123 4567',
      photo: '/agents/ayesha-al-farsi.jpg'
    },
    createdAt: '2024-12-01'
  },
  {
    id: '2',
    slug: 'downtown-dubai-apartment',
    title: 'Modern Apartment in Downtown Dubai',
    description: 'Sleek and stylish apartment with Burj Khalifa views. Features open-plan living, floor-to-ceiling windows, and premium amenities.',
    address: 'Sheikh Mohammed bin Rashid Blvd, Downtown Dubai, UAE',
    location: 'Downtown Dubai',
    price: 'AED 3,200,000',
    priceValue: 3200000,
    priceSuffix: 'or AED 15,000/month',
    status: 'for-sale',
    bedrooms: 2,
    bathrooms: 2,
    area: 1400,
    type: 'Apartment',
    images: [
      '/images/1.jpg',
      '/images/2.jpg',
      '/images/3.jpg',
      '/images/4.jpg'
    ],
    features: [
      'Burj Khalifa View',
      'Balcony',
      'Fitness Center',
      'Infinity Pool',
      'Smart Thermostat',
      'Concierge Service',
      'Covered Parking',
      'Business Lounge',
      'High-speed Elevators'
    ],
    floorPlans: [
      {
        name: 'Single Floor Layout',
        image: '/floorplans/villa-floor-1.jpg',
        area: 1400
      }
    ],
    neighborhood: {
      description: '<p>Prime location near Dubai Mall, the Burj Khalifa, and the Dubai Fountain. Ideal for those seeking luxury and convenience in the city center.</p>',
      amenities: [
        { name: 'Dubai Mall', distance: '0.5 km' },
        { name: 'Burj Khalifa', distance: '0.3 km' },
        { name: 'Metro Station', distance: '0.7 km' },
        { name: 'Souk Al Bahar', distance: '0.6 km' },
        { name: 'Business Bay', distance: '2 km' },
        { name: 'DXB Airport', distance: '14 km' }
      ]
    },
    agent: {
      name: 'Khalid Mansoor',
      title: 'Luxury Sales Advisor',
      phone: '+971 55 987 6543',
      photo: '/agents/khalid-mansoor.jpg'
    },
    createdAt: '2025-01-10'
  },
  {
    id: '3',
    slug: 'emirates-hills-mansion',
    title: 'Elegant Mansion in Emirates Hills',
    description: 'Ultra-luxury mansion in Emirates Hills with golf course views, expansive gardens, and bespoke interiors. A residence for the elite.',
    address: 'Sector E, Emirates Hills, Dubai, UAE',
    location: 'Emirates Hills',
    price: 'AED 45,000,000',
    priceValue: 45000000,
    priceSuffix: 'or AED 180,000/month',
    status: 'for-rent',
    bedrooms: 7,
    bathrooms: 8,
    area: 12000,
    type: 'Mansion',
    images: [
      '/images/1.jpg',
      '/images/2.jpg',
      '/images/3.jpg',
      '/images/4.jpg'
    ],
    features: [
      'Golf Course View',
      'Private Elevator',
      'Indoor Pool',
      'Chef’s Kitchen',
      'Library',
      'Wine Cellar',
      'Home Cinema',
      'Gym & Spa',
      'Driver’s Quarters'
    ],
    floorPlans: [
      {
        name: 'Ground Floor',
        image: '/floorplans/villa-floor-1.jpg',
        area: 6000
      },
      {
        name: 'First Floor',
        image: '/floorplans/villa-floor-2.jpg',
        area: 6000
      }
    ],
    neighborhood: {
      description: '<p>One of Dubai’s most prestigious gated communities, Emirates Hills offers serene surroundings, privacy, and proximity to Montgomerie Golf Club.</p>',
      amenities: [
        { name: 'Montgomerie Golf Club', distance: '0.4 km' },
        { name: 'Dubai Marina', distance: '5 km' },
        { name: 'Mall of the Emirates', distance: '10 km' },
        { name: 'DXB Airport', distance: '25 km' },
        { name: 'Dubai British School', distance: '2 km' },
        { name: 'Lakes Club', distance: '1.5 km' }
      ]
    },
    agent: {
      name: 'Rania Al Saeed',
      title: 'Elite Property Expert',
      phone: '+971 58 222 3344',
      photo: '/agents/rania-al-saeed.jpg'
    },
    createdAt: '2025-03-22'
  }
];



  export type Property = {
    id: string
    slug: string
    title: string
    status: string
    description: string
    type: string
    // type: 'house' | 'apartment' | 'condo' | 'townhouse'
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
  
  // Simulate API fetch
  const delay = () => new Promise(resolve => setTimeout(resolve, 1000));
  
  export async function getProperties() {
    await delay();
    return properties;
  }
  
  export async function getPropertyBySlug(slug: string) {
    await delay();
    const property = await api.get(`/properties/${slug}`);
    
    if (!property) {
      throw new Error('Property not found');
    }
    
    return property.data.data;
  }
  
  export async function getFeaturedProperties() {
    await delay();
    return properties.slice(0, 3);
  }