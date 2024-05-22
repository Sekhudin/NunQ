import { cn, cva, Props, VariantProps } from 'packages/utils/cn';

export type SkeletonVariant = VariantProps<typeof skeletonVariant>;
const skeletonVariant = cva(
  'w-28 h-fit animate-pulse bg-zinc-200/80 dark:bg-zinc-700/30 text-transparent select-none',
  {
    variants: {
      size: {
        base: 'text-base',
        xs: 'text-xs',
        sm: 'text-sm',
        lg: 'text-lg',
        xl: 'text-xl',
        h1: 'text-3xl lg:text-4xl font-bold',
        h2: 'text-2xl font-semibold',
      },
      rounded: {
        rounded: 'rounded',
        sm: 'rounded-sm',
        md: 'rounded-md',
        lg: 'rounded-lg',
        xl: 'rounded-xl',
        full: 'rounded-full',
      },
    },
    defaultVariants: {
      size: 'sm',
      rounded: 'md',
    },
  }
);

function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'animate-pulse rounded-md bg-zinc-200/80 dark:bg-zinc-700/30 select-none',
        className
      )}
      {...props}
    />
  );
}

function SkeletonText({
  className,
  size,
  rounded,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement> & SkeletonVariant) {
  return (
    <p className={cn(skeletonVariant({ size, rounded, className }))} {...props}>
      x
    </p>
  );
}

function SkeletonParagraph({
  className,
  diffLast,
  childClassName,
  lastClassName,
  n,
  ...props
}: Props<
  SkeletonVariant & { n: number; diffLast?: boolean } & Partial<
      Record<'childClassName' | 'lastClassName', string>
    >
>) {
  return (
    <div className={cn('flex flex-col gap-y-2', className)}>
      {Array.from({ length: n }).map((_, key) => (
        <SkeletonText className={cn('w-full', childClassName)} key={key} {...props} />
      ))}
      {diffLast && (
        <SkeletonText className={cn('w-[40%]', childClassName, lastClassName)} {...props} />
      )}
    </div>
  );
}

export { Skeleton, SkeletonText, SkeletonParagraph };
