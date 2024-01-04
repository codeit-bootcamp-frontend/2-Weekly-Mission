import { EffectCallback, useEffect } from 'react';

// useEffect 한번만 동작하게 하는 커스텀 훅
export const useEffectOnce = (callback: EffectCallback) => {
  useEffect(() => {
    callback();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
