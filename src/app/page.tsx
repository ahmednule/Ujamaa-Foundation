"use client";
import {Carousel,CarouselContent,CarouselItem,CarouselNext,CarouselPrevious,} from "@components/components/ui/carousel";
import { Button } from "@components/components/ui/button";
import Image from "next/image";
import { items } from "@components/lib/HomeLinks";
import AboutUs from "@components/components/AboutUs"
import KeyPrograms from "@components/components/KeyPrograms"

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
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <div className="absolute inset-0 flex flex-col justify-center items-start px-8 max-w-2xl ml-10">
                  <h2 className="text-5xl font-extrabold text-white mb-4 text-left sm:text-6xl leading-tight">
                    {item.text}
                  </h2>
                  <p className="text-lg text-white mb-6 leading-relaxed">
                    {item.description}
                  </p>
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
        <CarouselPrevious className="absolute top-1/2 transform -translate-y-1/2 left-4 bg-white text-black rounded-full p-3 shadow-lg" />
        <CarouselNext className="absolute top-1/2 transform -translate-y-1/2 right-4 bg-white text-black rounded-full p-3 shadow-lg" />
      </Carousel>
      <AboutUs/>
      <KeyPrograms/>
    </>
  );
}
