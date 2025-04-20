// app/properties/page.tsx
import { Suspense } from 'react'
import PropertiesPage from '@/components/PropertiesPage'

interface Props {
  searchParams: {
    status?: string
    type?: string
    location?: string
    featured?: string
    search?: string // ✅ Include 'search' if it’s supported
  }
}

export default function Properties({ searchParams }: Props) {
  return (
    <Suspense fallback={<div className="p-8" />}>
      <PropertiesPage filters={searchParams} />
    </Suspense>
  )
}
