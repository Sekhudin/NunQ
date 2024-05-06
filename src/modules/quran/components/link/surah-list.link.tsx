import { NextLinkButton } from 'packages/ui/next-link';
import { cn, Props } from 'packages/utils/cn';
import { amiri } from 'packages/font/arabic.font';
import service from '../../service/quran.service';
import helper from '../../service/helper.service';

const SurahListLink = ({ className }: Props) => {
  return (
    <div className={cn(`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4`, className)}>
      {service.surahList.map(({ name_trans_id, number_of_verse, ...surah }, key) => (
        <NextLinkButton
          className={cn(`bg_card border border-transparent dark:sm:border-border
          hover:border-primary dark:hover:border-primary hover:text-zinc-800 dark:hover:text-zinc-200
          flex justify-between items-center gap-x-4 px-6 py-4 size-auto
          text-wrap text-base rounded-xl duration-500 delay-100 group`)}
          key={key}
          variant={'ghost'}
          size={'auto'}
          href={helper.hrefSurah(surah.number)}>
          <span className={`grow flex items-center gap-x-4`}>
            {surah.number}
            <span className="grow flex flex-col">
              {surah.name_id}
              <span className="grow text-xs font-light">
                {`${name_trans_id} . ${number_of_verse}`}
              </span>
            </span>
          </span>

          <span className={cn(amiri.className, `grow-0 text-2xl`)}>{surah.name}</span>
        </NextLinkButton>
      ))}
    </div>
  );
};

export default SurahListLink;
