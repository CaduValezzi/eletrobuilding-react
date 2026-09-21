"use client";

import { useRef } from "react";
import Image from "next/image";
import { services } from "@/lib/content";
import { BackLink } from "@/components/atoms/BackLink";
import { Numeral } from "@/components/atoms/Numeral";
import { Button } from "@/components/atoms/Button";
import { ChecklistItem } from "@/components/molecules/ChecklistItem";
import { ServiceLinkCard } from "@/components/molecules/ServiceLinkCard";
import type { ServiceDetailBodyProps } from "./ServiceDetailBody.types";
import { useServiceTitleReveal } from "./ServiceDetailBody.animations";

export function ServiceDetailBody({ service }: ServiceDetailBodyProps) {
  const related = services.filter((s) => s.slug !== service.slug).slice(0, 3);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useServiceTitleReveal(titleRef);

  return (
    <>
      <section className="relative overflow-hidden bg-graphite-950">
        <div className="relative h-[380px] w-full md:h-[460px]">
          <Image src={service.image} alt={service.imageAlt} fill priority className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/50 to-ink/10" />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-graphite-950" />

          <div className="container-edge relative flex h-full flex-col justify-center pt-20">
            <BackLink href="/servicos" label="Todos os serviços" className="text-white/70 hover:text-volt" />

            <div className="mt-8 flex items-start gap-4">
              <Numeral value={service.number} className="mt-2 text-lg !text-volt" />
              <h1 ref={titleRef} className="max-w-3xl font-display text-5xl font-semibold uppercase leading-[1.02] tracking-tight text-white md:text-6xl">
                {service.title}
              </h1>
            </div>
          </div>
        </div>

        <div className="container-edge py-12">
          <p className="max-w-2xl text-base leading-relaxed text-muted md:text-lg">
            {service.intro}
          </p>
          <div className="mt-10">
            <Button href="/contato">Solicitar orçamento</Button>
          </div>
        </div>
      </section>

      <section className="section-pad bg-graphite-900/60">
        <div className="container-edge grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <h2 className="mb-6 font-display text-2xl font-semibold uppercase tracking-tight text-foam">
              O que está incluído
            </h2>
            <ul>
              {service.includes.map((item) => (
                <ChecklistItem key={item}>{item}</ChecklistItem>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="mb-6 font-display text-2xl font-semibold uppercase tracking-tight text-foam">
              Indicado para
            </h2>
            <ul>
              {service.idealFor.map((item) => (
                <ChecklistItem key={item}>{item}</ChecklistItem>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section-pad bg-graphite-950">
        <div className="container-edge">
          <h2 className="mb-10 font-display text-2xl font-semibold uppercase tracking-tight text-foam">
            Outros serviços
          </h2>
          <div className="grid grid-cols-1 gap-px overflow-hidden border border-line bg-line sm:grid-cols-3">
            {related.map((item) => (
              <div key={item.slug} className="bg-graphite-950">
                <ServiceLinkCard {...item} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
