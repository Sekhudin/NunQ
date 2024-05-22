import { cn, cva, Props, WithChildren, VariantProps } from 'packages/utils/cn';

const variant = cva('fixed size-fit z-50', {
  variants: {
    positionX: {
      right: 'right-[5%]',
      left: 'left-[5%]',
    },
    positionY: {
      top: 'top-[15%]',
      bottom: 'bottom-[5%]',
    },
  },
  defaultVariants: {
    positionX: 'right',
    positionY: 'bottom',
  },
});

type FloatContainerProps = Props<WithChildren & VariantProps<typeof variant>>;
const FloatContainer = ({ className, children, positionX, positionY }: FloatContainerProps) => {
  return <div className={cn(variant({ positionX, positionY, className }))}>{children}</div>;
};

export default FloatContainer;
