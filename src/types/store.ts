import type { StateCreator as SC } from 'zustand';
import type { PersistOptions as PO } from 'zustand/middleware';
import type { SurahList } from 'packages/quran-pack';
import type { FontArabicName, QoriName } from 'configs/store.config';
import type { Font } from './global';

namespace QuranSettings {
  export interface State {
    arabicFont: {
      face: FontArabicName;
      family: Font;
      size: number;
    };
    showLatin: boolean;
    showTranslation: boolean;
    translation: string;
    qori: QoriName;
  }

  export interface Action {
    setArabicFontFamily: (name: FontArabicName) => void;
    setArabicFontSize: (values: [number]) => void;
    setShowLatin: (show: boolean) => void;
    setShowTranslation: (show: boolean) => void;
    setTranslation: (lang: string) => void;
    setQori: (qori: QoriName) => void;
    reset: () => void;
  }

  export interface ActionState extends Action, State {}
  export type StateCreator = SC<ActionState, [['zustand/immer', never]], []>;
}

namespace QuranSearches {
  export interface State<T extends Record<string, any>> {
    recents: T[];
    favorites: T[];
  }

  export interface Action<T extends Record<string, any>> {
    addSurahToRecents: (
      surah: SurahList[number],
      cb: (href: string) => void
    ) => (href: string) => void;
    removeFromRecents: (index: number) => () => void;
    addRecentsToFavorites: (recent: T) => () => void;
    removeFromFavorites: (index: number) => () => void;
  }

  export interface ActionState<T extends Record<string, any>> extends Action<T>, State<T> {}
  export type PersistOptions<T extends Record<string, any>> = PO<ActionState<T>>;
  export type StateCreator<T extends Record<string, any>> = SC<
    ActionState<T>,
    [['zustand/persist', unknown], ['zustand/immer', never]],
    []
  >;
}

export type StateCreator<T extends Record<string, any>> = SC<T, [['zustand/immer', never]], []>;

export type { QuranSettings, QuranSearches };
