'use client';
import InternalServerError from './500.error';

const RootError = (props: any) => {
  return (
    <html>
      <body>
        <InternalServerError {...props} />
      </body>
    </html>
  );
};

export default RootError;
