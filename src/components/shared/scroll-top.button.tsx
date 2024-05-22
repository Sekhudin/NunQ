'use client';
import React from 'react';
import { ArrowUpToLine } from 'lucide-react';
import { DynamicIconMD } from 'components/HOCs/icon.hoc';
import { Button } from 'packages/ui/button';
import { cn, Props } from 'packages/utils/cn';
import useScrollListener, { MAX_SCROLL } from 'packages/hooks/use-scroll-listener';

const ArrowUpToLineIcon = DynamicIconMD(ArrowUpToLine);
const ScrollTopFloatButton = ({ className }: Props) => {
  const btnRef = React.useRef<HTMLButtonElement>(null);

  const scrollTop = React.useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  useScrollListener(({ scrollY }) => {
    if (!btnRef.current) return;
    if (scrollY > MAX_SCROLL.Y) {
      btnRef.current.style.display = 'flex';
      return;
    }
    btnRef.current.style.display = 'none';
    return;
  });

  return (
    <>
      <Button
        className={cn(
          'size-12 justify-center items-center p-2 rounded-full group hidden',
          className
        )}
        ref={btnRef}
        onClick={scrollTop}>
        <ArrowUpToLineIcon className="stroke-zinc-50 dark:stroke-zinc-100" />
      </Button>
    </>
  );
};

export default ScrollTopFloatButton;
