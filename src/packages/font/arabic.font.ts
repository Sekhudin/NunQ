import { Amiri, Katibeh, Lateef, Mirza, Noto_Nastaliq_Urdu } from 'next/font/google';

const amiri = Amiri({
  weight: ['400', '700'],
  subsets: ['arabic'],
  preload: true,
  adjustFontFallback: false,
  display: 'swap',
});

const katibeh = Katibeh({
  weight: ['400'],
  subsets: ['arabic'],
  preload: true,
  adjustFontFallback: false,
  display: 'swap',
});

const lateef = Lateef({
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  subsets: ['arabic'],
  preload: true,
});
const mirza = Mirza({
  weight: ['400', '500', '600', '700'],
  subsets: ['arabic'],
  preload: true,
  adjustFontFallback: false,
  display: 'swap',
});

const notoNastaliqUrdu = Noto_Nastaliq_Urdu({
  weight: ['400', '500', '600', '700'],
  subsets: ['arabic'],
  preload: true,
  adjustFontFallback: false,
  display: 'swap',
});

const arabicBody = {
  amiri: amiri,
  katibeh: katibeh,
  lateef: lateef,
  mirza: mirza,
};

const arabicSpecial = {
  'surah name': notoNastaliqUrdu,
};

export type ArabicBodyName = keyof typeof arabicBody;

export { arabicBody, arabicSpecial };
