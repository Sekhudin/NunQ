import { NextLink } from 'packages/ui/next-link';
import { cn, Children, OmitChildren } from 'packages/utils/cn';

const NavigationItemHOC = (iconClassName: string, textClassName: string) => {
  const HOC = (children: Children, text: string) => {
    const Component = ({
      className,
      ...props
    }: OmitChildren<React.ComponentProps<typeof NextLink>>) => (
      <NextLink className={cn(``, className)} {...props}>
        <span className={iconClassName}>{children}</span>
        <span className={textClassName}>{text}</span>
      </NextLink>
    );
    return Component;
  };

  return HOC;
};

const QuranNavigationItem = NavigationItemHOC(``, ``);

export { NavigationItemHOC, QuranNavigationItem };
