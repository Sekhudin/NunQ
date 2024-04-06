import { type NextPage } from 'next';

export type NextLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export type NextPageComponent<T> = NextPage<T>;

export type NextPageParams<T extends string = string> = {
  params: Record<T, string>;
};

export type NextPageSearchParams<T extends string = string> = {
  searchParams: Record<T, string | string[] | undefined>;
};

export interface NextPageProps<T = Record<string, string>> {
  params: T;
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
}
