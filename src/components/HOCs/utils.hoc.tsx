import { Fragment } from 'react';
import { NextImage, NextImageAlt, NextImageSrc } from 'packages/ui/next-image';
import { cn, Children, PropsFrom, JSXComponent } from 'packages/utils/cn';

const Child = (children: Children) => {
  const Content = () => <>{children}</>;
  return Content;
};

const Childs = (...childrens: Children[]) => {
  const Content = () => (
    <>
      {childrens.map((children, key) => (
        <Fragment key={key}>{children}</Fragment>
      ))}
    </>
  );
  return Content;
};

const ImageHOC = (baseClassName: string) => {
  const HOC = (asSrc: NextImageSrc, asAlt: NextImageAlt) => {
    const Component = ({
      className,
      src = asSrc,
      alt = asAlt,
      ...props
    }: PropsFrom<typeof NextImage>) => (
      <NextImage className={cn(baseClassName, className)} src={src} alt={alt} {...props} />
    );
    return Component as JSXComponent;
  };
  return HOC;
};

export { Child, Childs, ImageHOC };
