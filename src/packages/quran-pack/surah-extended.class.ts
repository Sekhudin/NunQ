import * as QuranPack from 'quran-pack';
import type { SurahNumber, SurahNameID, SurahList, SurahCategory } from 'quran-pack/types';

class SurahExtended extends QuranPack.Surah {
  constructor(value: SurahNumber | SurahNameID) {
    super(value);
  }

  public info() {
    const value: SurahList[number] & Record<'isMakkiyah' | 'isMadaniyah', boolean> = {
      number: this.surahNumber,
      name: this.name,
      name_id: this.nameID,
      name_latin: this.nameLatin,
      name_trans_id: this.nameTranslateID,
      number_of_verse: this.numberOfVerse,
      category: this.category,
      isMakkiyah: this.isMakkiyah,
      isMadaniyah: this.isMadaniyah,
    };
    return value;
  }

  public details() {
    const info: SurahList[number] & Record<'isMakkiyah' | 'isMadaniyah', boolean> = {
      number: this.surahNumber,
      name: this.name,
      name_id: this.nameID,
      name_latin: this.nameLatin,
      name_trans_id: this.nameTranslateID,
      number_of_verse: this.numberOfVerse,
      category: this.category,
      isMakkiyah: this.isMakkiyah,
      isMadaniyah: this.isMadaniyah,
    };
    return { surah: this, info: this.info() };
  }

  public verses() {
    return Object.keys(this.arabics).map((verse) => Number(verse));
  }
}

export const specialSurah: SurahNameID[] = [
  'Yasin',
  'Al-Kahf',
  'Yusuf',
  'Maryam',
  'Al-Mulk',
  "Al-Waqi'ah",
  'Ar-Rahman',
];

export const makkiyah: SurahCategory = 'Makkiyah';
export const madaniyah: SurahCategory = 'Madaniyah';

export default SurahExtended;
