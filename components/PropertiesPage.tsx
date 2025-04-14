// components/PropertiesPage.tsx
'use client'

import { useSearchParams, useRouter } from 'next/navigation'
import { sampleProperties } from '@/lib/constants'
import { PropertyCard } from '@/components/property/PropertyCard'
import SearchFilters from '@/components/property/filter'
import { Button } from '@/components/ui/button'
import { useEffect, useState } from 'react'
import Navbar5 from '@/components/NavBar'
import Footer from '@/components/Footer'

export default function PropertiesPage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)

  const propertyType = searchParams.get('propertyType') || 'all'
  const bedrooms = searchParams.get('bedrooms') || 'any'
  const location = searchParams.get('location') || ''
  const priceRange = searchParams.get('priceRange') || 'any'

  const filteredProperties = sampleProperties.filter(property => {
    let priceValid = true
    if (priceRange !== 'any') {
      const [minPriceStr, maxPriceStr] = priceRange.split('-')
      const minPrice = Number(minPriceStr)
      const maxPrice = maxPriceStr ? Number(maxPriceStr) : Infinity
      priceValid = property.price >= minPrice && property.price <= maxPrice
    }

    const typeValid = propertyType !== 'all' ? property.type === propertyType : true
    const bedroomsValid = bedrooms !== 'any' ? property.bedrooms >= parseInt(bedrooms) : true
    const locationValid = location
      ? property.location.toLowerCase().includes(location.toLowerCase())
      : true

    return typeValid && bedroomsValid && locationValid && priceValid
  })

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 500)
    return () => clearTimeout(timer)
  }, [])

  const handleSearch = (data: Record<string, string>) => {
    const newSearchParams = new URLSearchParams()
    Object.entries(data).forEach(([key, value]) => {
      if (value && value !== 'all' && value !== 'any') {
        newSearchParams.set(key, value)
      }
    })
    router.push(`/properties?${newSearchParams.toString()}`)
  }

  const clearFilters = () => {
    router.push('/properties')
  }

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="animate-pulse space-y-8">
          <div className="h-10 w-1/3 bg-muted rounded"></div>
          <div className="h-24 bg-muted rounded-lg"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="h-96 bg-muted rounded-lg"></div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      <Navbar5 />
      <main className="">
        <SearchFilters
          onSubmit={handleSearch}
          initialValues={{ propertyType, bedrooms, location, priceRange }}
        />
        <h1 className="max-w-7xl mx-auto text-3xl font-bold mt-8 text-foreground">
          Available Properties ({filteredProperties.length})
        </h1>

        {filteredProperties.length === 0 ? (
          <div className="text-center py-12 space-y-4">
            <p className="text-muted-foreground">No properties match your criteria</p>
            <Button onClick={clearFilters}>Clear All Filters</Button>
          </div>
        ) : (
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
            {filteredProperties.map(property => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        )}
      </main>
      <Footer />
    </>
  )
}
