'use client';

import * as React from 'react';
import * as TogglePrimitive from '@radix-ui/react-toggle';
import { buttonVariants } from 'packages/ui/button';
import { cn, type VariantProps } from 'packages/utils/cn';

const extraClassName = `data-[state=on]:bg-primary data-[state=on]:hover:bg-primary
data-[state=on]:dark:hover:bg-primary data-[state=on]:text-primary-foreground
data-[disabled=true]:bg-transparent data-[disabled=true]:opacity-80 select-none`;

const Toggle = React.forwardRef<
  React.ElementRef<typeof TogglePrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root> & VariantProps<typeof buttonVariants>
>(({ className, variant, size, ...props }, ref) => (
  <TogglePrimitive.Root
    ref={ref}
    className={cn(extraClassName, '', buttonVariants({ variant, size, className }))}
    {...props}
  />
));

Toggle.displayName = TogglePrimitive.Root.displayName;

export { Toggle, extraClassName };
