'use client';
import React from 'react';

function useLocationHashState(): [string | null, (hash: string) => void] {
  const [value, setValue] = React.useState<string | null>(null);

  const setHash = React.useCallback((hash: string) => {
    window.location.hash = hash;
    setValue(hash);
  }, []);

  return [value, setHash];
}

export default useLocationHashState;
