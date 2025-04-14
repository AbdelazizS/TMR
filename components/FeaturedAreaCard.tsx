import Image from "next/image";
import { Button } from "./ui/button";
import { ArrowUpRightFromSquare } from "lucide-react";
import Link from "next/link";

interface CardProps {
  title: string;
  properties: string;
  cover: string;
  id: string | number;
}

const FeaturedAreaCard = ({ cover, title, properties, id }: CardProps) => {
  return (
    <article className="bg-card rounded-t-lg shadow-sm  border-2">
      <div className="rounded-t-lg bg-muted relative">
        {/* <Image
          src={cover}
          alt="article cover"
          width={1400}
          height={800}
          className="rou w-full aspect-video object-cover"
        /> */}
        <figure className="relative aspect-video w-full">
          <Image
            src={cover}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="transition-all hover:scale-101 cursor-pointer rounded-t-lg"
          />
        </figure>
        <div className="absolute -bottom-18 md:-bottom-20  z-10 flex inset-x-2 rounded-lg bg-card  border  p-2 shadow-xs">
          <div className="flex items-center gap-x-4">
            <div>
              <h3 className="text-lg font-semibold text-foreground">{title}</h3>
              {/* <p className="text-foreground font-semibold">{title}</p> */}
              <p className="text-sm text-muted-foreground">{properties}</p>

              <Link
                aria-label={`View details for ${title}`}
                href="/properties"
              >
                <Button className="mt-4 cursor-pointer">
                  View Details <ArrowUpRightFromSquare />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default FeaturedAreaCard;
