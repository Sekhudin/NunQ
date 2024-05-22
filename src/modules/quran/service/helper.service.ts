import { ROUTE } from 'configs/links.config';

class Helper {
  static hrefSurah = (number: number) => {
    return ROUTE.Surah.replace('{surah_number}', `${number}`);
  };

  static convertToArabicNumber(number: number): string {
    const arabicNumbers: string[] = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
    let numberStr = number.toString();
    let result = '';

    for (let i = 0; i < numberStr.length; i++) {
      let digit = parseInt(numberStr[i]);
      result += arabicNumbers[digit];
    }

    return result.trim();
  }
}

export default Helper;
