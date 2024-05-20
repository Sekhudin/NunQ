import { NextLinkButton } from 'packages/ui/next-link';
import { cn, Props } from 'packages/utils/cn';
import { arabicSpecial } from 'packages/font/arabic.font';
import service from 'modules/quran/service/quran.service';
import helper from 'modules/quran/service/helper.service';

const Page = ({ className }: Props) => {
  return (
    <ul className={cn(`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4`, className)}>
      {service.surahList.map(({ name_trans_id, number_of_verse, ...surah }, key) => (
        <li key={key}>
          <NextLinkButton
            className={cn(`bg_card size-full border border-transparent dark:sm:border-border
            hover:border-primary dark:hover:border-primary hover:text-zinc-800 dark:hover:text-zinc-200
            text-wrap text-base py-6 rounded-xl duration-500 delay-100 group`)}
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

            <span
              className={cn(`grow-0 text-xl`)}
              style={{
                ...arabicSpecial['surah name'].style,
              }}>
              {surah.name}
            </span>
          </NextLinkButton>
        </li>
      ))}
    </ul>
  );
};

export default Page;

// React.useEffect(() => {
//   if (surahNumber === 114 && verse === surah.numberOfVerse) return;

//   const timmer = setInterval(() => {
//     if (verse < surah.numberOfVerse) {
//       setVerse(verse + 1);
//       return;
//     }

//     if (verse === surah.numberOfVerse) {
//       setSurahNumber(surahNumber + 1);
//       setVerse(1);
//       return;
//     }
//   }, 3000);

//   return () => {
//     clearInterval(timmer);
//   };
// }, [verse]);
