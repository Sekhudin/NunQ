import { Popover, PopoverTrigger, PopoverContent } from 'packages/ui/popover';
import { cn, Props, PropsFrom, WithChildren } from 'packages/utils/cn';

const SettingsPopover = ({
  className,
  children,
  ...props
}: Props<WithChildren & PropsFrom<typeof PopoverContent>>) => {
  return (
    <Popover>
      <PopoverTrigger asChild>{children}</PopoverTrigger>
      <PopoverContent className={cn(``, className)} {...props}>
        Content
      </PopoverContent>
    </Popover>
  );
};

export default SettingsPopover;
