import { HeaderMain, ContentMain, FooterMain, Childs } from 'components/HOCs/container.hoc';
import { WithScrollArea } from 'components/HOCs/layout-scroll.hoc';
import type { NextLayoutProps } from 'types/global';
import QuranHeaderContent from './components/content/header.content';
import QuranFooterContent from './components/content/footer.content';

const HeaderContent = HeaderMain(QuranHeaderContent);
const FooterContent = FooterMain(QuranFooterContent);
const QuranLayout = ({ children }: NextLayoutProps) => {
  const MainContent = ContentMain(Childs(children));

  return (
    <>
      <header>
        <HeaderContent />
      </header>

      <main>
        <MainContent />
      </main>

      <footer>
        <FooterContent />
      </footer>
    </>
  );
};

const Layout = WithScrollArea(QuranLayout);
export default Layout;
