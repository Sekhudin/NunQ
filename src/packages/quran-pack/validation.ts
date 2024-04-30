import { z } from 'zod';

export const surahNumber = () =>
  z.union([z.number(), z.string()]).pipe(
    z.coerce
      .number({
        invalid_type_error: 'invalid surah number',
        required_error: 'required surah number',
      })
      .int({ message: 'surah number must be an integer' })
      .min(1, { message: 'surah number must be greater than or equal to 1' })
      .max(114, { message: 'surah number must be less than or equal to 114' })
  );

export const surahVerse = (maxVerse: number) =>
  z.union([z.number(), z.string()]).pipe(
    z.coerce
      .number({
        invalid_type_error: 'invalid surah verse',
        required_error: 'required surah verse',
      })
      .int({ message: 'surah verse must be an integer' })
      .min(1, { message: 'surah verse must be greater than or equal to 1' })
      .max(maxVerse, { message: `surah verse must be less than or equal to ${maxVerse}` })
  );

export const surahLimit = () =>
  z.union([z.number(), z.string()]).pipe(
    z.coerce
      .number({
        invalid_type_error: 'invalid surah limit',
        required_error: 'required surah limit',
      })
      .int({ message: 'surah limit must be an integer' })
      .min(1, { message: 'surah limit must be greater than or equal to 1' })
  );
