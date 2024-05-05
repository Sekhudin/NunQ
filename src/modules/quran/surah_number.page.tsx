import Navigation from './components/navigation/quran_surah.navigation';
import { NextLinkButton } from 'packages/ui/next-link';
import type { PageParams } from 'types/global';

const Page = ({ params }: PageParams<'surah_number'>) => {
  return (
    <>
      <Navigation />
      <div className="flex flex-col gap-8">
        <NextLinkButton href="/quran/1" variant={'default'}>
          default
        </NextLinkButton>
        <NextLinkButton href="/quran/1" variant={'destructive'}>
          desctructive
        </NextLinkButton>
        <NextLinkButton href="/quran/1" variant={'secondary'}>
          secondary
        </NextLinkButton>
        <NextLinkButton href="/quran/1" variant={'outline'}>
          outline
        </NextLinkButton>
        <NextLinkButton href="/quran/1" variant={'ghost'}>
          ghost
        </NextLinkButton>
        <NextLinkButton href="/quran/1" variant={'plain'}>
          plain
        </NextLinkButton>
        <NextLinkButton href="/quran/1" variant={'link'}>
          link
        </NextLinkButton>
      </div>
    </>
  );
};

export default Page;
