import Link from "next/link";
import Image from "next/image";
import { nav } from "@/lib/content";
import { NavLink } from "@/components/molecules/NavLink";
import { Button } from "@/components/atoms/Button";
import { ThemeToggle } from "@/components/atoms/ThemeToggle";

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-graphite-950/85 backdrop-blur">
      <div className="container-edge flex h-20 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/images/logo.webp" alt="Eletro Building" width={40} height={24} className="h-8 w-auto" priority />
          {/* <span className="font-display text-xl font-semibold uppercase tracking-tight text-foam">
            Eletro<span className="text-volt-dim">Building</span>
          </span> */}
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {nav.map((item) => (
            <NavLink key={item.href} href={item.href} label={item.label} />
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />

          <div className="hidden lg:block">
            <Button href="/contato" className="!py-2.5">
              Solicitar orçamento
            </Button>
          </div>

          <a
            href="/contato"
            className="lg:hidden font-mono text-xs uppercase tracking-[0.18em] text-volt-dim"
          >
            Orçamento
          </a>
        </div>
      </div>
    </header>
  );
}
