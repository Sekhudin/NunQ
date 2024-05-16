import SwaggerUI from 'swagger-ui-react';
import v1 from './docs/v1.json';

const DocsPage = () => {
  return (
    <main>
      <SwaggerUI spec={v1} />
    </main>
  );
};
export default DocsPage;
