import ThemeToggle from 'components/toggles/theme.toggle';
import MainAnchor from 'components/anchors/main.anchor';
import SearchCommand from '../command/search.command';

const QuranHeaderContent = () => {
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
export default QuranHeaderContent;
