import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
export type { Props, Children, WithChildren, OmitChildren } from 'types/global';
export type {
  WithHooks,
  WithStores,
  Dependencies,
  ComponentDependencies,
} from 'types/dependencies';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export { cn };
