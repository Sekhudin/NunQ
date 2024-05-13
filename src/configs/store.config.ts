import { ArabicBodyName, arabicBody } from 'packages/font/arabic.font';

export enum STORE_NAME {
  QURAN_SEARCHES = 'QURAN_SEARCHES',
}

export enum MAX {
  QURAN_SEARCHES_RECENTS = 3,
}

export enum TRANSLATION {
  ID = 'id',
  EN = 'en',
}
export const translations = Object.values(TRANSLATION);

export enum QORI {
  'Mishari Alafasy' = '01',
  'Abdul Basit' = '02',
}
export type QoriName = keyof typeof QORI;
export const qoriNames: QoriName[] = Object.keys(QORI) as QoriName[];

export const FONT_ARABIC = arabicBody;
export type FontArabicName = ArabicBodyName;
export const fontArabicNames: FontArabicName[] = Object.keys(FONT_ARABIC) as FontArabicName[];
