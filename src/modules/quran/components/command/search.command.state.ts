import { create, immer } from 'packages/zustand';
import { availableLinks, type AvailableLink } from 'configs/links.config';
import type { StateCreator } from 'types/store';
import service, { type SurahList } from 'modules/quran/service/quran.service';

interface State {
  open: boolean;
  setOpen: (open: boolean) => void;
  setOpenOnClick: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  links: AvailableLink[];
  surahList: SurahList;
  search: string;
  setSearch: (value: string) => void;
  surahMode: boolean;
  onSelect: (cb: (href: string) => void) => (href: string) => void;
}

const stateCreator: StateCreator<State> = (set) => ({
  open: false,
  setOpen: (open) => {
    set((state) => {
      state.open = open;
      state.search = '';
      state.surahMode = false;
    });
  },
  setOpenOnClick: (e) => {
    set((state) => {
      state.open = !state.open;
      state.search = '';
      state.surahMode = false;
    });
  },
  links: availableLinks,
  surahList: service.surahList(),
  search: '',
  setSearch: (value) => {
    set((state) => {
      state.search = value;
      state.surahMode = value.startsWith('@');
    });
  },
  surahMode: false,
  onSelect: (callback) => (href) => {
    set((state) => {
      state.open = false;
      state.search = '';
      state.surahMode = false;
    });
    callback(href);
  },
});

const useSearchCommandState = create<State>()(immer(stateCreator));
export default useSearchCommandState;
