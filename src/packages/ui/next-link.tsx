'use client';
import Link from 'next/link';
import { toast } from 'sonner';
import { cn, PropsFrom, VariantProps } from 'packages/utils/cn';
import { buttonVariants } from './button';

const NextLink = ({
  className,
  disabled,
  ...props
}: PropsFrom<typeof Link, { disabled?: boolean }>) => {
  const unvailableLink = (ev: React.MouseEvent<HTMLAnchorElement>) => {
    ev.preventDefault();
    toast.error('unavailable link', { description: 'Fitur belum tersedia.' });
  };

  return (
    <Link
      className={cn(
        'duration-300',
        `${
          disabled
            ? 'opacity-80 hover:bg-transparent group-hover:bg-transparent cursor-not-allowed'
            : ''
        }`,
        className
      )}
      onClick={disabled ? unvailableLink : props.onClick}
      {...props}
    />
  );
};

const NextLinkButton = ({
  className,
  variant,
  size,
  disabled,
  ...props
}: PropsFrom<typeof Link, { disabled?: boolean } & VariantProps<typeof buttonVariants>>) => {
  const unvailableLink = (ev: React.MouseEvent<HTMLAnchorElement>) => {
    ev.preventDefault();
    toast.error('unavailable link', { description: 'Fitur belum tersedia.' });
  };

  return (
    <Link
      className={cn(
        buttonVariants({ className, variant, size }),
        disabled
          ? 'opacity-80 hover:bg-transparent group-hover:bg-transparent cursor-not-allowed'
          : ''
      )}
      onClick={disabled ? unvailableLink : props.onClick}
      {...props}
    />
  );
};

export { NextLink, NextLinkButton };
