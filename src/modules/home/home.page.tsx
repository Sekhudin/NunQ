import { NextLinkButton } from 'packages/ui/next-link';
import ThemeToggle from 'components/toggles/theme.toggle';

const SearchCommand = () => {
  return (
    <div className="flex flex-col gap-y-4 p-12">
      <ThemeToggle />
      <NextLinkButton variant="default" href="/">
        default
      </NextLinkButton>
      <NextLinkButton variant="destructive" href="/">
        destructive
      </NextLinkButton>
      <NextLinkButton variant="secondary" href="/">
        secondary
      </NextLinkButton>
      <NextLinkButton variant="outline" href="/">
        outline
      </NextLinkButton>
      <NextLinkButton variant="ghost" href="/">
        ghost
      </NextLinkButton>
      <NextLinkButton variant="ghost2" href="/">
        ghost2
      </NextLinkButton>
      <NextLinkButton variant="plain" href="/">
        plain
      </NextLinkButton>
      <NextLinkButton variant="link" href="/">
        link
      </NextLinkButton>
      <NextLinkButton variant="link2" href="/">
        link2
      </NextLinkButton>
    </div>
  );
};

export default SearchCommand;
