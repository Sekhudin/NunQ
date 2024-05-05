import { NextLinkButton } from 'packages/ui/next-link';

const SearchCommand = () => {
  return (
    <div>
      <NextLinkButton href="/">default</NextLinkButton>
      <NextLinkButton href="/">desctructive</NextLinkButton>
      <NextLinkButton href="/">secondary</NextLinkButton>
      <NextLinkButton href="/">outline</NextLinkButton>
      <NextLinkButton href="/">ghost</NextLinkButton>
      <NextLinkButton href="/">plain</NextLinkButton>
      <NextLinkButton href="/">link</NextLinkButton>
    </div>
  );
};

export default SearchCommand;
