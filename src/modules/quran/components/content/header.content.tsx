import ThemeToggle from 'components/toggles/theme.toggle';
import MainAnchor from 'components/anchors/main.anchor';
import { MainHeader } from 'components/HOCs/container.hoc';
import SearchCommand from 'modules/quran/components/command/search.command';

const Content = () => {
  return (
    <>
      <div>
        <MainAnchor />
      </div>
      <div className="flex justify-center items-center space-x-2">
        <SearchCommand />
        <ThemeToggle />
      </div>
    </>
  );
};

const HeaderContent = MainHeader(Content);
export default HeaderContent;
