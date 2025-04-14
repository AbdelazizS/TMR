// app/properties/page.tsx
import { Suspense } from 'react'
import PropertiesPage from '@/components/PropertiesPage'

export default function Properties() {
  return (
    <Suspense fallback={<div className="p-8">Loading properties...</div>}>
      <PropertiesPage />
    </Suspense>
  )
}
