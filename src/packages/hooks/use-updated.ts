'use client';

/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';

/**
 * React hooks that run useEffect() hooks only when the dependency changes,
 * not when the component is in initial mounted.
 * @param callback - The callback to run only when the dependency changes
 * @param deps - The dependencies to listen to
 * @returns {void} - void
 */
function useUpdated(callback: React.EffectCallback, deps: React.DependencyList): void {
  const mounted = React.useRef(false);
  React.useEffect(() => {
    if (mounted.current) return callback();
    else mounted.current = true;
  }, deps);
}

export default useUpdated;
