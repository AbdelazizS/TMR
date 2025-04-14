import { MapPin } from 'lucide-react';

export function NeighborhoodSection({ neighborhood }: { neighborhood: any }) {
  return (
    <section className="bg-background rounded-lg p-6 shadow-sm border">
      <h2 className="text-xl font-semibold mb-4 text-foreground">Neighborhood</h2>
      <div className="prose text-foreground/90 max-w-none" dangerouslySetInnerHTML={{ __html: neighborhood.description }} />
      
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {neighborhood.amenities.map((amenity: any, index: number) => (
          <div key={index} className="flex items-start gap-3">
            <div className="bg-primary/10 p-2 rounded-full">
              <MapPin className="w-4 h-4 text-primary" />
            </div>
            <div>
              <h3 className="font-medium text-foreground">{amenity.name}</h3>
              <p className="text-sm text-muted-foreground">{amenity.distance}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}