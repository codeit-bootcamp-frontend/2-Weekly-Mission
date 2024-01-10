import { useEffect, useRef, useState } from 'react';

// 화면 위치에 대한 정보를 얻기 위한 커스텀 훅
export const useIntersectionObserver = <T extends HTMLElement>(
  once: boolean = false,
  options?: IntersectionObserverInit
) => {
  const ref = useRef<T>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
      if (once && entry.isIntersecting) {
        observer.unobserve(entry.target);
      }
    }, options);

    if (ref?.current) {
      observer.observe(ref.current!);
    }

    return () => {
      observer.disconnect();
    };
  }, [options, once]);
  return { ref, isIntersecting };
};
