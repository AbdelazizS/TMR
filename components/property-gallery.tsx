import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Heart, MoveLeft, MoveRight, Share2, ZoomIn } from "lucide-react";
import Image from "next/image";

type PropertyStatus = "for-sale" | "for-rent" | "sold" | "under-offer" | "new";

export function PropertyGallery({
  images,
  status = "for-sale",
  favorite = false,
}: {
  images: string[];
  status?: PropertyStatus;
  favorite?: boolean;
}) {
  const statusStyles = {
    "for-sale": "bg-blue-600 text-white",
    "for-rent": "bg-emerald-600 text-white",
    sold: "bg-red-600 text-white",
    "under-offer": "bg-yellow-500 text-gray-900",
    new: "bg-purple-600 text-white",
  };

  return (
    <div className="relative group">
      {/* Status Badge */}
      <div
        className={`absolute top-4 left-0 px-4 py-1 text-sm font-semibold z-10 shadow-sm ${statusStyles[status]}`}
      >
        {status.replace('-', ' ').toUpperCase()}
      </div>

  
      {/* Main Carousel */}
      <Carousel className="w-full rounded-xl overflow-hidden shadow-lg">
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <div className="relative aspect-video">
                <Image
                  src={image}
                  alt={`Property image ${index + 1}`}
                  fill
                  className="object-cover"
                  priority={index === 0}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                />

                {/* Image Overlay Controls */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 flex space-x-2">
                    <button className="p-2 bg-white/90 rounded-full shadow-md hover:bg-white transition-all">
                      <ZoomIn className="w-5 h-5 text-gray-700" />
                    </button>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Navigation Arrows */}
        <CarouselPrevious className="left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 hover:bg-white" />
        <CarouselNext className="right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 hover:bg-white" />
      </Carousel>

      {/* Thumbnail Navigation */}
      {images.length > 1 && (
        <div className="mt-4">
          <div className="grid grid-cols-5 gap-2">
            {images.slice(0, 5).map((image, index) => (
              <button
                key={index}
                className="relative aspect-square rounded-md overflow-hidden border-2 border-transparent hover:border-blue-500 transition-all"
              >
                <Image
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  fill
                  className="object-cover"
                />
                {index === 4 && images.length > 5 && (
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-white font-medium">
                    +{images.length - 5}
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Image Counter */}
      <div className="absolute bottom-4 right-4 z-10 px-3 py-1 bg-black/70 rounded-full text-white text-sm">
        {`1/${images.length}`}
      </div>
    </div>
  );
}
