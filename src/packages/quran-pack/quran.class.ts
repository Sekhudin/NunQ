import * as QuranPack from 'quran-pack';
import Surah from './surah-extended.class';
import type { SurahNumber, SurahNameID } from './quran.types';

class Quran {
  static surahList = QuranPack.surahList;

  static init = (value: SurahNumber | SurahNameID) => {
    return new Surah(value);
  };

  static findSurahByNumber = (number: number) => {
    const surah = QuranPack.surahList.filter((surah) => surah.number === number);
    if (surah.length !== 1) return null;
    return surah[0];
  };

  static findSurahByNameID = (name: string) => {
    const surah = QuranPack.surahList.filter((surah) => surah.name === name);
    if (surah.length !== 1) return null;
    return surah[0];
  };
}

export default Quran;
