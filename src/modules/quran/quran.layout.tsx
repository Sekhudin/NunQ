import { WithScrollArea } from 'components/HOCs/layout-scroll.hoc';
import type { NextLayoutProps } from 'types/global';
import HeaderContent from './components/content/header.content';
import FooterContent from './components/content/footer.content';

const QuranLayout = ({ children }: NextLayoutProps) => {
  return (
    <>
      <header>
        <HeaderContent />
      </header>
      {children}
      <footer>
        <FooterContent />
      </footer>
    </>
  );
};

const Layout = QuranLayout;
// const Layout = WithScrollArea(QuranLayout);
export default Layout;
