import { cn, PropsHTML } from 'packages/utils/cn';

const ContainerLoading = ({ className, children, ...props }: PropsHTML<HTMLDivElement>) => {
  return (
    <div className={cn(`absolute inset-0 bg-transparent`)}>
      <div
        className={cn(
          `absolute size-20 top-[30%] right-[50%] -translate-x-[-50%] -translate-y-[50%]
          flex flex-col justify-center items-center text-center gap-4 p-4`,
          className
        )}
        {...props}>
        {children}
      </div>
    </div>
  );
};

export default ContainerLoading;
