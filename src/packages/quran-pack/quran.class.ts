import * as QuranPack from 'quran-pack';
import Alfatihah from 'quran-pack/surah/1';
import Surah, { specialSurah, madaniyah, makkiyah } from './surah-extended.class';
import type { SurahNumber, SurahNameID } from './quran.types';

class Quran {
  static sumOfSurah = 114;

  static bismillah = Alfatihah.arabics['1'];

  static surahNumberWithOutBismillah = [1, 9];

  static surahList = QuranPack.surahList;

  static specialSurahList = QuranPack.surahList.filter((surah) =>
    specialSurah.includes(surah.name_id as SurahNameID)
  );

  static surahMakkiyah = QuranPack.surahList.filter((surah) => surah.category === makkiyah);

  static surahMadaniyah = QuranPack.surahList.filter((surah) => surah.category === madaniyah);

  static withSurah = (name: string) => {
    return 'سورة'.concat(' ',name.trim());
  };

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
