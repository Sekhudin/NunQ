import type { ApiHandler } from 'types/global';

type Extra = {
  params: Record<string, string>;
};
type NextFunction = () => void;
type Handler<T extends string | null> = (...v: Parameters<ApiHandler<T>>) => void;
type MiddlewareHandler = (req: Request, next: NextFunction) => void;

export const createMiddleware = (handler: MiddlewareHandler) => {
  return (next: Handler<string | null>) => (req: Request, extra: Extra) => {
    if (extra) {
      const nextHandler = () => next(req, extra);
      return handler(req, nextHandler);
    }

    const nextHandler = () => next(req, { params: {} });
    return handler(req, nextHandler);
  };
};
