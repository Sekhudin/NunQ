'use client';
/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import useMounted from './use-mounted';

interface ScrollListenerParams {
  scrollY: number;
  scrollX: number;
}

type Reference<T> = React.RefObject<T> | 'window';

const getReference = <T>(reference: Reference<T>) => {
  const isReactRef = reference !== 'window';
  const element = (reference as React.RefObject<T>)?.current;
  return { isReactRef, element };
};

/**
 * hooks for handle scroll element on given ref
 * @param callback - event to handle on element scroll
 * @param reference - The ref of element to listen
 */
function useScrollListener<T extends Element>(
  callback: (scrollPosition: ScrollListenerParams) => void,
  reference: Reference<T> = 'window'
) {
  const handleScroll = React.useCallback(() => {
    const { isReactRef, element } = getReference(reference);
    const scrollY = (isReactRef ? element?.scrollTop : window.scrollY) ?? 0;
    const scrollX = (isReactRef ? element?.scrollWidth : window.scrollX) ?? 0;
    callback({ scrollX, scrollY });
  }, []);

  useMounted(() => {
    const { isReactRef, element } = getReference(reference);
    const target = isReactRef ? element : window;
    target?.addEventListener('scroll', handleScroll);
    return () => {
      target?.removeEventListener('scroll', handleScroll);
    };
  });
}

export default useScrollListener;
