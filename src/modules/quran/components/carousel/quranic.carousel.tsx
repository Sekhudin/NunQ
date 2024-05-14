import { Card, CardContent } from 'packages/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from 'packages/ui/carousel';
import { cn, Props } from 'packages/utils/cn';

const QuranicCarousel = ({ className }: Props) => {
  return (
    <section className={cn(`relative pt-6 md:pt-8`, className)}>
      <Carousel className="w-full h-fit">
        <CarouselContent className="h-44">
          {[1, 2, 3, 4, 5].map((value, key) => (
            <CarouselItem className="h-full" key={key}>
              <div
                className={`size-full flex justify-center items-center
              bg-zinc-200/50 dark:bg-zinc-800/50 rounded-xl`}>
                <span className="text-xl font-semibold px-4 py-2 bg-zinc-100 dark:bg-zinc-900 rounded-xl">
                  {value}
                </span>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className='flex justify-center py-1'>sekhudin</div>
    </section>
  );
};

export default QuranicCarousel;
