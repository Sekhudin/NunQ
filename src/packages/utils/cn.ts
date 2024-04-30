import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
export type { PropsWithChildren, PropsWithClassName, Children } from 'types/global';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export { cn };
