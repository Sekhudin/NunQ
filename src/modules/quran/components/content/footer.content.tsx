import * as config from 'configs/env.config';

const QuranFooterContent = () => {
  const date = new Date();
  const year = '@' + date.getFullYear();

  return (
    <>
      <div>Common Footer</div>
      <div className="flex items-center gap-x-1 text-xs md:text-sm">
        <span>{year}</span>
        <span className="font-semibold">{config.APP_NAME}</span>
        <span>All rights reserved</span>
      </div>
    </>
  );
};
export default QuranFooterContent;
