import type { NextLayoutProps } from 'types/global';
import FloatContainer from 'components/shared/float.container';
import ScrollTopButton from 'components/shared/scroll-top.button';
import HeaderContent from 'modules/quran/components/content/header.content';
import FooterContent from 'modules/quran/components/content/footer.content';

const Layout = ({ children }: NextLayoutProps) => {
  return (
    <>
      <header>
        <HeaderContent />
      </header>
      {children}
      <FloatContainer>
        <ScrollTopButton />
      </FloatContainer>
      <footer>
        <FooterContent />
      </footer>
    </>
  );
};

export default Layout;
