import { useParams } from "react-router-dom";
import { magazineArticles } from "../../../data/magazineArticles";

export default function MagazineArticle() {
  const { slug } = useParams();

  const article = magazineArticles.find(
    (item) => item.slug === slug
  );

  if (!article) {
    return (
      <div className="text-center text-white py-40">
        Article not found
      </div>
    );
  }

  return (
    <main className="max-w-4xl mx-auto px-4 py-24">
      <img
        src={article.image}
        alt={article.title}
        className="w-full h-80 object-cover rounded-xl mb-8"
      />

      <span className="text-cyan-400 text-sm">
        {article.category} • {article.readTime}
      </span>

      <h1 className="text-4xl font-bold text-white mt-4 mb-6">
        {article.title}
      </h1>

      <div
        className="prose prose-invert max-w-none text-white"
        dangerouslySetInnerHTML={{ __html: article.content }}
      />
    </main>
  );
}
