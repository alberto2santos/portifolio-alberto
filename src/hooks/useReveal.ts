import { useEffect, useRef, useState } from "react";

/**
 * Retorna um ref e um booleano "visible".
 * "visible" vira true na primeira vez que o elemento entra na tela e nunca mais volta a false
 * (evita a animação repetir toda vez que o usuário rola pra cima e pra baixo).
 */
export function useReveal<T extends HTMLElement>(threshold = 0.15) {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Sem IntersectionObserver (navegador muito antigo) ou reduced-motion: mostra direto.
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!("IntersectionObserver" in window) || prefersReduced) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(el);
          }
        });
      },
      { threshold, rootMargin: "0px 0px -60px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, visible };
}