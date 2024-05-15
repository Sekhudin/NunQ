import MainAnchor from 'components/anchors/main.anchor';
import { MainHeader } from 'components/HOCs/container.hoc';
import ThemeToggle from 'components/toggles/theme.toggle';
import { cn, Props } from 'packages/utils/cn';

const Content = () => (
  <>
    <div className="">
      <MainAnchor />
    </div>

    <div>
      <ThemeToggle />
    </div>
  </>
);

const HeaderContent = MainHeader(Content);
const CommonHeader = ({ className }: Props) => (
  <header className={cn(``, className)}>
    <HeaderContent />
  </header>
);

export default CommonHeader;
