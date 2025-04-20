"use client";
import Link from "next/link";
import { MenuIcon, PhoneCallIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
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

const Navbar5 = () => {
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
    <header className="border-b border  left-0 top-0 w-full bg-background  z-[100]">
      <div className="relative max-w-7xl mx-auto flex overflow-hidden p-4 flex-row items-center justify-between">
        <Link href="/" className="">
          <Image
            src="/tmr.png"
            alt="Elite Properties"
            width={100}
            height={10}
            className="w-auto h-20 object-cover"
          />
        </Link>

        <NavigationMenu className="hidden lg:block">
          <NavigationMenuList className="flex w-full items-center gap-4">
            {features.map((feature, index) => (
              <NavigationMenuItem key={feature.title}>
                <Link
                  className="rounded-md p-3 mt-2 transition-colors hover:bg-muted/70"
                  href={feature.href}
                >
                  {feature.title}
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="hidden lg:flex z-50  items-center gap-4">
          {/* <Button
            className="p-4 cursor-pointer hover:scale-101 "
            variant={"outline"}
          >
            Learn More
          </Button> */}
          <a href="tel:+971564418632">
            <Button className="p-4 cursor-pointer hover:scale-101 ">
              Contact Us <PhoneCallIcon />
            </Button>
          </a>

          <ThemeToggle />
        </div>

        <Sheet>
          <SheetTrigger asChild className="lg:hidden z-50 cursor-pointer">
            <Button variant="outline" size="icon">
              <MenuIcon className="h-4 w-4 " />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="max-h-screen overflow-auto p-2">
            <SheetHeader>
              <SheetTitle>
                <Link href="/" className="">
                  <Image
                    src="/tmr.png"
                    alt="Elite Properties"
                    width={100}
                    height={10}
                    className="w-auto h-20 object-cover"
                  />
                </Link>
              </SheetTitle>
            </SheetHeader>

            <NavigationMenu className=" items-start">
              <NavigationMenuList className="flex-col items-start justify-items-start">
                {features.map((feature, index) => (
                  <NavigationMenuItem  className="w-full" key={feature.title}>
                    <NavigationMenuLink
                      href={feature.href}
                      className="rounded-md p-3 transition-colors hover:bg-muted/70"
                    >
                      {feature.title}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            <div className="flex items-center gap-4">

              <a href="tel:+971564418632" className="w-full">
                <Button className="p-4 cursor-pointer hover:scale-101 w-full">
                  Contact Us <PhoneCallIcon />
                </Button>
              </a>

              <ThemeToggle />
            </div>
              <Link href="/about_us" className="">
                <Button
                  className="p-4 cursor-pointer hover:scale-101 w-full "
                  variant={"outline"}
                >
                  Learn More
                </Button>
              </Link>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Navbar5;
