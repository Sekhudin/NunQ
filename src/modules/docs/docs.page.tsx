'use client';
import useLocationState from 'packages/hooks/use-location-state';
import SwaggerUI from 'swagger-ui-react';
import versionOne from './version-one';
import React from 'react';

const Page = () => {
  const loc = useLocationState();

  const specOne = React.useMemo(() => {
    return versionOne.host(loc.host).buildStringify();
  }, [loc.host]);

  return (
    <main>
      <SwaggerUI spec={specOne} />
    </main>
  );
};
export default Page;
