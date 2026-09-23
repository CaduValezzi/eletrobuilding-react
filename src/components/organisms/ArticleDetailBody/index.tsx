"use client";

import { useRef } from "react";
import Image from "next/image";
import { articles } from "@/constants/articles";
import { BackLink } from "@/components/atoms/BackLink";
import { Badge } from "@/components/atoms/Badge";
import { ArticleCard } from "@/components/molecules/ArticleCard";
import { formatDate } from "@/lib/format";
import type { ArticleDetailBodyProps } from "./ArticleDetailBody.types";
import { useArticleTitleReveal } from "./ArticleDetailBody.animations";

export function ArticleDetailBody({ article }: ArticleDetailBodyProps) {
  const related = articles.filter((a) => a.slug !== article.slug).slice(0, 3);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useArticleTitleReveal(titleRef);

  return (
    <>
      <section className="relative overflow-hidden bg-graphite-950 pt-20">
        <div className="container-edge max-w-3xl pt-8">
          <BackLink href="/artigos" label="Todos os artigos" />

          <div className="mt-8 flex items-center gap-4">
            <Badge>{article.category}</Badge>
          </div>

          <h1 ref={titleRef} className="mt-6 font-display text-4xl font-semibold uppercase leading-[1.05] tracking-tight text-foam md:text-5xl">
            {article.title}
          </h1>
        </div>

        <div className="container-edge mt-10 max-w-4xl">
          <div className="relative aspect-[16/8] w-full overflow-hidden">
            <Image src={article.image} alt={article.imageAlt} fill priority className="object-cover" />
          </div>
        </div>
      </section>

      <section className="section-pad bg-graphite-950">
        <div className="container-edge max-w-3xl">
          <div className="space-y-6">
            {article.content.map((paragraph, i) => (
              <p key={i} className="text-base leading-relaxed text-muted md:text-lg">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-graphite-900/60">
        <div className="container-edge">
          <h2 className="mb-10 font-display text-2xl font-semibold uppercase tracking-tight text-foam">
            Outros artigos
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {related.map((item) => (
              <ArticleCard key={item.slug} {...item} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
