import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export function useMobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Close whenever the route changes (e.g. a nav link was clicked).
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Lock body scroll while the overlay is open.
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close on Escape.
  useEffect(() => {
    if (!isOpen) return;
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setIsOpen(false);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  return { isOpen, toggle: () => setIsOpen((v) => !v), close: () => setIsOpen(false) };
}
