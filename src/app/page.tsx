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
  const images = [
    "/image1.jpg", 
    "/image2.jpg",
    "/image3.jpg",
    "/image4.jpg",
    "/image5.jpg",

  ];

  return (
    <>
      <Carousel>
        <CarouselContent>
          {images.map((src, index) => (
            <CarouselItem key={index}>
              
              <Image
                src={src}
                alt={`Carousel image ${index + 1}`}
                width={300} 
                height={400}
                layout="responsive"
              />
              
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
        <Button>Custom Action</Button>
      </Carousel>
    </>
  );
}
