import FeaturedAreaCard from "./FeaturedAreaCard";

const listings = [
  {
    id: 1,
    cover: "/hero.jpg",
    title: "Jumeirah Beach Residence",
    properties: "12 Properties",
  },
  {
    id: 4,

    cover: "/hero.jpg",
    title: "Jumeirah Beach Residence",
    properties: "12 Properties",
    sumary:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga incidunt nam, nihil earum animi ducimus exercitationem facilis explicabo dicta illum delectus, ipsum cum unde enim deleniti repellat. Ipsum, vitae doloremque.",
  },
  {
    id: 2,

    cover: "/hero.jpg",
    avatar: "/images/sidebiew.webp",
    title: "Jumeirah Beach Residence",
    properties: "12 Properties",
    sumary:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga incidunt nam, nihil earum animi ducimus exercitationem facilis explicabo dicta illum delectus, ipsum cum unde enim deleniti repellat. Ipsum, vitae doloremque.",
  },
];
export default function FeaturedAreas() {
  return (
    <section
      aria-labelledby="featured-areas-listing"
      className="py-20 md:py-20 lg:py-24 pb-24 md:pb-28 lg:pb-32 mb-6 md:mb-10 lg:mb-16"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto  mb-6 md:mb-8">
          <h2
            id="featured-areas-heading"
            className="text-3xl md:text-4xl font-bold text-foreground mb-2"
          >
            Featured Areas
          </h2>
          <p className="text-muted-foreground text-lg  max-w-2xl mx-auto">
            Discover luxurious properties across the UAE
          </p>
        </div>

        <div className="grid gap-8 gap-y-28 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
          {listings.map((item) => (
            <FeaturedAreaCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
