"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  CarouselDots,
} from "@/components/ui/carousel";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

export default function Slider() {
  return (
    <div
      dir="ltr"
      className="w-full max-w-screen-lg rounded-xl sm:p-10 p-2 mx-auto h-auto relative z-10"
    >
      <Carousel
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
        className="w-full h-auto"
      >
        <CarouselContent>
          <CarouselItem>
            <Image
              width={1920}
              height={1080}
              src="/05.jpg"
              alt="Carousel Image 2"
              className="object-cover w-full h-full rounded-xl"
            />
          </CarouselItem>
          <CarouselItem>
            <Image
              width={1920}
              height={1080}
              src="/02.jpg"
              alt="Carousel Image 2"
              className="object-cover w-full h-full rounded-xl"
            />
          </CarouselItem>
          <CarouselItem>
            <Image
              width={1920}
              height={1080}
              src="/01.jpg"
              alt="Carousel Image 3"
              className="object-cover w-full h-full rounded-xl"
            />
          </CarouselItem>
        </CarouselContent>
        <div className="hidden sm:block">
          <CarouselPrevious>
            <ChevronLeftIcon className="w-8 h-8 text-white" />
          </CarouselPrevious>
          <CarouselNext>
            <ChevronRightIcon className="w-8 h-8 text-white" />
          </CarouselNext>
        </div>
        <CarouselDots />
      </Carousel>
    </div>
  );
}
