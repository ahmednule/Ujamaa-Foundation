"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@components/components/ui/carousel";
import { Button } from "@components/components/ui/button";
import Image from "next/image";
import { items } from "@components/lib/HomeLinks";

export default function Home() {
  return (
    <>
      <Carousel className="w-full">
        <CarouselContent>
          {items.map((item, index) => (
            <CarouselItem key={index}>
              <div className="relative w-full h-screen">
                {/* Background Image with brightness */}
                <Image
                  src={item.src}
                  alt={`Carousel image ${index + 1}`}
                  width={1200}
                  height={600}
                  className="w-full h-full object-cover brightness-75"
                />
                {/* Overlay for darkening */}
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                {/* Text and Button */}
                <div className="absolute inset-0 flex flex-col justify-center items-start px-8 max-w-2xl">
                  <h2 className="text-5xl font-extrabold text-white mb-4 text-left sm:text-6xl leading-tight">
                    {item.text}
                  </h2>
                  <Button
                    asChild
                    variant="default"
                    className="bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-6 rounded-full"
                  >
                    <a href={item.link}>Discover More</a>
                  </Button>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* Carousel Controls */}
        <CarouselPrevious className="absolute top-1/2 transform -translate-y-1/2 left-4 bg-white text-black rounded-full p-3 shadow-lg" />
        <CarouselNext className="absolute top-1/2 transform -translate-y-1/2 right-4 bg-white text-black rounded-full p-3 shadow-lg" />
      </Carousel>
    </>
  );
}

