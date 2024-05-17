export type AvailableLink = {
  name: string;
  href: string;
  keywords?: string[];
};

export const availableLinks: AvailableLink[] = [
  { name: 'API Docs', href: '/docs', keywords: ['api', 'docs', 'documentation'] },
  { name: 'Quran', href: '/quran', keywords: ['quran', 'surah'] },
];
