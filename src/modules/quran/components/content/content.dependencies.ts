'use client';
// hooks
import { useTheme } from 'next-themes';
import useMounted from 'packages/hooks/use-mounted';
// store
import useQuranSearchesStore from 'stores/quran-searches.store';
import type {
  Props,
  WithHooks,
  WithStore,
  Dependencies,
  ComponentDependencies,
} from 'packages/utils/cn';

export const headerDependencies: Props<
  WithHooks<'useTheme' | 'useMounted'> & WithStore<'useQuranSearchesStore'>
> = {
  hooks: {
    useTheme,
    useMounted,
  },
  stores: {
    useQuranSearchesStore,
  },
};
