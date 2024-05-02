'use client';
/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import * as quran from 'quran-pack';
import ArabicDiv from 'components/div/arabic.div';
import { Button } from 'packages/ui/button';
import { cn } from 'packages/utils/cn';
import * as font from 'packages/font/arabic.font';
import useFontStore from 'stores/quran-settings.store';

const QuranPage = () => {
  const [surahNumber, setSurahNumber] = React.useState(110);
  const [verse, setVerse] = React.useState(2);

  const getSurah = (num: number) => quran.surah(num);
  // const surah = React.useMemo(() => getSurah(surahNumber), [surahNumber]);
  const surah = quran.surah('Al-Fatihah');
  const arabic = useFontStore((state) => state.arabicFont);

  // React.useEffect(() => {
  //   if (surahNumber === 114 && verse === surah.numberOfVerse) return;

  //   const timmer = setInterval(() => {
  //     if (verse < surah.numberOfVerse) {
  //       setVerse(verse + 1);
  //       return;
  //     }

  //     if (verse === surah.numberOfVerse) {
  //       setSurahNumber(surahNumber + 1);
  //       setVerse(1);
  //       return;
  //     }
  //   }, 3000);

  //   return () => {
  //     clearInterval(timmer);
  //   };
  // }, [verse]);

  return <ArabicDiv>{surah.getVerse(verse).arabic}</ArabicDiv>;
};

export default QuranPage;
