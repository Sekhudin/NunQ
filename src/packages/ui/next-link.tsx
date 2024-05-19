'use client';
import React from 'react';
import Link from 'next/link';
import { toast } from 'sonner';
import { cn, PropsFrom, VariantProps } from 'packages/utils/cn';
import { buttonVariants } from './button';

type onLinkClicked = React.MouseEventHandler<HTMLAnchorElement>;

const NextLink = ({
  className,
  disabled,
  ...props
}: PropsFrom<typeof Link, { disabled?: boolean }>) => {
  const onClickHandler: onLinkClicked | undefined = disabled
    ? (ev: React.MouseEvent<HTMLAnchorElement>) => {
        ev.preventDefault();
        toast.warning('Link Tidak Tersedia', { description: 'Fitur belum tersedia.' });
      }
    : props.onClick;

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
      onClick={onClickHandler}
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
  const onClickHandler: onLinkClicked | undefined = disabled
    ? (ev: React.MouseEvent<HTMLAnchorElement>) => {
        ev.preventDefault();
        toast.warning('Link Tidak Tersedia', { description: 'Fitur belum tersedia.' });
      }
    : props.onClick;

  return (
    <Link
      className={cn(
        buttonVariants({ className, variant, size }),
        disabled
          ? 'opacity-80 hover:bg-transparent group-hover:bg-transparent cursor-not-allowed'
          : ''
      )}
      onClick={onClickHandler}
      {...props}
    />
  );
};

export { NextLink, NextLinkButton };
