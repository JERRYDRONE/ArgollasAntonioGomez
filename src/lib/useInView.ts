"use client";
import { useEffect, useRef, useState } from "react";

export function useInView<T extends Element = HTMLDivElement>(threshold = 0) {
  const ref = useRef<T>(null);
  // ── Arranca en TRUE para que el SSR y la hidratación inicial sean siempre visibles.
  // useEffect luego lo pone en false solo si el elemento está debajo del fold.
  const [inView, setInView] = useState(true);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    // Si ya está en el viewport en el momento de montar, dejarlo visible (sin animación).
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      setInView(true);
      return;
    }

    // El elemento está fuera del viewport: ocultarlo y esperar al scroll.
    // El usuario aún no lo ve, así que no habrá flash.
    setInView(false);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      {
        threshold,
        // Dispara 100px antes de que el elemento entre en pantalla
        rootMargin: "0px 0px 100px 0px",
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}
