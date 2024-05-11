import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
export type {
  JSXComponent,
  Props,
  PropsHTML,
  PropsFrom,
  PickPropsFrom,
  Children,
  WithChildren,
  OmitChildren,
  WithParams,
} from 'types/global';
export type {
  WithHooks,
  WithStores,
  Dependencies,
  ComponentDependencies,
} from 'types/dependencies';
export { cva, type VariantProps } from 'class-variance-authority';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export { cn };
