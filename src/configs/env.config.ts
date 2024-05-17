export const CORS = {
  allowedMethods: process.env.ALLOWED_METHODS || '',
  allowedOrigins: process.env.ALLOWED_ORIGIN || '',
  allowedHeaders: process.env.ALLOWED_HEADERS || '',
  exposedHeaders: process.env.EXPOSED_HEADERS || '',
  credentials: process.env.CREDENTIALS == 'true',
  maxAge: Number(process.env.MAX_AGE) || 0,
};

export const PUBLIC_APP = {
  name: process.env.NEXT_PUBLIC_APP_NAME,
};

export const PUBLIC_AUTHOR = {
  email: process.env.NEXT_PUBLIC_AUTHOR_EMAIL,
  webProfile: process.env.NEXT_PUBLIC_AUTHOR_WEB_PROFILE,
};
