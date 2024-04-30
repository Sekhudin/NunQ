import { LucideIcon } from 'lucide-react';
import { CommandShortcut } from 'packages/ui/command';
import { cn } from 'packages/utils/cn';

const CommandItemHOC = (
  commandCombinator: string,
  textClassName?: string,
  iconClassName?: string
) => {
  const HOC = (title: string, IconComponent?: LucideIcon, commandText?: string) => (
    <>
      {IconComponent && <IconComponent className={cn(`mr-2 h-4 w-4`, iconClassName)} />}
      <span className={cn(``, textClassName)}>{title}</span>
      {commandText && (
        <CommandShortcut className={cn(``, textClassName)}>
          {`${commandCombinator} ${commandText}`}
        </CommandShortcut>
      )}
    </>
  );
  return HOC;
};

const CommandItemCtrl = CommandItemHOC('⌘', '');
const CommandItemCtrlShift = CommandItemHOC('⌘Shift', '');
const CommandItemShift = CommandItemHOC('Shift', '');
const CommandItemAlt = CommandItemHOC('Alt', '');

export { CommandItemHOC, CommandItemCtrl, CommandItemCtrlShift, CommandItemShift, CommandItemAlt };
