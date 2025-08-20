import { useEffect, useRef, useState } from 'react';

export const useScrollAnimation = (threshold = 0.1, rootMargin = '0px 0px -50px 0px') => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          // Once visible, stop observing to prevent re-triggering
          observer.unobserve(element);
        }
      },
      { 
        threshold,
        rootMargin
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, isVisible]);

  return { ref, isVisible };
};