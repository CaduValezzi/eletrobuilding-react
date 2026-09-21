import { Header } from "@/components/organisms/Header";
import { ArticleDetailBody } from "@/components/organisms/ArticleDetailBody";
import { CtaBanner } from "@/components/organisms/CtaBanner";
import { Footer } from "@/components/organisms/Footer";
import type { Article } from "@/lib/content";

export function ArtigoDetalheTemplate({ article }: { article: Article }) {
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
