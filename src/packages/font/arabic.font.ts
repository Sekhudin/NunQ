import {
  Amiri,
  Katibeh,
  Lateef,
  Mirza,
  Noto_Naskh_Arabic,
  Noto_Nastaliq_Urdu,
  Scheherazade_New,
} from 'next/font/google';

export const amiri = Amiri({ weight: ['400', '700'], subsets: ['arabic'] });

export const katibeh = Katibeh({ weight: ['400'], subsets: ['arabic'] });

export const lateef = Lateef({
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  subsets: ['arabic'],
});
export const mirza = Mirza({ weight: ['400', '500', '600', '700'], subsets: ['arabic'] });

export const notoNaskhArabic = Noto_Naskh_Arabic({
  weight: ['400', '500', '600', '700'],
  subsets: ['arabic'],
});

export const notoNastaliqUrdu = Noto_Nastaliq_Urdu({
  weight: ['400', '500', '600', '700'],
  subsets: ['arabic'],
});

export const scheherazadeNew = Scheherazade_New({
  weight: ['400', '500', '600', '700'],
  subsets: ['arabic'],
});
