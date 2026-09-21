import Link from "next/link";
import Image from "next/image";
import { Numeral } from "@/components/atoms/Numeral";
import type { ServiceLinkCardProps } from "./ServiceLinkCard.types";

export function ServiceLinkCard({
  number,
  slug,
  title,
  shortDescription,
  image,
  imageAlt,
}: ServiceLinkCardProps) {
  return (
    <Link
      href={`/servicos/${slug}`}
      className="group flex flex-col justify-between transition-colors duration-300 hover:border-volt/60"
    >
      <div>
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-graphite-900">
          <Image
            src={image}
            alt={imageAlt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="p-7">
          <Numeral value={number} className="mb-6 block" />
          <h3 className="mb-3 font-display text-2xl font-semibold uppercase leading-tight tracking-tight text-foam">
            {title}
          </h3>
          <p className="text-sm leading-relaxed text-muted">{shortDescription}</p>
        </div>
      </div>
      <div className="mt-2 flex items-center gap-2 px-7 pb-7 font-mono text-xs uppercase tracking-[0.16em] text-muted transition-colors group-hover:text-volt-dim">
        Ver detalhes
        <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden>
          →
        </span>
      </div>
    </Link>
  );
}
