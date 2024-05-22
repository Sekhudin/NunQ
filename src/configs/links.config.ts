export type AvailableLink = {
  name: string;
  href: string;
  keywords?: string[];
};

export const availableLinks: AvailableLink[] = [
  { name: 'API Docs', href: '/docs', keywords: ['api', 'docs', 'documentation'] },
  { name: 'Quran', href: '/', keywords: ['quran', 'surah'] },
];

export enum ROUTE {
  Home = '/',
  Api = '/api',
  Docs = '/docs',
  Quran = '/',
  Surah = `/{surah_number}`,
  Tahlil = '/tahlil',
  Wirid = '/doa',
  Mawlid = '/maulid',
}

export enum API {
  Base = '/api',
  Docs = '/docs',
  Quran = '/quran',
  Surah = '/quran/{surah_number}',
}
