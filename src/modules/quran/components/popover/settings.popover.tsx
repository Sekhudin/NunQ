import { Popover, PopoverTrigger, PopoverContent } from 'packages/ui/popover';
import { cn, Props, PropsFrom, PickPropsFrom, WithChildren } from 'packages/utils/cn';

const SettingsPopover = ({
  className,
  children,
  modal,
  ...props
}: Props<PropsFrom<typeof PopoverContent, WithChildren>> &
  PickPropsFrom<typeof Popover, 'modal'>) => {
  return (
    <Popover modal={modal}>
      <PopoverTrigger asChild>{children}</PopoverTrigger>
      <PopoverContent className={cn(``, className)} {...props}>
        Content
      </PopoverContent>
    </Popover>
  );
};

export default SettingsPopover;
