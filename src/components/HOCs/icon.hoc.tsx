import React from 'react';
import type { LucideIcon } from 'lucide-react';
import { cn } from 'packages/utils/cn';

const IconHOC = (baseClassName: string) => {
  const HOC = (IconComponent: LucideIcon) => {
    const Component = ({ className, ...props }: React.ComponentProps<LucideIcon>) => (
      <IconComponent
        className={cn(`stroke-zinc-500 dark:stroke-zinc-400`, baseClassName, className)}
        {...props}
      />
    );
    return Component;
  };
  return HOC;
};

const base = `stroke-zinc-600 dark:stroke-primary group-hover:stroke-primary dark:group-hover:fill-primary/20`;
const RoundedIconXS = IconHOC(`size-4 rounded-full ${base}`);
const RoundedIconSM = IconHOC(`size-4 sm:size-5 rounded-full ${base}`);
const RoundedIconMD = IconHOC(`size-6 sm:size-7 rounded-full ${base}`);
const RoundedIconLG = IconHOC(`size-8 sm:size-9 rounded-full ${base}`);

const plain = ``;
const RoundedPlainIconXS = IconHOC(`size-4 rounded-full ${plain}`);
const RoundedPlainIconSM = IconHOC(`size-4 sm:size-5 rounded-full ${plain}`);
const RoundedPlainIconMD = IconHOC(`size-6 sm:size-7 rounded-full ${plain}`);
const RoundedPlainIconLG = IconHOC(`size-8 sm:size-9 rounded-full ${plain}`);

const PlainIconSM = IconHOC(`size-5 pointer-events-none p-0.5`);
const CommandIconSM = IconHOC(`size-5 pointer-events-none rounded
border-[1.5px] border-zinc-300 dark:border-zinc-600 p-0.5`);
const RatingOnIconSM = IconHOC(`size-5 stroke-yellow-500 dark:stroke-yellow-500 fill-yellow-500`);
const RatingOffIconSM = IconHOC(`size-5 stroke-zinc-400 hover:fill-yellow-500
hover:stroke-yellow-500 dark:hover:stroke-yellow-500 cursor-pointer`);
const RemoveIconSM = IconHOC(`size-5 stroke-zinc-400 hover:stroke-pink-500
dark:hover:stroke-pink-500 cursor-pointer`);

export {
  IconHOC,
  RoundedIconXS,
  RoundedIconSM,
  RoundedIconMD,
  RoundedIconLG,
  RoundedPlainIconXS,
  RoundedPlainIconSM,
  RoundedPlainIconMD,
  RoundedPlainIconLG,
  PlainIconSM,
  CommandIconSM,
  RatingOnIconSM,
  RatingOffIconSM,
  RemoveIconSM,
};
