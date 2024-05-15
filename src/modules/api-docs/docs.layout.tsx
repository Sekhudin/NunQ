import CommonHeader from 'components/shared/common.header';
import CommonFooter from 'components/shared/common.footer';
import type { NextLayoutProps } from 'types/global';
import './docs.css';

const DocsLayout = ({ children }: NextLayoutProps) => {
  return (
    <>
      <CommonHeader className="fixed inset-x-0 top-0 z-50" />
      {children}
      <CommonFooter />
    </>
  );
};

const Layout = DocsLayout;
// const Layout = WithScrollArea(DocsLayout);
export default Layout;
