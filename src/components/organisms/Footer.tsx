import Image from "next/image";
import { footerNav, nav, siteConfig } from "@/lib/content";
import { FooterColumn } from "@/components/molecules/FooterColumn";
import { Button } from "@/components/atoms/Button";

export function Footer() {
  return (
    <footer className="border-t border-line bg-graphite-900">
      <div className="container-edge section-pad">
        <div className="flex flex-col justify-between gap-10 border-b border-line pb-14 lg:flex-row lg:items-end">
          <div>
            <Image
              src="/images/logo.webp"
              alt="Eletro Building"
              width={72}
              height={43}
              className="mb-6 h-11 w-auto"
            />
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-volt-dim">
              Precisão. Segurança. Disponibilidade.
            </p>
            <h2 className="mt-4 max-w-xl font-display text-4xl font-semibold uppercase leading-[1.05] tracking-tight text-foam md:text-5xl">
              Fale com a Eletro Building
            </h2>
          </div>
          <Button href="/contato">Solicitar orçamento</Button>
        </div>

        <div className="grid grid-cols-2 gap-10 py-14 md:grid-cols-4">
          <FooterColumn
            title="Navegação"
            items={nav.map((n) => ({ label: n.label, href: n.href }))}
          />
          <FooterColumn
            title="Serviços"
            items={footerNav.services.map((s) => ({
              label: s.title,
              href: `/servicos/${s.slug}`,
            }))}
          />
          <FooterColumn
            title="Contato"
            items={[
              { label: siteConfig.email, href: `mailto:${siteConfig.email}` },
              { label: siteConfig.phone, href: siteConfig.phoneHref },
              { label: siteConfig.address },
            ]}
          />
          <FooterColumn
            title="Legal"
            items={[
              { label: "Termos de Uso", href: "#" },
              { label: "Política de Privacidade", href: "#" },
            ]}
          />
        </div>

        <div className="flex flex-col gap-3 pt-8 text-xs text-muted md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} {siteConfig.legalName}. Todos os direitos reservados.</p>
          <p className="font-mono uppercase tracking-[0.18em]">Engenharia Elétrica — Brasil</p>
        </div>
      </div>
    </footer>
  );
}
