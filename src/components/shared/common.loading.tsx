import { LoaderCircle } from 'lucide-react';

const CommonLoading = () => {
  return (
    <div>
      <div className="flex items-center justify-center p-6">
        <LoaderCircle className="stroke-primary animate-spin" />
      </div>
    </div>
  );
};

export const RootLoading = () => (
  <div className="min-h-dvh flex justify-center items-center">
    <CommonLoading />
  </div>
);

export default CommonLoading;
