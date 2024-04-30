import React from 'react';
import { cn } from 'packages/utils/cn';

const Div = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ children, className, ...props }, ref) => {
    return (
      <div className={cn(`text-zinc-800 dark:text-zinc-400`, className)} ref={ref} {...props}>
        {children}
      </div>
    );
  }
);
Div.displayName = 'Div';
export default Div;
