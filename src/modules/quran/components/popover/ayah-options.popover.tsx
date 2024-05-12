import { CirclePlay, Bookmark, Copy, MessageSquare, CheckCheck } from 'lucide-react';
import { IconXS } from 'components/HOCs/icon.hoc';
import { Button } from 'packages/ui/button';
import { Popover, PopoverTrigger, PopoverContent } from 'packages/ui/popover';
import { cn, Props, PropsFrom, PickPropsFrom, WithChildren } from 'packages/utils/cn';
import type { SurahVerse } from 'packages/quran-pack/quran.types';
import useClipboard from 'packages/hooks/use-clipboard';

const PlayIcon = IconXS(CirclePlay, 'hoverPrimary');
const BookmarkIcon = IconXS(Bookmark, 'hoverPrimary');
const CopyIcon = IconXS(Copy, 'hoverPrimary');
const CopiedIcon = IconXS(CheckCheck, 'success');
const TafsirIcon = IconXS(MessageSquare, 'hoverPrimary');

const PopoverItem = ({ className, children, ...props }: PropsFrom<typeof Button>) => (
  <Button
    className={cn(
      `size-full flex justify-start font-light gap-x-2 px-2 pr-2 py-1 rounded group`,
      className
    )}
    variant={'ghost'}
    {...props}>
    {children}
  </Button>
);

const SettingsPopover = ({
  className,
  children,
  modal,
  value,
  ...props
}: Props<PropsFrom<typeof PopoverContent, WithChildren & { value: SurahVerse }>> &
  PickPropsFrom<typeof Popover, 'modal'>) => {
  const [isCopied, copyHandler] = useClipboard(value.arabic);

  return (
    <Popover modal={modal}>
      <PopoverTrigger asChild>{children}</PopoverTrigger>
      <PopoverContent
        className={cn(`min-w-44 w-fit rounded-xl px-1 py-2 shadow-none`, className)}
        {...props}>
        <ul className="grid grid-rows-4 gap-y-1">
          <li>
            <PopoverItem>
              <PlayIcon />
              <span>Putar Ayat</span>
            </PopoverItem>
          </li>
          <li>
            <PopoverItem>
              <BookmarkIcon />
              <span>Tandai Terakhir Baca</span>
            </PopoverItem>
          </li>
          <li>
            <PopoverItem>
              <TafsirIcon />
              <span>Lihat Tafsir</span>
            </PopoverItem>
          </li>
          <li>
            <PopoverItem onClick={copyHandler}>
              {!isCopied ? <CopyIcon /> : <CopiedIcon />}
              <span>Salin Teks</span>
            </PopoverItem>
          </li>
        </ul>
      </PopoverContent>
    </Popover>
  );
};

export default SettingsPopover;
