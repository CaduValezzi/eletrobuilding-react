import { contactPage, siteConfig } from "@/lib/content";
import { Eyebrow } from "@/components/atoms/Eyebrow";
import { SectionHeading } from "@/components/atoms/SectionHeading";
import { FormField } from "@/components/molecules/FormField";

export function Contact() {
  return (
    <section className="section-pad bg-graphite-900/40 pt-0">
      <div className="container-edge grid grid-cols-1 gap-16 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <Eyebrow className="mb-5 block">{contactPage.eyebrow}</Eyebrow>
          <SectionHeading className="mb-6">{contactPage.title}</SectionHeading>
          <p className="mb-10 max-w-md text-sm leading-relaxed text-muted md:text-base">
            {contactPage.description}
          </p>

          <div className="space-y-6 border-t border-line pt-8">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.24em] text-muted">
                Fale conosco
              </p>
              <a href={`mailto:${siteConfig.email}`} className="mt-1 block text-lg text-foam hover:text-volt-dim">
                {siteConfig.email}
              </a>
              <a href={siteConfig.phoneHref} className="mt-1 block text-lg text-foam hover:text-volt-dim">
                {siteConfig.phone}
              </a>
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.24em] text-muted">Onde estamos</p>
              <p className="mt-1 text-lg text-foam">{siteConfig.address}</p>
            </div>
          </div>
        </div>

        <form className="space-y-6 border border-line bg-graphite-950 p-8 md:p-10">
          <FormField label="Nome" name="name" required />
          <FormField label="E-mail" name="email" type="email" required />
          <FormField label="Celular" name="phone" type="tel" required />
          <FormField label="Mensagem" name="message" type="textarea" required />

          <button
            type="submit"
            className="mt-2 w-full bg-volt py-4 font-mono text-xs uppercase tracking-[0.18em] text-ink transition-colors hover:bg-graphite-950 hover:text-foam sm:w-auto sm:px-10"
          >
            Enviar mensagem
          </button>
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
            Respondemos em até 1 dia útil.
          </p>
        </form>
      </div>
    </section>
  );
}
