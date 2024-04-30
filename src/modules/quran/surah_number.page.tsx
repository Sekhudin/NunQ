import type { PageParams } from 'types/global';

const Page = ({ params }: PageParams<'surah_number'>) => {
  return (
    <div>
      <div>{params.surah_number}</div>
    </div>
  );
};

export default Page;
