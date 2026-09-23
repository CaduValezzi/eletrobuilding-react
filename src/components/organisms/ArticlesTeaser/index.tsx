import { articles } from "@/constants/articles";
import { Eyebrow } from "@/components/atoms/Eyebrow";
import { SectionHeading } from "@/components/atoms/SectionHeading";
import { ArticleCard } from "@/components/molecules/ArticleCard";
import { Button } from "@/components/atoms/Button";

export function ArticlesTeaser() {
  const latest = articles.slice(0, 3);

  return (
    <section className="section-pad bg-graphite-900/40">
      <div className="container-edge">
        <div className="mb-14 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Eyebrow className="mb-5 block">Artigos</Eyebrow>
            <SectionHeading className="max-w-2xl">
              Conteúdo técnico antes de você contratar
            </SectionHeading>
          </div>
          <Button href="/artigos" variant="ghost">
            Ver todos os artigos
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {latest.map((article) => (
            <ArticleCard key={article.slug} {...article} />
          ))}
        </div>
      </div>
    </section>
  );
}
