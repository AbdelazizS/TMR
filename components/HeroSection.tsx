import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import Link from "next/link";
const Hero = () => {
  const handelSearch = () => {
    console.log("handelSearch");
  };
  return (
    <section
      className="relative w-full h-[calc(100vh-4rem)] overflow-hidden"
      role="banner"
      aria-label="Real estate hero section"
    >
      <Image
      
        src="/hero.jpg" // ensure this image is placed in your public/images folder
        alt="Modern real estate property background"
        layout="fill"
        objectFit="cover"
        priority={true}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/60 to-black/20" />

      <div
        // ref={heroRef}
        className="relative container mx-auto px-4 py-12 h-full flex flex-col items-center justify-center text-center"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Your
          <span className="mx-1 text-transparent bg-clip-text  bg-gradient-to-tr from-blue-600 to-blue-700">
            Trusted
          </span>
          Real Estate Partner.
        </h1>

        <p className="text-lg md:text-xl text-white mb-8">
          We help you buy, sell, or rent properties with transparency and ease.
          Discover the difference today.
        </p>

        {/* Search Filter Form */}
        <form
          className="w-full max-w-xl bg-card bg-opacity-90 rounded-lg shadow-md p-6"
          role="search"
          aria-label="Property search filter"
        >
          <div className="flex flex-col md:flex-row items-center gap-4">
            <Input
              type="text"
              placeholder="Enter city name , .."
              aria-label="Search by location"
            />

            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="All">All</SelectItem>
                <SelectItem value="rent">Rent</SelectItem>
                <SelectItem value="buy">Buy</SelectItem>
                <SelectItem value="sell">Sell</SelectItem>
              </SelectContent>
            </Select>
            <Link href={"/properties"}>
              <Button className="py-3 px-5 ">
                Search
              </Button>
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Hero;
