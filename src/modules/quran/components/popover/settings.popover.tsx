'use client';
import { Button } from 'packages/ui/button';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectItem,
} from 'packages/ui/select';
import { Slider } from 'packages/ui/slider';
import { Switch } from 'packages/ui/switch';
import { Separator } from 'packages/ui/separator';
import { ToggleGroup, ToggleGroupItem } from 'packages/ui/toggle-group';
import { Popover, PopoverTrigger, PopoverContent } from 'packages/ui/popover';
import { cn, Props, PropsFrom, PickPropsFrom, WithChildren } from 'packages/utils/cn';
import { translations, qoriNames, fontArabicNames } from 'configs/store.config';
import useQuranSettingsStore from 'stores/quran-settings.store';

const SettingsPopover = ({
  className,
  children,
  modal,
  ...props
}: Props<PropsFrom<typeof PopoverContent, WithChildren>> &
  PickPropsFrom<typeof Popover, 'modal'>) => {
  const settingsStore = useQuranSettingsStore((store) => store);

  return (
    <Popover modal={modal}>
      <PopoverTrigger asChild>{children}</PopoverTrigger>
      <PopoverContent className={cn(`min-w-64 md:min-w-80 p-4`, className)} {...props}>
        <span className="text-lg md:text-xl font-semibold">Pengaturan</span>
        <Separator className="my-2" />

        <ul className={`flex flex-col gap-y-4`}>
          <li className="flex flex-col gap-y-1">
            <span>Ukuran Font</span>
            <span className="flex flex-grow items-center gap-x-2">
              <Slider
                className="cursor-pointer"
                value={[settingsStore.arabicFont.size]}
                max={100}
                step={2}
                onValueChange={settingsStore.setArabicFontSize}
              />
              <span className="w-2/12 text-right text-xs">
                {`${settingsStore.arabicFont.size}px`}
              </span>
            </span>
          </li>

          <li className="flex flex-col gap-y-1">
            <span>Jenis Font</span>
            <Select
              value={settingsStore.arabicFont.face}
              onValueChange={settingsStore.setArabicFontFamily}>
              <SelectTrigger className="capitalize">
                <SelectValue placeholder={settingsStore.arabicFont.face} />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Font</SelectLabel>
                  {fontArabicNames.map((fontName, key) => (
                    <SelectItem className={`capitalize`} key={key} value={fontName}>
                      {fontName}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </li>

          <li className="flex justify-between items-center">
            <span>Teks Latin</span>
            <Switch
              checked={settingsStore.showLatin}
              onCheckedChange={settingsStore.setShowLatin}
            />
          </li>
          <li className="flex justify-between items-center">
            <span>Teks Terjemah</span>
            <Switch
              checked={settingsStore.showTranslation}
              onCheckedChange={settingsStore.setShowTranslation}
            />
          </li>

          <li className="flex flex-col gap-y-1">
            <span>Bahasa Terjemah</span>
            <ToggleGroup
              className="justify-start"
              type="single"
              value={settingsStore.translation}
              onValueChange={settingsStore.setTranslation}>
              {translations.map((lang, key) => (
                <ToggleGroupItem
                  className="text-xs uppercase px-2 py-1.5"
                  key={key}
                  value={lang}
                  variant={'outline'}
                  size={'none'}
                  disabled={lang !== 'id'}>
                  {lang}
                </ToggleGroupItem>
              ))}
            </ToggleGroup>
          </li>

          <li className="flex flex-col gap-y-1">
            <span>Pilih Qori</span>
            <Select value={settingsStore.qori} onValueChange={settingsStore.setQori}>
              <SelectTrigger className="">
                <SelectValue placeholder={settingsStore.qori} />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Qori</SelectLabel>
                  {qoriNames.map((qori, key) => (
                    <SelectItem className={``} key={key} value={qori}>
                      {qori}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </li>
        </ul>

        <span className="flex justify-end mt-4">
          <Button variant={'secondary'} size={'sm'} onClick={settingsStore.reset}>
            Reset
          </Button>
        </span>
      </PopoverContent>
    </Popover>
  );
};

export default SettingsPopover;
