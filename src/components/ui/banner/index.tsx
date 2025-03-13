import * as React from 'react';
import Image from 'next/image';

import { Card, CardContent } from '@/components/ui';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui';

import IMG1 from './image/1.webp';
import IMG2 from './image/2.png';
import IMG3 from './image/3.jpg';
import IMG4 from './image/4.webp';

function Banner() {
  return (
    <Carousel className="w-full">
      <CarouselContent>
        {/* {Array.from({ length: 5 }).map((_, index) => ( */}
        {[IMG1, IMG2, IMG3, IMG4].map((image, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="relative aspect-square h-[400px] w-full flex items-center justify-center p-6">
                  {/*  <span className="text-4xl font-semibold">{index + 1}</span> */}

                  <Image src={image} fill className="object-cover" alt={`Banner ${index + 1}`} />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

export default Banner;
