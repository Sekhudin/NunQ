class Helper {
  static hrefSurah = (number: number) => {
    return `/quran/${number}`;
  };

  static strSlice = (str: string, num: number = 10) => {
    if (str.length <= num) return str.trim();
    return str.slice(0, num).trim().concat('...');
  };
}

export default Helper;
