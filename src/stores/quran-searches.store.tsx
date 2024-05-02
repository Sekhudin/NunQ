import { create, persist, immer, createJSONStorage } from 'packages/zustand';
import { STORE_NAME, MAX } from 'configs/store.config';
import type { AvailableLink } from 'configs/links.config';
import type { QuranSearches } from 'types/store';

const stateCreator: QuranSearches.StateCreator<AvailableLink> = (set) => ({
  recents: [],
  addSurahToRecents: (surah, callback) => (href) => {
    set((state) => {
      const isItemRecents = state.recents.filter((v) => v.href === href).length > 0;
      const isItemFavorites = state.favorites.filter((v) => v.href === href).length > 0;
      if (!isItemRecents && !isItemFavorites) {
        if (state.recents.length < MAX.QURAN_SEARCHES_RECENTS) {
          state.recents.unshift({ name: surah.name_id, href, keywords: [surah.name_id] });
        } else {
          state.recents.pop();
          state.recents.unshift({ name: surah.name_id, href, keywords: [surah.name_id] });
        }
      }
    });
    callback(href);
  },
  removeFromRecents: (index) => () => {
    set((state) => {
      state.recents.splice(index, 1);
    });
  },
  favorites: [],
  addRecentsToFavorites: (recent) => () => {
    set((state) => {
      const isItemFavorites = state.favorites.filter((v) => v.href === recent.href).length > 0;
      if (!isItemFavorites) {
        state.favorites.unshift(recent);
        state.recents = state.recents.filter((v) => v.href !== recent.href);
      }
    });
  },
  removeFromFavorites: (index) => () => {
    set((state) => {
      state.favorites.splice(index, 1);
    });
  },
});

const persistOptions: QuranSearches.PersistOptions<AvailableLink> = {
  name: STORE_NAME.QURAN_SEARCHES,
  storage: createJSONStorage(() => localStorage),
};
const useQuranSearchesStore = create<QuranSearches.State<AvailableLink>>()(
  persist(immer(stateCreator), persistOptions)
);
export default useQuranSearchesStore;
