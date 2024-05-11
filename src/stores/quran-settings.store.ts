import { create, immer } from 'packages/zustand';
import * as arabic from 'packages/font/arabic.font';
import type { QuranSettings } from 'types/store';

const stateCreator: QuranSettings.StateCreator = (set) => ({
  arabicFont: {
    family: arabic.amiri,
    size: 32,
  },
  setArabicFontFamily: (name) =>
    set((state) => {
      state.arabicFont.family = arabic[name];
    }),
  setArabicFontSize: (number) =>
    set((state) => {
      state.arabicFont.size = number || state.arabicFont.size + 1;
    }),
  showLatin: true,
  setShowLatin: (show) => {
    set((state) => {
      state.showLatin = show;
    });
  },
  showTranslation: true,
  setShowTranslation: (show) => {
    set((state) => {
      state.showTranslation = show;
    });
  },
});

const useQuranSettingsStore = create<QuranSettings.State>()(immer(stateCreator));
export default useQuranSettingsStore;
