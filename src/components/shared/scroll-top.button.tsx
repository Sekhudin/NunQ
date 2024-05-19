'use client';
import React from 'react';
import { ArrowUpToLine } from 'lucide-react';
import { DynamicIconSM } from 'components/HOCs/icon.hoc';
import { Button } from 'packages/ui/button';
import { cn, Props } from 'packages/utils/cn';
import useMounted from 'packages/hooks/use-mounted';

const ArrowUpToLineIcon = DynamicIconSM(ArrowUpToLine);
const ScrollTopFloatButton = ({ className }: Props) => {
  const btnRef = React.useRef<HTMLButtonElement>(null);

  const scrollTop = React.useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  useMounted(() => {
    const handler = () => {
      if (!btnRef.current) return;
      if (window.scrollY > 100) {
        btnRef.current.style.display = 'flex';
        return;
      }
      btnRef.current.style.display = 'none';
      return;
    };

    handler();
    window.addEventListener('scroll', handler);
    return () => {
      window.removeEventListener('scroll', handler);
    };
  });

  return (
    <>
      <Button
        className={cn(
          'size-10 justify-center items-center p-2 rounded-full group hidden',
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
