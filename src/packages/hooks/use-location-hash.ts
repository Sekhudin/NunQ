'use client';
import React from 'react';
import useMounted from './use-mounted';

function useLocationHash(fn?: (hash: string, hashValue: string) => void) {
  const [value, setValue] = React.useState<Record<'hash' | 'hashValue', string>>({
    hash: '',
    hashValue: '',
  });

  useMounted(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      const hashValue = hash.replace('#', '').trim();
      setValue({ hash, hashValue });
      if (fn) {
        fn(hash, hashValue);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  });
  return value;
}

export default useLocationHash;
