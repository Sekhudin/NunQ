import { create, immer } from 'packages/zustand';
import { SurahList } from 'packages/quran-pack/quran.types';
import { availableLinks, type AvailableLink } from 'configs/links.config';
import type { StateCreator } from 'types/store';
import service from 'modules/quran/service/quran.service';

interface State {
  surahMode: boolean;
  links: AvailableLink[];
  surahList: SurahList;
  open: boolean;
  setOpen: (open: boolean) => void;
  search: string;
  setSearch: (value: string) => void;
  triggerCommandOnClick: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  commandItemOnSelect: (cb: (href: string) => void) => (href: string) => void;
}

const stateCreator: StateCreator<State> = (set) => ({
  surahMode: false,
  links: availableLinks,
  surahList: service.surahList,
  open: false,
  setOpen: (open) => {
    set((state) => {
      state.open = open;
      state.search = '';
      state.surahMode = false;
    });
  },
  search: '',
  setSearch: (value) => {
    set((state) => {
      state.search = value;
      state.surahMode = value.startsWith('@');
    });
  },
  triggerCommandOnClick: (e) => {
    set((state) => {
      state.open = !state.open;
      state.search = '';
      state.surahMode = false;
    });
  },
  commandItemOnSelect: (callback) => (href) => {
    set((state) => {
      state.open = false;
      state.search = '';
      state.surahMode = false;
    });
    callback(href);
  },
});

const useSearchCommandStore = create<State>()(immer(stateCreator));
export default useSearchCommandStore;
