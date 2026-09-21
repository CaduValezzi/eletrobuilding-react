import { usePathname } from "next/navigation";

export function useIsActiveRoute(href: string) {
  const pathname = usePathname();
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}
