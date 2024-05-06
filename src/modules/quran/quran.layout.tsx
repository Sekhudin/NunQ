import { MainHeader, MainFooter, Childs } from 'components/HOCs/container.hoc';
import { WithScrollArea } from 'components/HOCs/layout-scroll.hoc';
import type { NextLayoutProps } from 'types/global';
import QuranHeaderContent from './components/content/header.content';
import QuranFooterContent from './components/content/footer.content';

const HeaderContent = MainHeader(QuranHeaderContent);
const FooterContent = MainFooter(QuranFooterContent);
const QuranLayout = ({ children }: NextLayoutProps) => {
  return (
    <>
      <header>
        <HeaderContent />
      </header>

      <main>{children}</main>

      <footer>
        <FooterContent />
      </footer>
    </>
  );
};

const Layout = WithScrollArea(QuranLayout);
export default Layout;
