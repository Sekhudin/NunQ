import type { useTheme } from 'next-themes';
import type useClipboard from 'packages/hooks/use-clipboard';
import type useDebounceValue from 'packages/hooks/use-debounce-value';
import type useIntersectionObserver from 'packages/hooks/use-intersection-observer';
import type useMediaQuery from 'packages/hooks/use-media-query';
import type useMounted from 'packages/hooks/use-mounted';
import type useMutationObserver from 'packages/hooks/use-mutation-observer';
import type useOutsideClick from 'packages/hooks/use-outside-click';
import type useScrollListener from 'packages/hooks/use-scroll-listener';
import type useUpdate from 'packages/hooks/use-updated';

import type useQuranSearchesStore from 'stores/quran-searches.store';
import type useQuranSettingsStore from 'stores/quran-settings.store';

type Hooks = {
  useTheme: typeof useTheme;
  useClipboard: typeof useClipboard;
  useDebounceValue: typeof useDebounceValue;
  useIntersectionObserver: typeof useIntersectionObserver;
  useMediaQuery: typeof useMediaQuery;
  useMounted: typeof useMounted;
  useMutationObserver: typeof useMutationObserver;
  useOutsideClick: typeof useOutsideClick;
  useScrollListener: typeof useScrollListener;
  useUpdate: typeof useUpdate;
};

type WithHooks<T extends keyof Hooks> = {
  hooks: {
    [P in T]: Hooks[P];
  };
};

type Stores = {
  useQuranSearchesStore: typeof useQuranSearchesStore;
  useQuranSettingsStore: typeof useQuranSettingsStore;
};

type WithStores<T extends keyof Stores> = {
  stores: {
    [P in T]: Stores[P];
  };
};

type StoresDepsKey = 'stores';
type HooksDepsKey = 'hooks';
type DependenciesKey = StoresDepsKey | HooksDepsKey;

type Dependencies<T extends Partial<Record<DependenciesKey, any>>> = {
  stores: T extends Record<StoresDepsKey, any> ? T[StoresDepsKey] : {};
  hooks: T extends Record<HooksDepsKey, any> ? T[HooksDepsKey] : {};
};

type ComponentDependencies<T extends (...args: any) => any> = {
  stores: Parameters<T>[0][StoresDepsKey];
  hooks: Parameters<T>[0][HooksDepsKey];
};

export type { WithStores, WithHooks, Dependencies, ComponentDependencies };
