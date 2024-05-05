import { ScrollArea } from 'packages/ui/scroll-area';
import { NextLayoutProps } from 'types/global';

const LayoutScrollHOC = (srollProps?: React.ComponentProps<typeof ScrollArea>) => {
  const HOC = (Layout: (props: NextLayoutProps) => React.JSX.Element) => {
    const LayoutWithScroll = (props: NextLayoutProps) => (
      <ScrollArea className="h-dvh" type="hover" {...srollProps}>
        <Layout {...props} />
      </ScrollArea>
    );
    return LayoutWithScroll;
  };
  return HOC;
};

const WithScrollArea = LayoutScrollHOC();

export { LayoutScrollHOC, WithScrollArea };
