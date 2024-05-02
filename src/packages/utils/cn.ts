import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
export type { Props, Children, WithChildren } from 'types/global';
export type {
  WithHooks,
  WithStore,
  Dependencies,
  ComponentDependencies,
} from 'types/dependencies';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export { cn };
