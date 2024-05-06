import { NavItem, NavIconItem } from 'components/HOCs/navigation-item.hoc';
import { cn, Props } from 'packages/utils/cn';
import { QuranIconPNG, PrayingIconPNG, TasbihIconPNG, PoleIconPNG } from 'packages/public/png';

const AlQuranNavItem = NavItem(NavIconItem(QuranIconPNG, 'al-quran'), 'Al-Quran');
const YasinTahlilNavItem = NavItem(NavIconItem(PrayingIconPNG, 'yasin & tahlil'), 'Yasin & Tahlil');
const WiridDoaNavItem = NavItem(NavIconItem(TasbihIconPNG, 'wirid & doa'), 'Wirid & doa');
const MaulidNavItem = NavItem(NavIconItem(PoleIconPNG, 'maulid'), 'Maulid');
const QuranNavigation = ({ className }: Props) => {
  return (
    <div className="bg_main sticky top-0 pt-4 pb-2">
      <div
        className={cn(
          `bg_background flex items-center justify-around py-1 md:py-2 rounded-xl`,
          className
        )}>
        <AlQuranNavItem href="/quran" />
        <YasinTahlilNavItem href="/tahlil" disabled />
        <WiridDoaNavItem href="/doa" disabled />
        <MaulidNavItem href="/maulid" disabled />
      </div>
    </div>
  );
};

export default QuranNavigation;
