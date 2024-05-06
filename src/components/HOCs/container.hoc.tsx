import React from 'react';
import { cn, JSXComponent } from 'packages/utils/cn';
export { Childs } from './utils.hoc';

const ContainerHOC = (baseClassName: string) => {
  const HOC = (Content: JSXComponent) => {
    const Component = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
      <div className={cn(``, baseClassName, className)} {...props}>
        <Content />
      </div>
    );
    return Component;
  };
  return HOC;
};

const main = 'container max-w-5xl 2xl:max-w-4xl px-4';
const MainHeader = ContainerHOC(`flex justify-between items-center py-4 md:py-6 ${main}`);
const MainFooter = ContainerHOC(`flex justify-between items-center py-12 ${main}`);
const containerClassName = `min-h-dvh ${main}`;

export { ContainerHOC, MainHeader, MainFooter, containerClassName };
