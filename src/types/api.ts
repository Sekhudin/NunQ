import type { NextResponse } from 'next/server';

export interface HttpResponse<
  T extends Record<string, any> | null = Record<string, any>,
  E extends string[] | null = string[]
> {
  code: number;
  message: string;
  data: T;
  errors: E;
}

export type ApiHandler<T extends string | null> = (
  req: Request,
  extra: { params: T extends string ? Record<T, string> : undefined }
) => Promise<NextResponse<HttpResponse<Record<string, any> | null, string[] | null>>>;

export type CorsOptions = {
  allowedMethods: string[];
  allowedOrigins: string[];
  allowedHeaders: string[];
  exposedHeaders: string[];
  maxAge?: number;
  credentials: boolean;
};
