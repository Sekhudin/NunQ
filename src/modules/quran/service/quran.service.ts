import Quran from 'packages/quran-pack';

class QuranService {
  public surahList = Quran.surahList;

  public specialSurahList = Quran.specialSurahList;

  public findSurahByNameID = Quran.findSurahByNameID;

  public findSurahByNumber = Quran.findSurahByNumber;
}

const service = new QuranService();
export type * from 'packages/quran-pack/quran.types';
export default service;
