import { NextResponse, type NextRequest } from 'next/server';
import { corsOptions } from 'configs/api';

export async function middleware(request: NextRequest) {
  const response = NextResponse.next();
  const origin = request.headers.get('origin') ?? '*';
  if (corsOptions.allowedOrigins.includes('*') || corsOptions.allowedOrigins.includes(origin)) {
    response.headers.set('Access-Control-Allow-Origin', origin);
  }

  response.headers.set('Access-Control-Allow-Credentials', corsOptions.credentials.toString());
  response.headers.set('Access-Control-Allow-Methods', corsOptions.allowedMethods.join(','));
  response.headers.set('Access-Control-Allow-Headers', corsOptions.allowedHeaders.join(','));
  response.headers.set('Access-Control-Expose-Headers', corsOptions.exposedHeaders.join(','));
  response.headers.set('Access-Control-Max-Age', corsOptions.maxAge?.toString() ?? '');
  return response;
}

export const config = {
  matcher: '/api/:path*',
};
