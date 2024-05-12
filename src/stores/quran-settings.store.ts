import { create, immer } from 'packages/zustand';
import { arabicBody } from 'packages/font/arabic.font';
import type { QuranSettings } from 'types/store';

const stateCreator: QuranSettings.StateCreator = (set) => ({
  arabicFont: {
    family: arabicBody['amiri'],
    size: 32,
  },
  setArabicFontFamily: (name) =>
    set((state) => {
      state.arabicFont.family = arabicBody[name];
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

const useQuranSettingsStore = create<QuranSettings.ActionState>()(immer(stateCreator));
export default useQuranSettingsStore;
