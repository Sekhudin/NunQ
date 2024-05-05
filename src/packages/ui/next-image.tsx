import Image from 'next/image';
import { cn, PropsFrom } from 'packages/utils/cn';

export type NextImageSrc = PropsFrom<typeof Image>['src'];
export type NextImageAlt = PropsFrom<typeof Image>['alt'];
export type NextImageCompoentn = typeof Image;
const NextImage = ({ className, alt, ...props }: PropsFrom<typeof Image>) => (
  <span className={cn(`relative size-10 overflow-hidden`, className)}>
    <Image className={''} alt={alt} loading="lazy" fill {...props} />
  </span>
);

export { NextImage };
