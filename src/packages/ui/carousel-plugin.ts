import _Autoplay from 'embla-carousel-autoplay';

export type AutoplayOptions = Partial<{
  delay: number;
  jump: boolean;
  playOnInit: boolean;
  stopOnFocusIn: boolean;
  stopOnInteraction: boolean;
  stopOnMouseEnter: boolean;
  stopOnLastSnap: boolean;
  rootNode: ((emblaRoot: HTMLElement) => HTMLElement | null) | null;
}>;

export const Autoplay = (options: AutoplayOptions) => _Autoplay(options);
