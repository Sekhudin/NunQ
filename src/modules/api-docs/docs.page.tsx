import dynamic from 'next/dynamic';
import SwaggerUI from 'swagger-ui-react';
import v1 from './docs/v1.json';

const DynamicSwaggerUI = dynamic(() => import('swagger-ui-react'), {
  ssr: false,
});

const DocsPage = (props: any) => {
  return (
    <main>
      <DynamicSwaggerUI spec={v1} />
    </main>
  );
};

export default DocsPage;
