import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { articles, getArticleBySlug } from "@/constants/articles";
import { ArtigoDetalheTemplate } from "@/components/templates/ArtigoDetalheTemplate";

type ArtigoPageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export function generateMetadata({ params }: ArtigoPageProps): Metadata {
  const article = getArticleBySlug(params.slug);

  if (!article) {
    return { title: "Artigo não encontrado | Eletro Building" };
  }

  return {
    title: `${article.title} | Eletro Building`,
    description: article.excerpt,
  };
}

export default function ArtigoPage({ params }: ArtigoPageProps) {
  const article = getArticleBySlug(params.slug);

  if (!article) {
    notFound();
  }

  return <ArtigoDetalheTemplate article={article} />;
}
