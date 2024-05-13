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
  search: string;
}

interface Action {
  setOpen: (open: boolean) => void;
  setSearch: (value: string) => void;
  triggerCommandOnClick: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  commandItemOnSelect: (cb: (href: string) => void) => (href: string) => void;
}

const DEFAULT_STATE: State = {
  surahMode: false,
  links: availableLinks,
  surahList: service.surahList,
  open: false,
  search: '',
};

const stateCreator: StateCreator<State & Action> = (set) => ({
  ...DEFAULT_STATE,
  setOpen: (open) => {
    set((state) => {
      state.open = open;
      state.search = '';
      state.surahMode = false;
    });
  },
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

const useSearchCommandStore = create<State & Action>()(immer(stateCreator));
export default useSearchCommandStore;
