import { createMiddleware } from 'packages/server/base/middleware';

const withParams = createMiddleware((req, next) => {
  return next();
});

export default withParams;
