import { HeaderMain, ContentMain, FooterMain } from 'components/hoc/container.hoc';
import { ScrollArea } from 'packages/ui/scroll-area';
import type { NextLayoutProps } from 'types/global';
import QuranHeaderContent from './components/content/header.content';
import QuranFooterContent from './components/content/footer.content';

const QuranLayout = ({ children }: NextLayoutProps) => {
  const HeaderContent = HeaderMain(<QuranHeaderContent />);
  const FooterContent = FooterMain(<QuranFooterContent />);
  const MainContent = ContentMain(children);

  return (
    <ScrollArea className="h-dvh" type="hover">
      <header>
        <HeaderContent className="flex" />
      </header>
      <main>
        <MainContent className="min-h-screen" />
      </main>
      <footer>
        <FooterContent />
      </footer>
    </ScrollArea>
  );
};

export default QuranLayout;
