import { NextLinkButton } from 'packages/ui/next-link';
import { cn, Props } from 'packages/utils/cn';
import service from 'modules/quran/service/quran.service';
import helper from 'modules/quran/service/helper.service';

const SpecialSurahList = ({ className }: Props) => {
  return (
    <ul
      className={cn(
        `flex flex-wrap justify-center items-center
        gap-x-4 gap-y-2 mt-6 mb-8`,
        className
      )}>
      {service.specialSurahList.map((surah, key) => (
        <li key={key}>
          <NextLinkButton
            className={cn(`px-4 py-1 rounded-full duration-500 delay-100`)}
            variant="secondary"
            size="fit"
            href={helper.hrefSurah(surah.number)}>
            <span>{surah.name_id}</span>
          </NextLinkButton>
        </li>
      ))}
    </ul>
  );
};

export default SpecialSurahList;
