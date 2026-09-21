import { articles } from "@/lib/content";
import { ArticleCard } from "@/components/molecules/ArticleCard";

export function ArticlesListing() {
  return (
    <section className="section-pad bg-graphite-950 pt-0">
      <div className="container-edge">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {articles.map((article) => (
            <ArticleCard key={article.slug} {...article} />
          ))}
        </div>
      </div>
    </section>
  );
}
