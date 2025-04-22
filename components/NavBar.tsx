"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { MenuIcon, PhoneCallIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import ThemeToggle from "./ThemeToggle";
import Image from "next/image";
import { cn } from "@/lib/utils";

const Navbar5 = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const features = [
    {
      title: "About",
      href: "/about_us",
    },
    {
      title: "Contact us",
      href: "/contact_us",
    },
    {
      title: "Sell a Property",
      href: "/properties",
    },
  ];

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300 border-b",
        scrolled
          ? "bg-background/95 backdrop-blur-md border-b-primary/20 shadow-sm"
          : "bg-background "
      )}
    >
      <div className="max-w-7xl flex items-center justify-between h-20 px-2 mx-auto">
        <Link href="/" className="flex items-center">
          <Image
            src="/tmr.png"
            alt="Elite Properties"
            width={120}
            height={40}
            className="w-auto h-16 object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList className="gap-1">
            {features.map((feature) => (
              <NavigationMenuItem key={feature.title}>
                <Link
                  href={feature.href}
                  className={cn(
                    "px-4 py-2 text-sm font-medium transition-colors hover:text-primary relative",
                    "after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2",
                    "after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300",
                    pathname === feature.href
                      ? "text-primary after:w-4/5"
                      : "text-foreground/80 hover:after:w-4/5"
                  )}
                >
                  {feature.title}
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Desktop Actions */}
        <div className="items-center hidden gap-2 lg:flex">
          <ThemeToggle />
          <a href="tel:+971564418632">
            <Button className="gap-1.5" size="sm">
              <PhoneCallIcon className="w-4 h-4" />
              Contact
            </Button>
          </a>
        </div>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon">
              <MenuIcon className="w-5 h-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px] sm:w-[350px] p-2">
            <SheetHeader>
              <SheetTitle className="text-left">
                <Link href="/">
                  <Image
                    src="/tmr.png"
                    alt="Elite Properties"
                    width={120}
                    height={40}
                    className="w-auto h-12 object-contain"
                  />
                </Link>
              </SheetTitle>
            </SheetHeader>

            <div className="flex flex-col mt-8 space-y-2">
              {features.map((feature) => (
                <Link
                  key={feature.title}
                  href={feature.href}
                  className={cn(
                    "px-4 py-3 text-sm font-medium transition-colors rounded-lg",
                    pathname === feature.href
                      ? "bg-primary/10 text-primary"
                      : "hover:bg-accent"
                  )}
                >
                  {feature.title}
                </Link>
              ))}
            </div>

            <div className="absolute bottom-6 left-4 right-4 space-y-3 flex gap-2">
              <a href="tel:+971564418632" className="w-full">
                <Button className="w-full gap-1.5">
                  <PhoneCallIcon className="w-4 h-4" />
                  Contact Us
                </Button>
              </a>
              <div className="flex justify-center">
                <ThemeToggle />
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Navbar5;