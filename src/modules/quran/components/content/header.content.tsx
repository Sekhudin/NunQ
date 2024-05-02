import ThemeToggle from 'components/toggle/theme.toggle';
import MainAnchor from 'components/anchor/main.anchor';
import { Props } from 'packages/utils/cn';
import SearchCommand from '../command/search.command';
import { headerDependencies } from './content.dependencies';

const { hooks, stores } = headerDependencies;
const QuranHeaderContent = ({ className }: Props) => {
  return (
    <>
      <div>
        <MainAnchor />
      </div>
      <div className="flex justify-center items-center space-x-2">
        <SearchCommand
          hooks={{ useMounted: hooks.useMounted }}
          stores={{ useQuranSearchesStore: stores.useQuranSearchesStore }}
        />
        <ThemeToggle hooks={{ useTheme: hooks.useTheme }} />
      </div>
    </>
  );
};
export default QuranHeaderContent;
