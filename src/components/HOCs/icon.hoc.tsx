import React from 'react';
import type { LucideIcon } from 'lucide-react';
import { cn } from 'packages/utils/cn';

const size = {
  xs: 'size-4',
  sm: 'size-5',
  md: 'size-6',
};

const dynamicSize = {
  xs: 'sm:size-5',
  sm: 'sm:size-6',
  md: 'sm:size-7',
};

const strokeBase = `stroke-zinc-600 dark:stroke-zinc-400`;
const variantType = {
  default: strokeBase,
  hoverPrimary: `${strokeBase} hover:stroke-primary group-hover:stroke-primary`,
  primary: `stroke-primary`,
  success: `stroke-green-600 dark:stroke-green-600`,
  disabled: `stroke-zinc-400 dark:stroke-zinc-600`,
  ratingOn: `stroke-yellow-500 dark:stroke-yellow-500 fill-yellow-500`,
  ratingOff: `hover:stroke-yellow-500 hover:fill-yellow-500`,
  remove: `stroke-zinc-400 hover:stroke-pink-500 dark:hover:stroke-pink-500 cursor-pointer`,
};

type Variant = keyof typeof variantType;

const IconHOC = (baseClassName: string) => {
  const HOC = (IconComponent: LucideIcon, variant: Variant = 'default') => {
    const Component = ({ className, ...props }: React.ComponentProps<LucideIcon>) => (
      <IconComponent className={cn(baseClassName, variantType[variant], className)} {...props} />
    );
    return Component;
  };
  return HOC;
};

const IconXS = IconHOC(size.xs);
const IconSM = IconHOC(size.sm);
const IconMD = IconHOC(size.md);

const DynamicIconXS = IconHOC(cn(size.xs, dynamicSize.xs));
const DynamicIconSM = IconHOC(cn(size.sm, dynamicSize.sm));
const DynamicIconMD = IconHOC(cn(size.md, dynamicSize.md));

const IconButton = IconSM;
const DynamicIconButton = IconHOC(cn(size.md, `sm:${size.sm}`));

export {
  IconXS,
  IconSM,
  IconMD,
  IconHOC,
  DynamicIconXS,
  DynamicIconSM,
  DynamicIconMD,
  IconButton,
  DynamicIconButton,
};
