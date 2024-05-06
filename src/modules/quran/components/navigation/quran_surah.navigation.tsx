import { ArrowLeft, Settings } from 'lucide-react';
import { RoundedIconSM } from 'components/HOCs/icon.hoc';
import { NextLinkButton } from 'packages/ui/next-link';
import { Button } from 'packages/ui/button';
import { cn, Props } from 'packages/utils/cn';
import SettingsPopover from '../popover/settings.popover';

const ArrowLeftIcon = RoundedIconSM(ArrowLeft);
const SettingsIcon = RoundedIconSM(Settings);
const QuranNavigation = ({ className }: Props<{ surahNumber: number }>) => {
  return (
    <div className={cn(`flex justify-between items-center py-8`, className)}>
      <NextLinkButton
        className="items-center gap-x-2 group"
        href={'/quran'}
        variant="plain"
        size="auto">
        <ArrowLeftIcon />
        <span>Daftar Surah</span>
      </NextLinkButton>

      <span>link</span>

      <SettingsPopover side='bottom' align='end'>
        <Button className="flex items-center gap-x-2 group" variant="plain" size="auto">
          <SettingsIcon /> <span>Pengaturan</span>
        </Button>
      </SettingsPopover>
    </div>
  );
};

export default QuranNavigation;
