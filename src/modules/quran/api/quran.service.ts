import Quran from 'packages/quran-pack';
import * as quranValidation from 'packages/quran-pack/validation';
import HttpError from 'packages/server/base/http-error';

class ApiQuranService {
  public surahList = Quran.surahList;

  public surahByNumber(number: string, start: string, limit: string) {
    try {
      const surahNumber = quranValidation.surahNumber().parse(number);
      const { surah, info } = Quran.init(surahNumber).details();
      const startVerse = quranValidation.surahVerse(surah.numberOfVerse).parse(start);
      const limitVerse = quranValidation.surahLimit().parse(limit);
      return { ...info, ...surah.getVerses(startVerse, limitVerse) };
    } catch (error) {
      throw HttpError.exception(error);
    }
  }
}

const service = new ApiQuranService();
export default service;
