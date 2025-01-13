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
import {items} from "@components/lib/HomeLinks"

export default function Home() {

  return (
    <>
      <Carousel className="w-full">
        <CarouselContent>
          {items.map((item, index) => (
            <CarouselItem key={index}>
              <div className="relative w-full h-screen"> 
                <Image
                  src={item.src}
                  alt={`Carousel image ${index + 1}`}
                  width={1200}
                  height={600}
                  className="w-full h-full object-cover brightness-75" 
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6"> 
                  <h2 className="text-4xl font-bold text-white mb-6 text-center">{item.text}</h2>
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