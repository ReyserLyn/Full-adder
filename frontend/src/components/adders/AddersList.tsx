'use client';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

import AdderCard from './AdderCard';
import AdderExample from './AdderExample';
import { data } from '../../data_static/data.ts';

export function AddersList() {
  return (
    <Carousel className="w-full max-w-xs">
      <CarouselContent>
        {data.map(({ title, image_url, description, sumType }) => (
          <CarouselItem key={crypto.randomUUID()}>
            <AdderCard
              title={title}
              image={image_url}
              description={description}
              AdderExample={<AdderExample sumType={sumType}/>}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
