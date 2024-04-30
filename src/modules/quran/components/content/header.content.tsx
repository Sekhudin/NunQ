import ThemeToggle from 'components/toggle/theme.toggle';
import MainAnchor from 'components/anchor/main.anchor';
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
