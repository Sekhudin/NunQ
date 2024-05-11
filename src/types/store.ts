import type { StateCreator as SC } from 'zustand';
import type { PersistOptions as PO } from 'zustand/middleware';
import type { SurahList } from 'packages/quran-pack';
import type { arabicBody } from 'packages/font/arabic.font';
import type { Font } from './global';

namespace QuranSettings {
  export interface State {
    arabicFont: {
      family: Font;
      size: number;
    };
    setArabicFontFamily: (name: keyof typeof arabicBody) => void;
    showLatin: boolean;
    setShowLatin: (show: boolean) => void;
    showTranslation: boolean;
    setShowTranslation: (show: boolean) => void;
  }
  export type StateCreator = SC<State, [['zustand/immer', never]], []>;
}

namespace QuranSearches {
  export interface State<T extends Record<string, any>> {
    recents: T[];
    addSurahToRecents: (
      surah: SurahList[number],
      cb: (href: string) => void
    ) => (href: string) => void;
    removeFromRecents: (index: number) => () => void;
    favorites: T[];
    addRecentsToFavorites: (recent: T) => () => void;
    removeFromFavorites: (index: number) => () => void;
  }
  export type StateCreator<T extends Record<string, any>> = SC<
    State<T>,
    [['zustand/persist', unknown], ['zustand/immer', never]],
    []
  >;

  export type PersistOptions<T extends Record<string, any>> = PO<State<T>>;
}

export type StateCreator<T extends Record<string, any>> = SC<T, [['zustand/immer', never]], []>;

export type { QuranSettings, QuranSearches };
