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

export default CommonLoading;
