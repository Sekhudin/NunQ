import React from 'react';
import { cn } from 'packages/utils/cn';
import useQuranSettingsStore from 'stores/quran-settings.store';

const ArabicDiv = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    const arabic = useQuranSettingsStore((state) => state.arabicFont);

    return (
      <div
        className={cn(`text-zinc-700 dark:text-zinc-400`, className, arabic.family.className)}
        ref={ref}
        style={{ fontSize: `${arabic.size}px` }}
        {...props}>
        {props.children}
      </div>
    );
  }
);
ArabicDiv.displayName = 'ArabicDiv';
export default ArabicDiv;
