import { SquirrelIcon } from 'lucide-react';
import { NextLinkButton } from 'packages/ui/next-link';

const NotFound = () => {
  return (
    <div className="w-full h-96 flex items-center justify-center mt-32">
      <div className="flex flex-col items-center justify-center gap-y-3">
        <span className="flex items-center gap-x-4 text-6xl font-bold text-pink-600/50">
          <span>4</span>
          <SquirrelIcon className="w-20 h-20 stroke-pink-600/50" />
          <span>4</span>
        </span>
        <h3 className={`text-xl`}>Halaman Tidak Ditemukan</h3>
        <NextLinkButton href="/">Kembali</NextLinkButton>
      </div>
    </div>
  );
};

export default NotFound;
