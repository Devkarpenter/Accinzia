import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { magazineArticles } from "../data/magazineArticles";

export default function MagazineSection() {
  return (
    <section className="w-full py-24 px-4">
      <div className="max-w-7xl mx-auto">


        <h2 className="text-5xl md:text-6xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent tracking-wider">
              ROAD MAP
            </span>
        </h2>
        <p className="text-gray-400 text-lg mb-4 text-center">
            Your journey to business success in 6 strategic steps
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {magazineArticles.map((article) => (
            <motion.article
              key={article.slug}
              whileHover={{ y: -6 }}
              className="bg-white/5 border border-white/10 rounded-xl overflow-hidden"
            >
              <Link to={`/magazine/${article.slug}`}>
                <img
                  src={article.image}
                  alt={article.title}
                  className="h-52 w-full object-cover"
                />
              </Link>

              <div className="p-6">
                <span className="text-xs text-cyan-400">
                  {article.category}
                </span>

                <h3 className="text-xl font-bold text-white mt-2">
                  {article.title}
                </h3>

                <p className="text-gray-400 text-sm mt-2">
                  {article.excerpt}
                </p>

                <Link
                  to={`/magazine/${article.slug}`}
                  className="inline-block mt-4 text-cyan-400"
                >
                  Read More →
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
