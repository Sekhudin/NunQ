import { toast } from 'sonner';
import { create, immer } from 'packages/zustand';
import { TRANSLATION, FONT_ARABIC } from 'configs/store.config';
import type { QuranSettings } from 'types/store';

const DEFAULT_QURAN_SETTINGS: QuranSettings.State = {
  arabicFont: {
    face: 'amiri',
    family: FONT_ARABIC['amiri'],
    size: 32,
  },
  showLatin: true,
  showTranslation: true,
  translation: TRANSLATION.ID,
  qori: 'Mishari Alafasy',
};

const stateCreator: QuranSettings.StateCreator = (set) => ({
  ...DEFAULT_QURAN_SETTINGS,
  setArabicFontFamily: (name) => {
    set((state) => {
      state.arabicFont.face = name;
      state.arabicFont.family = FONT_ARABIC[name];
    });
  },
  setArabicFontSize: ([size]) => {
    set((state) => {
      state.arabicFont.size = size;
    });
  },
  setShowLatin: (show) => {
    set((state) => {
      state.showLatin = show;
    });
  },
  setShowTranslation: (show) => {
    set((state) => {
      state.showTranslation = show;
    });
  },
  setTranslation: (lang: string) => {
    if (!lang) return;
    set((state) => {
      state.translation = lang;
    });
  },
  setQori: (qori) => {
    toast.warning('Qori Tidak Tersedia', { description: 'Fitur qori belum tersedia.' });
    set((state) => {
      state.qori = qori;
    });
  },
  reset: () => {
    toast.success('Reset Berhasil', {
      description: 'Pengaturan telah dikembalikan ke keadaan awal.',
    });
    set((state) => {
      Object.assign(state, DEFAULT_QURAN_SETTINGS);
    });
  },
});

const useQuranSettingsStore = create<QuranSettings.ActionState>()(immer(stateCreator));
export default useQuranSettingsStore;
