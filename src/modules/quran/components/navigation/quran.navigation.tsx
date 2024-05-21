import { NavItem, NavIconItem } from 'components/HOCs/navigation-item.hoc';
import { containerClass } from 'components/HOCs/container.hoc';
import { QuranIconPNG, PrayingIconPNG, TasbihIconPNG, PoleIconPNG } from 'packages/public/png';
import { cn, Props } from 'packages/utils/cn';
import { Skeleton, SkeletonText } from 'packages/ui/skeleton';

const AlQuranNavItem = NavItem(NavIconItem(QuranIconPNG, 'al-quran'), 'Al-Quran');
const YasinTahlilNavItem = NavItem(NavIconItem(PrayingIconPNG, 'yasin & tahlil'), 'Yasin & Tahlil');
const WiridDoaNavItem = NavItem(NavIconItem(TasbihIconPNG, 'wirid & doa'), 'Wirid & doa');
const MaulidNavItem = NavItem(NavIconItem(PoleIconPNG, 'maulid'), 'Maulid');
const QuranNavigation = ({ className }: Props) => {
  return (
    <nav className={cn(`bg_navigation sticky top-0`, className)}>
      <ul className={cn(`flex items-center justify-around pt-3 pb-2`, containerClass)}>
        <li>
          <AlQuranNavItem href={'/quran'} />
        </li>
        <li>
          <YasinTahlilNavItem href="/tahlil" disabled />
        </li>
        <li>
          <WiridDoaNavItem href="/doa" disabled />
        </li>
        <li>
          <MaulidNavItem href="/maulid" disabled />
        </li>
      </ul>
    </nav>
  );
};

export const QuranNavigationSkeleton = () => (
  <div className={`flex justify-around pt-3 pb-2 ${containerClass}`}>
    {Array.from({ length: 4 }).map((_, key) => (
      <div className="flex flex-col items-center gap-y-2" key={key}>
        <Skeleton className="size-12 rounded-full" />
        <SkeletonText className='w-16' rounded={'lg'} size={'sm'} />
      </div>
    ))}
  </div>
);

export default QuranNavigation;
