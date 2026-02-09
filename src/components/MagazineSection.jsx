import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { magazineArticles } from "../data/magazineArticles";

/* ===============================
   Motion Variants (Same Language)
================================ */
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const card = {
  hidden: { opacity: 0, y: 30, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function MagazineSection() {
  return (
    <section className="reveal py-2">
      <div className="max-w-7xl mx-auto px-4">

        {/* ================= Heading ================= */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-24"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent tracking-wider">
              Magazines
            </span>
          </h2>

          {/* Glow line (same as services) */}
          <div className="w-32 h-[2px] bg-[#00b3b6] mx-auto mb-8 animate-glow-line" />

          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Your journey to business success in 6 strategic steps
          </p>
        </motion.div>

        {/* ================= Grid ================= */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 auto-rows-fr"
        >
          {magazineArticles.map((article) => (
            <motion.article
              key={article.slug}
              variants={card}
              whileHover={{ y: -6 }}
              className="
                group bg-gradient-to-br from-slate-900/70 to-slate-950/80
                backdrop-blur-xl
                border border-[#00b3b6]/25
                rounded-2xl overflow-hidden
                transition-all duration-500
                hover:border-[#00b3b6]
                hover:shadow-2xl hover:shadow-[#00b3b6]/30
              "
            >
              <Link to={`/magazine/${article.slug}`}>
                <img
                  src={article.image}
                  alt={article.title}
                  className="h-52 w-full object-cover"
                />
              </Link>

              <div className="p-6 flex flex-col h-full">
                <span className="text-xs tracking-widest text-[#00b3b6] uppercase">
                  {article.category}
                </span>

                <h3 className="text-xl font-bold text-white mt-3 mb-2">
                  {article.title}
                </h3>

                <p className="text-gray-400 text-sm flex-grow">
                  {article.excerpt}
                </p>

                <Link
                  to={`/magazine/${article.slug}`}
                  className="inline-block mt-6 text-[#00b3b6] font-semibold"
                >
                  Read More →
                </Link>
              </div>

              {/* Hover overlay */}
              <span className="absolute inset-0 rounded-2xl bg-[#00b3b6]/5 opacity-0 group-hover:opacity-100 transition pointer-events-none" />
            </motion.article>
          ))}
        </motion.div>
      </div>

      {/* Same glow animation */}
      <style>{`
        @keyframes glowLine {
          0%, 100% { box-shadow: 0 0 12px rgba(0,179,182,0.4); }
          50% { box-shadow: 0 0 22px rgba(0,179,182,0.9); }
        }
        .animate-glow-line {
          animation: glowLine 2.5s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
