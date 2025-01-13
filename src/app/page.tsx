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

export default function Home() {
  const items = [
    { 
      src: "/image1.jpeg",
      text: "Explore Mountains",
      link: "/mountains"
    },
    { 
      src: "/image2.jpeg",
      text: "Discover Beaches",
      link: "/beaches"
    },
    { 
      src: "/image3.jpeg",
      text: "Visit Cities",
      link: "/cities"
    },
    { 
      src: "/image4.jpeg",
      text: "Experience Forests",
      link: "/forests"
    },
    { 
      src: "/image5.jpeg",
      text: "Adventure Awaits",
      link: "/adventures"
    },
  ];

  return (
    <>
      <Carousel className="w-full">
        <CarouselContent>
          {items.map((item, index) => (
            <CarouselItem key={index}>
              <div className="relative w-full">
                <Image
                  src={item.src}
                  alt={`Carousel image ${index + 1}`}
                  width={400}
                  height={300}
                  className="w-full h-auto"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
                  <h2 className="text-2xl font-bold text-white mb-4">{item.text}</h2>
                  <Button asChild variant="default" className="bg-blue-600 hover:bg-blue-700">
                    <a href={item.link}>Go to {item.text}</a>
                  </Button>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4" />
        <CarouselNext className="right-4" />
      </Carousel>
    </>
  );
}