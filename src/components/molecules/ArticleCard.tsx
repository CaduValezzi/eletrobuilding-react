import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/atoms/Badge";

type ArticleCardProps = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readingTime: string;
  image: string;
  imageAlt: string;
};

function formatDate(dateStr: string) {
  const date = new Date(`${dateStr}T00:00:00`);
  return date.toLocaleDateString("pt-BR", { day: "2-digit", month: "short", year: "numeric" });
}

export function ArticleCard({
  slug,
  title,
  excerpt,
  category,
  date,
  readingTime,
  image,
  imageAlt,
}: ArticleCardProps) {
  return (
    <Link
      href={`/artigos/${slug}`}
      className="group flex flex-col justify-between border border-line transition-colors duration-300 hover:border-volt/60"
    >
      <div>
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-graphite-900">
          <Image
            src={image}
            alt={imageAlt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="p-7">
          <div className="mb-5 flex items-center justify-between">
            <Badge>{category}</Badge>
            <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
              {readingTime}
            </span>
          </div>
          <h3 className="mb-3 font-display text-2xl font-semibold uppercase leading-tight tracking-tight text-foam">
            {title}
          </h3>
          <p className="text-sm leading-relaxed text-muted">{excerpt}</p>
        </div>
      </div>
      <div className="flex items-center justify-between px-7 pb-7">
        <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
          {formatDate(date)}
        </span>
        <span className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-muted transition-colors group-hover:text-volt-dim">
          Ler artigo
          <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden>
            →
          </span>
        </span>
      </div>
    </Link>
  );
}
