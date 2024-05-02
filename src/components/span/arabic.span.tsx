import React from 'react';
import { cn } from 'packages/utils/cn';
import useQuranFontStore from 'stores/quran-settings.store';

const ArabicSpan = React.forwardRef<HTMLSpanElement, React.HTMLAttributes<HTMLSpanElement>>(
  ({ className, ...props }, ref) => {
    const arabic = useQuranFontStore((state) => state.arabicFont);

    return (
      <span
        ref={ref}
        className={cn(``, className, arabic.family.className)}
        style={{ fontSize: `${arabic.size}px` }}
        {...props}>
        {props.children}
      </span>
    );
  }
);
ArabicSpan.displayName = 'ArabicSpan';
export default ArabicSpan;
