'use client';
import * as React from 'react';
import { Skeleton } from 'packages/ui/skeleton';
import { containerClass } from 'components/HOCs/container.hoc';
import { Carousel, CarouselContent, CarouselItem, CarouselApi } from 'packages/ui/carousel';
import { Autoplay, AutoplayOptions } from 'packages/ui/carousel-plugin';
import { cn, Props } from 'packages/utils/cn';
import useUpdated from 'packages/hooks/use-updated';

const playOptions: AutoplayOptions = {
  delay: 2000,
  jump: true,
  stopOnInteraction: true,
  stopOnFocusIn: false,
};

const QuranicCarousel = ({ className }: Props) => {
  const slides = [1, 2, 3, 4];
  const slidesIndexes = Object.keys(slides);
  const [current, setCurrent] = React.useState(0);
  const [api, setApi] = React.useState<CarouselApi>();
  const plugin = React.useRef(Autoplay(playOptions));

  useUpdated(() => {
    if (!api) return;

    const handler = (e: CarouselApi) => {
      const currentSlide = api.selectedScrollSnap();
      setCurrent(currentSlide);
    };

    api.on('select', handler);
    return () => {
      api.off('select', handler);
    };
  }, [api]);

  return (
    <section className={cn(`relative pt-6 md:pt-8`, containerClass, className)}>
      <Carousel
        className="w-full h-fit"
        setApi={setApi}
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={() => {
          plugin.current.play(true);
        }}>
        <CarouselContent className="h-44">
          {slides.map((value, key) => (
            <CarouselItem className="h-full" key={key}>
              <div
                className={`size-full flex justify-center items-center
              bg-zinc-200/50 dark:bg-zinc-800/50 rounded-xl text-lg font-semibold`}>
                {value}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className="absolute z-10 bottom-0 left-[50%] -translate-x-[50%]">
        <div className="flex justify-center items-center gap-x-2 py-2">
          {slidesIndexes.map((key, index) => (
            <span
              key={key}
              className={cn(
                'size-2 rounded-full',
                index === current
                  ? 'size-2.5 bg-primary dark:bg-primary/80'
                  : 'bg-white/50 dark:bg-white/20'
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export const QuranicCarouselSkeleton = () => (
  <div className={cn(containerClass, `pt-6 md:pt-8`)}>
    <Skeleton className="h-44 w-full rounded-xl" />
  </div>
);

export default QuranicCarousel;
