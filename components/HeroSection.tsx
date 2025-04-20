"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
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
import { Loader2 } from "lucide-react";

const Hero = () => {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [type, setType] = useState<string | undefined>(undefined);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const query = new URLSearchParams();

    if (search) query.set("search", search);
    if (type && type !== "all") query.set("status", type);

    router.push(`/properties?${query.toString()}`);
  };

  return (
    <section
      className="relative w-full h-[calc(100vh-4rem)] overflow-hidden"
      role="banner"
      aria-label="Real estate hero section"
    >
      <Image
        src="/hero.jpg"
        alt="Modern real estate property background"
        layout="fill"
        objectFit="cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/60 to-black/20" />

      <div className="relative container mx-auto px-4 py-12 h-full flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Your
          <span className="mx-1 text-transparent bg-clip-text bg-gradient-to-tr from-blue-600 to-blue-700">
            Trusted
          </span>
          Real Estate Partner.
        </h1>

        <p className="text-lg md:text-xl text-white mb-8">
          We help you buy, sell, or rent properties with transparency and ease.
        </p>

        <form
          onSubmit={handleSubmit}
          className="w-full max-w-xl bg-card bg-opacity-90 rounded-lg shadow-md p-6"
          role="search"
          aria-label="Property search filter"
        >
          <div className="flex flex-col md:flex-row items-center gap-4">
            <Input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              placeholder="Enter city or location ..."
              aria-label="Search by location or keyword"
            />

            <Select onValueChange={(val) => setType(val)} defaultValue="all">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="for_rent">For Rent</SelectItem>
                <SelectItem value="for_sell">For Sell</SelectItem>
              </SelectContent>
            </Select>

            <Button disabled={loading} type="submit" className="py-3 px-6">
              {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Search
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Hero;
