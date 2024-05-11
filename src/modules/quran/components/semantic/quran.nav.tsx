import { NavItem, NavIconItem } from 'components/HOCs/navigation-item.hoc';
import { containerClass } from 'components/HOCs/container.hoc';
import { QuranIconPNG, PrayingIconPNG, TasbihIconPNG, PoleIconPNG } from 'packages/public/png';
import { cn, Props } from 'packages/utils/cn';

const AlQuranNavItem = NavItem(NavIconItem(QuranIconPNG, 'al-quran'), 'Al-Quran');
const YasinTahlilNavItem = NavItem(NavIconItem(PrayingIconPNG, 'yasin & tahlil'), 'Yasin & Tahlil');
const WiridDoaNavItem = NavItem(NavIconItem(TasbihIconPNG, 'wirid & doa'), 'Wirid & doa');
const MaulidNavItem = NavItem(NavIconItem(PoleIconPNG, 'maulid'), 'Maulid');
const QuranNavigation = ({ className }: Props) => {
  return (
    <nav className={cn(`bg_navigation sticky top-0`, className)}>
      <ul
        className={cn(`flex items-center justify-around py-4 md:py-6 rounded-xl`, containerClass)}>
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

export default QuranNavigation;
