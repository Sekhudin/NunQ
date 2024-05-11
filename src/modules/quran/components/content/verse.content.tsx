'use client';
import { MoreVertical } from 'lucide-react';
import { DynamicIconXS } from 'components/HOCs/icon.hoc';
import { Button } from 'packages/ui/button';
import { cn, Props } from 'packages/utils/cn';
import type { SurahVerse } from 'packages/quran-pack/quran.types';
import useQuranSettingsStore from 'stores/quran-settings.store';
import AyahOptionsPopover from 'modules/quran/components/popover/ayah-options.popover';

const MoreVerticalIcon = DynamicIconXS(MoreVertical);
const VerseContent = ({ className, value }: Props<{ value: SurahVerse }>) => {
  const arabic = useQuranSettingsStore((state) => state.arabicFont);

  return (
    <div className={cn(`flex gap-x-4 md:gap-x-6`, className)}>
      <span>
        <AyahOptionsPopover side="bottom" align="start">
          <Button className="p-1.5 rounded-full group" variant="ghost2" size="none">
            <MoreVerticalIcon />
          </Button>
        </AyahOptionsPopover>
      </span>

      <span className="flex-grow">
        <span
          className={cn('block text-right')}
          style={{ fontSize: `${arabic.size}px`, ...arabic.family.style }}>
          {value.arabic}
        </span>
        <span className="block text-primary font-semibold py-2">
          {value.latin}
        </span>
        <span className="block dark:font-extralight">{value.translation.id}</span>
      </span>
    </div>
  );
};

export default VerseContent;
