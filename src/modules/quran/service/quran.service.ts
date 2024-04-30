import Quran from 'packages/quran-pack';

class QuranService {
  public surahList = () => Quran.all();
  public filterBySurahName = (surahName: string) => {
    surahName = surahName.toLocaleLowerCase();
    return Quran.all().filter((surah) => surah.name.toLowerCase() === surahName);
  };

  public filterBySurahNumber = (surahNumber: number) => {
    return Quran.all().filter((surah) => surah.number === surahNumber);
  };
}

const service = new QuranService();
export type { SurahList } from 'packages/quran-pack';
export default service;
