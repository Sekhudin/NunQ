import Navigation from './components/navigation/quran_surah.navigation';
import { NextLinkButton } from 'packages/ui/next-link';
import type { PageParams } from 'types/global';

const Page = ({ params }: PageParams<'surah_number'>) => {
  return (
    <>
      <Navigation />
    </>
  );
};

export default Page;
