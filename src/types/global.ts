import type { NextResponse } from 'next/server';
import React from 'react';

export type Props<P = unknown> = P & { className?: string };
export type PropsHTML<T extends unknown> = React.HTMLAttributes<T>;
export type PropsFrom<
  T extends keyof JSX.IntrinsicElements | React.JSXElementConstructor<any>,
  P extends Record<string, any> = {}
> = React.ComponentProps<T> & P;
export type JSXComponent<P = unknown> = (p: Props<P>) => React.JSX.Element;

export type Children = React.ReactNode;

export type WithChildren = { children: React.ReactNode };
export type OmitChildren<T extends Record<string, any>> = Omit<T, 'children'>;
export type WithParams<T extends string = string> = {
  params: Record<T, string>;
};

export type NextLayoutProps<T extends string | null = null> = T extends string
  ? Readonly<Record<'children' | T, Children>>
  : Readonly<Record<'children', Children>>;

export interface NextPageProps<T extends string, S extends string = string> {
  params: Record<T, string>;
  searchParams: Record<S, string>;
}

export type PageParams<T extends string = string> = {
  params: Record<T, string>;
};

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
