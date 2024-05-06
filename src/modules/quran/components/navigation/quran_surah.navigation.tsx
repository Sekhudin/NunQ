import { ArrowLeft, Settings } from 'lucide-react';
import { RoundedIconSM } from 'components/HOCs/icon.hoc';
import { containerClass } from 'components/HOCs/container.hoc';
import { NextLinkButton } from 'packages/ui/next-link';
import { Button } from 'packages/ui/button';
import { cn, Props } from 'packages/utils/cn';
import SettingsPopover from '../popover/settings.popover';

const ArrowLeftIcon = RoundedIconSM(ArrowLeft);
const SettingsIcon = RoundedIconSM(Settings);
const QuranNavigation = ({ className }: Props<{ surahNumber: number }>) => {
  return (
    <div className={cn(`bg_navigation sticky top-0 py-8`, className)}>
      <div className={cn(containerClass, `flex justify-between items-center`)}>
        <NextLinkButton
          className="items-center gap-x-2 py-1 group"
          href={'/quran'}
          variant="plain"
          size="none">
          <ArrowLeftIcon />
          <span>Daftar Surah</span>
        </NextLinkButton>

        <span>link</span>

        <SettingsPopover side="bottom" align="end">
          <Button className="flex items-center gap-x-2 py-1 group" variant="plain" size="none">
            <SettingsIcon /> <span>Pengaturan</span>
          </Button>
        </SettingsPopover>
      </div>
    </div>
  );
};

export default QuranNavigation;
