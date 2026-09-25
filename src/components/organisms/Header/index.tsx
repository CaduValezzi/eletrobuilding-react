"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { nav, siteConfig } from "@/lib/content";
import { NavLink } from "@/components/molecules/NavLink";
import { Button } from "@/components/atoms/Button";
import { ThemeToggle } from "@/components/atoms/ThemeToggle";
import { MenuToggle } from "@/components/atoms/MenuToggle";
import { useMobileMenu } from "./Header.hooks";
import { useMobileMenuTimeline } from "./Header.animations";

export function Header() {
  const { isOpen, toggle, close } = useMobileMenu();
  const panelRef = useRef<HTMLDivElement>(null);
  const linkRefs = useRef<(HTMLElement | null)[]>([]);

  useMobileMenuTimeline(isOpen, { panelRef, linkRefs });

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-graphite-950/85 backdrop-blur">
        <div className="container-edge flex h-20 items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/logo.webp"
              alt="Eletro Building"
              width={40}
              height={24}
              className="h-8 w-auto"
              priority
            />
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

            <MenuToggle open={isOpen} onClick={toggle} className="lg:hidden" />
          </div>
        </div>
      </header>

      {/* Mobile menu overlay — rendered as a sibling of <header>, not a child.
          <header> has backdrop-blur (backdrop-filter), which creates a new
          containing block for any descendant `position: fixed` element. If
          this panel stayed nested inside header, "fixed" would resolve
          against header's own 80px-tall box instead of the viewport. */}
      <div
        id="mobile-menu"
        ref={panelRef}
        style={{ display: "none" }}
        className="fixed inset-x-0 top-20 bottom-0 z-40 flex-col bg-graphite-950 lg:!hidden"
      >
        <nav className="container-edge flex flex-1 flex-col justify-center gap-2 py-10">
          {nav.map((item, i) => (
            <Link
              key={item.href}
              ref={(el) => {
                linkRefs.current[i] = el;
              }}
              href={item.href}
              onClick={close}
              className="border-b border-line py-4 font-display text-3xl font-semibold uppercase tracking-tight text-foam transition-colors hover:text-volt-dim"
            >
              {item.label}
            </Link>
          ))}

          <div
            ref={(el) => {
              linkRefs.current[nav.length] = el;
            }}
            className="mt-8 flex flex-col gap-6"
          >
            <Button href="/contato" className="w-full justify-center" onClick={close}>
              Solicitar orçamento
            </Button>
            <a
              href={`mailto:${siteConfig.email}`}
              onClick={close}
              className="text-center font-mono text-xs uppercase tracking-[0.18em] text-muted"
            >
              {siteConfig.email}
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}