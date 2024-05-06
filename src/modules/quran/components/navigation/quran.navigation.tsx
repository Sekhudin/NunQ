import { NavItem, NavIconItem } from 'components/HOCs/navigation-item.hoc';
import { containerClass } from 'components/HOCs/container.hoc';
import { cn, Props } from 'packages/utils/cn';
import { QuranIconPNG, PrayingIconPNG, TasbihIconPNG, PoleIconPNG } from 'packages/public/png';

const AlQuranNavItem = NavItem(NavIconItem(QuranIconPNG, 'al-quran'), 'Al-Quran');
const YasinTahlilNavItem = NavItem(NavIconItem(PrayingIconPNG, 'yasin & tahlil'), 'Yasin & Tahlil');
const WiridDoaNavItem = NavItem(NavIconItem(TasbihIconPNG, 'wirid & doa'), 'Wirid & doa');
const MaulidNavItem = NavItem(NavIconItem(PoleIconPNG, 'maulid'), 'Maulid');
const QuranNavigation = ({ className }: Props) => {
  return (
    <div className={cn(`bg_navigation sticky top-0 py-2`, className)}>
      <div
        className={cn(`flex items-center justify-around py-1 md:py-2 rounded-xl`, containerClass)}>
        <AlQuranNavItem href="/quran" />
        <YasinTahlilNavItem href="/tahlil" disabled />
        <WiridDoaNavItem href="/doa" disabled />
        <MaulidNavItem href="/maulid" disabled />
      </div>
    </div>
  );
};

export default QuranNavigation;
