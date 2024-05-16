import { ScrollArea } from 'packages/ui/scroll-area';
import { NextLayoutProps } from 'types/global';

type LayoutComponent = (props: NextLayoutProps) => React.JSX.Element;
type ScrollAreaProps = React.ComponentProps<typeof ScrollArea>;
const LayoutScrollHOC = () => {
  const HOC = (Layout: LayoutComponent, scrollAreaProps?: ScrollAreaProps) => {
    const LayoutWithScroll = (props: NextLayoutProps) => (
      <ScrollArea className="h-dvh" type="hover" {...scrollAreaProps}>
        <Layout {...props} />
      </ScrollArea>
    );
    return LayoutWithScroll;
  };
  return HOC;
};

const WithScrollArea = LayoutScrollHOC();

export { LayoutScrollHOC, WithScrollArea };
