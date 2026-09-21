import { Header } from "@/components/organisms/Header";
import { ArticleDetailBody } from "@/components/organisms/ArticleDetailBody";
import { CtaBanner } from "@/components/organisms/CtaBanner";
import { Footer } from "@/components/organisms/Footer";
import type { ArtigoDetalheTemplateProps } from "./ArtigoDetalheTemplate.types";

export function ArtigoDetalheTemplate({ article }: ArtigoDetalheTemplateProps) {
  return (
    <>
      <Header />
      <main>
        <ArticleDetailBody article={article} />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
