import Navigation from './components/navigation/quran_surah.navigation';
import type { PageParams } from 'types/global';

const Page = ({ params }: PageParams<'surah_number'>) => {
  return (
    <>
      <Navigation />
      <div>{params.surah_number}</div>
    </>
  );
};

export default Page;
