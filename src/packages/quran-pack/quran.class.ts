import { Surah, surahList } from 'quran-pack';
import type { SurahNumber, SurahNameID, SurahList } from 'quran-pack/types';

class Quran extends Surah {
  constructor(value: SurahNumber | SurahNameID) {
    super(value);
  }

  public static init = (value: SurahNumber | SurahNameID) => new Quran(value);
  public static all = () => surahList;
  public static findBySurahNumber = (surahNumber: number) => {
    if (surahNumber < 1 && surahNumber > 114) return null;
    return surahList.filter((surah) => surah.number === surahNumber)[0];
  };

  public details = () => {
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
    return { surah: this, info };
  };
}

export default Quran;
