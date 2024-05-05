import { NextLink } from 'packages/ui/next-link';
import { cn, Children, JSXComponent, OmitChildren } from 'packages/utils/cn';
import { ImageHOC } from './utils.hoc';

const NavItemHOC = (baseClassName: string, bgIconClassName?: string) => {
  const HOC = (IconComp: JSXComponent, text: Children) => {
    const center = 'flex justify-center items-center';
    baseClassName = cn('p-1.5', center, baseClassName);
    const Component = ({
      className,
      ...props
    }: OmitChildren<React.ComponentProps<typeof NextLink>>) => (
      <NextLink className={cn(`font-semibold rounded-md group`, baseClassName)} {...props}>
        <span>
          <span className={cn(center, 'relative')}>
            {bgIconClassName && (
              <span
                className={cn(
                  `absolute bg-zinc-300 dark:bg-primary/30 rounded-full`,
                  bgIconClassName
                )}
              />
            )}
            <IconComp />
          </span>
          <span
            className={cn(
              `text-xs md:text-sm mt-1`,
              center,
              `${props.disabled ? '' : 'group-hover:text-primary'}`
            )}>
            {text}
          </span>
        </span>
      </NextLink>
    );
    return Component;
  };

  return HOC;
};

const NavItem = NavItemHOC(`h-fit`, `size-9 md:size-11`);
const NavIconItem = ImageHOC(`size-8 md:size-10`);

export { NavItemHOC, NavItem, NavIconItem };
