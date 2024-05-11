import Quran from 'packages/quran-pack';

class QuranService {
  public bismillah = Quran.bismillah;

  public surahList = Quran.surahList;

  public specialSurahList = Quran.specialSurahList;

  public findSurahByNameID = Quran.findSurahByNameID;

  public findSurahByNumber = Quran.findSurahByNumber;

  public withSurah = Quran.withSurah;

  public init = Quran.init;

  public isWithBismillah(numeric: string | number) {
    return !Quran.surahNumberWithOutBismillah.includes(Number(numeric));
  }

  public prevSurah(surahNumber: number) {
    if (surahNumber <= 1) return null;
    surahNumber = surahNumber - 1;
    return this.findSurahByNumber(surahNumber);
  }

  public nextSurah(surahNumber: number) {
    if (surahNumber >= Quran.sumOfSurah) return null;
    surahNumber = surahNumber + 1;
    return this.findSurahByNumber(surahNumber);
  }

  public prevNextSurah(numeric: string | number) {
    const surahNumber: number = Number(numeric);
    return [this.prevSurah(surahNumber), this.nextSurah(surahNumber)];
  }
}

const service = new QuranService();
export default service;
