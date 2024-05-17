import type { CorsOptions } from 'types/api';
import { CORS } from './env.config';

const corsOptions: CorsOptions = {
  allowedMethods: CORS.allowedMethods.split(','),
  allowedOrigins: CORS.allowedOrigins.split(','),
  allowedHeaders: CORS.allowedHeaders.split(','),
  exposedHeaders: CORS.exposedHeaders.split(','),
  maxAge: CORS.maxAge,
  credentials: CORS.credentials,
};

export { corsOptions };
