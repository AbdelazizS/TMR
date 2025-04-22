"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Loader2, Play, Pause, CheckCircle } from "lucide-react";

const Hero = () => {
  const router = useRouter();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [type, setType] = useState<string | undefined>(undefined);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  // Handle video play/pause
  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Ensure video loops properly
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.addEventListener("ended", () => {
        video.currentTime = 0;
        video.play();
      });
    }
    return () => {
      if (video) {
        video.removeEventListener("ended", () => {});
      }
    };
  }, []);

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
      {/* Background Video */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted={isMuted}
        playsInline
        className="absolute z-0 w-full h-full object-cover"
      >
        {/* Provide multiple sources for cross-browser compatibility */}
        <source src="/hero-video.mp4" type="video/mp4" />
        <source src="/hero-video.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>

      

      {/* Fallback image if video fails to load */}
      {/* <div className="absolute inset-0 bg-black">
        <img 
          src="/hero.jpg" 
          alt="Modern real estate property background"
          className="absolute w-full h-full object-cover opacity-50"
        />
      </div> */}

      {/* Gradient overlay */}
      {/* <div className="absolute inset-0 bg-black/60 " /> */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/20" />

      {/* Video controls (discreet) */}
      <div className="absolute bottom-4 right-4 z-10 flex gap-2">
        <button
          onClick={togglePlay}
          className="p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-all"
          aria-label={
            isPlaying ? "Pause background video" : "Play background video"
          }
        >
          {isPlaying ? <Pause size={16} /> : <Play size={16} />}
        </button>
        <button
          onClick={() => setIsMuted(!isMuted)}
          className="p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-all"
          aria-label={
            isMuted ? "Unmute background video" : "Mute background video"
          }
        >
          {isMuted ? "🔇" : "🔊"}
        </button>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 py-12 h-full flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Your
          <span className="mx-1 text-transparent bg-clip-text bg-gradient-to-tr from-blue-500 via-primary  to-blue-700">
            Trusted
          </span>
          Real Estate Partner.
        </h1>

        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl">
          Discover premium properties with immersive 360° tours and expert
          guidance every step of the way.
        </p>

        <form
          onSubmit={handleSubmit}
          className="w-full max-w-2xl bg-card bg-opacity-90 rounded-lg shadow-xl p-6 backdrop-blur-sm"
          role="search"
          aria-label="Property search filter"
        >
          <div className="flex flex-col md:flex-row items-center gap-4">
            <Input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              placeholder="Search by city or location ..."
              aria-label="Search by location or keyword"
              className="w-full"
            />

            <Select onValueChange={(val) => setType(val)} defaultValue="all">
              <SelectTrigger
                className="w-[180px] "
                aria-label="Property type filter"
              >
                <SelectValue placeholder="Property Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Properties</SelectItem>
                <SelectItem value="for_rent">For Rent</SelectItem>
                <SelectItem value="for_sell">For Sale</SelectItem>
              </SelectContent>
            </Select>

            <Button disabled={loading} type="submit">
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Searching...
                </>
              ) : (
                "Find Properties"
              )}
            </Button>
          </div>
        </form>

        {/* Trust indicators */}
        <div className="absolute bottom-8 left-0 right-0 flex flex-wrap justify-center gap-6 px-4 text-sm text-white/90">
          {[
            { text: "10,000+ Happy Clients" },
            { text: "500+ Premium Listings" },
            { text: "24/7 Customer Support" },
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-2 whitespace-nowrap transition-opacity hover:text-white"
            >
              <CheckCircle
                className="w-4 h-4 text-blue-600"
                aria-hidden="true"
              />
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
