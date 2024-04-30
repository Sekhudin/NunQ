import React from 'react';
import Div from 'components/div/base.div';
import { cn, Children } from 'packages/utils/cn';

const ContainerHOC = (baseClassName: string) => {
  const HOC = (children: Children) => {
    const Component = ({ className, ...props }: React.ComponentProps<typeof Div>) => (
      <Div className={cn(``, baseClassName, className)} {...props}>
        {children}
      </Div>
    );
    return Component;
  };
  return HOC;
};

const ContentMain = ContainerHOC('min-h-dvh container px-4 py-8 max-w-5xl 2xl:max-w-4xl');
const HeaderMain = ContainerHOC(`
container p-4 max-w-5xl 2xl:max-w-4xl
flex justify-between items-center
`);
const FooterMain = ContainerHOC(`
container px-4 py-20 max-w-5xl 2xl:max-w-4xl
flex justify-between items-center
`);

export { ContainerHOC, ContentMain, HeaderMain, FooterMain };
