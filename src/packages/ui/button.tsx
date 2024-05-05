import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';

import { cn, cva, type VariantProps } from 'packages/utils/cn';

const buttonVariants = cva(
  `inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors
  focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none
  disabled:opacity-50`,
  {
    variants: {
      variant: {
        default: 'bg-primary hover:bg-primary/90 dark:hover:bg-primary/80 text-primary-foreground',
        destructive: `bg-pink-600 dark:bg-pink-700 hover:bg-pink-600/90 dark:hover:bg-pink-700/80
        text-destructive-foreground`,
        secondary: `bg-primary/30 dark:bg-primary/15 hover:bg-primary dark:hover:bg-primary
        text-primary hover:text-primary-foreground`,
        outline: `border border-zinc-300 dark:border-zinc-800 bg-background
        hover:bg-zinc-50 dark:hover:bg-zinc-800 hover:text-accent-foreground`,
        ghost: `hover:bg-primary/30 dark:hover:bg-primary/15 hover:text-primary
        dark:hover:text-primary`,
        link: `text-primary underline-offset-4 hover:underline`,
        plain: '',
      },
      size: {
        default: 'px-4 py-2',
        sm: 'h-8 px-3 text-xs',
        lg: 'h-10 px-8 text-sm',
        icon: 'size-9 px-1.5 py-1.5',
        fit: 'size-fit px-4 py-2',
        auto: 'size-auto px-4 py-2',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp className={cn(buttonVariants({ className, variant, size }))} ref={ref} {...props} />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
