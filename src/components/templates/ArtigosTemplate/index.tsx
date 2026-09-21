import { Header } from "@/components/organisms/Header";
import { PageHero } from "@/components/organisms/PageHero";
import { ArticlesListing } from "@/components/organisms/ArticlesListing";
import { CtaBanner } from "@/components/organisms/CtaBanner";
import { Footer } from "@/components/organisms/Footer";
import { articlesPage } from "@/lib/content";

export function ArtigosTemplate() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow={articlesPage.eyebrow}
          title={articlesPage.title}
          description={articlesPage.description}
        />
        <ArticlesListing />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
