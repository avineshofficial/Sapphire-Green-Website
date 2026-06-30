"use client";

import { ReactLenis } from "lenis/react";
import { ReactNode, useEffect, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export default function SmoothScrolling({ children }: { children: ReactNode }) {
  const lenisRef = useRef<any>(null);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (lenisRef.current?.lenis) {
      // Reset scroll position on route change
      lenisRef.current.lenis.scrollTo(0, { immediate: true });
      // Force recalculation of page height after DOM paints
      setTimeout(() => {
        lenisRef.current?.lenis?.resize();
      }, 150);
    }
  }, [pathname, searchParams]);

  return (
    <ReactLenis root options={{ lerp: 0.1, smoothWheel: true, syncTouch: true }} ref={lenisRef}>
      {children}
    </ReactLenis>
  );
}
