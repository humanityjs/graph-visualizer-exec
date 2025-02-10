import { type RefObject, useEffect, useState } from "react";

export function useWidth(ref: RefObject<HTMLElement>) {
  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    setWidth(element.offsetWidth);

    const resizeObserver = new ResizeObserver((entries) => {
      const entry = entries[0];
      if (!entry) return;

      if (entry.contentBoxSize?.[0]) {
        setWidth(entry.contentBoxSize[0].inlineSize);
      } else {
        setWidth(entry.contentRect.width);
      }
    });

    resizeObserver.observe(element);

    return () => {
      resizeObserver.unobserve(element);
      resizeObserver.disconnect();
    };
  }, [ref]);

  return width;
}
