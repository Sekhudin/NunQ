import { HeaderMain, ContentMain, FooterMain } from 'components/HOCs/container.hoc';
import { ScrollArea } from 'packages/ui/scroll-area';
import type { NextLayoutProps } from 'types/global';
import QuranHeaderContent from './components/content/header.content';
import QuranFooterContent from './components/content/footer.content';

const QuranLayout = ({ children }: NextLayoutProps) => {
  const HeaderContent = HeaderMain(<QuranHeaderContent />);
  const MainContent = ContentMain(children);
  const FooterContent = FooterMain(<QuranFooterContent />);

  return (
    <ScrollArea className="h-dvh" type="hover">
      <header>
        <HeaderContent />
      </header>

      <main>
        <MainContent />
      </main>

      <footer>
        <FooterContent />
      </footer>
    </ScrollArea>
  );
};

export default QuranLayout;
