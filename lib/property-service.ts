// lib/property-service.ts
interface Property {
    id: string;
    title: string;
    location: string;
    price: number;
    beds: number;
    baths: number;
    sqft: number;
    type: string;
    status: string;
    image: string;
    amenities: string[];
  }
  
  const mockProperties: Property[] = Array.from({ length: 24 }).map((_, i) => ({
    id: i.toString(),
    title: `Luxury ${i % 2 ? 'Apartment' : 'Villa'} ${i + 1}`,
    location: i % 2 ? 'Dubai Marina' : 'Palm Jumeirah',
    price: 5000000 + (i * 100000),
    beds: (i % 3) + 1,
    baths: (i % 2) + 1,
    sqft: 1500 + (i * 50),
    type: i % 2 ? 'Apartment' : 'Villa',
    status: i % 3 ? 'For Sale' : 'For Rent',
    image: `/properties/property-${(i % 6) + 1}.webp`,
    amenities: ['Pool', 'Gym', 'Parking'].slice(i % 3),
  }));
  
  export async function getProperties(filters: Record<string, string | string[] | undefined>): Promise<Property[]> {
    return mockProperties.filter(property => {
      if (filters.type && property.type !== filters.type) return false;
      if (filters.minPrice && property.price < Number(filters.minPrice)) return false;
      if (filters.maxPrice && property.price > Number(filters.maxPrice)) return false;
      if (filters.amenities) {
        const requiredAmenities = Array.isArray(filters.amenities)
          ? filters.amenities
          : [filters.amenities];
        return requiredAmenities.every(amenity => property.amenities.includes(amenity));
      }
      return true;
    });
  }
  
  export async function getPropertiesByType(type: string, filters: Record<string, any>) {
    return getProperties({ ...filters, type });
  }