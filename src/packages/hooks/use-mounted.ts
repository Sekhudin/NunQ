'use client';
/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';

/**
 *
 * @param callback - The callback to run when the component is mounted
 * @returns {void} - void
 */
function useMounted(callback: React.EffectCallback): void {
  React.useEffect(callback, []);
}

export default useMounted;
