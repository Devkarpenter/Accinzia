import { motion } from "framer-motion";

/* =====================
   Animation Variants
===================== */

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const fromLeft = {
  hidden: { opacity: 0, x: -100 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.3,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const fromRight = {
  hidden: { opacity: 0, x: 100 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.3,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.22,
      delayChildren: 0.3,
    },
  },
};

export default function MagazineSection() {
  const articles = [
    {
      id: 1,
      title: "How to Register Your Startup in 2024",
      category: "Startup Guide",
      date: "Jan 15, 2024",
      image: "📰",
      excerpt:
        "A comprehensive guide on registering your startup with the latest regulations and compliance requirements.",
      readTime: "5 min read",
    },
    {
      id: 2,
      title: "Tax Optimization Strategies for Growing Businesses",
      category: "Tax Planning",
      date: "Jan 10, 2024",
      image: "💰",
      excerpt:
        "Learn effective tax planning strategies that can help reduce your tax liability and maximize profits.",
      readTime: "8 min read",
    },
    {
      id: 3,
      title: "Intellectual Property Protection: A Complete Overview",
      category: "IP Rights",
      date: "Jan 5, 2024",
      image: "🛡️",
      excerpt:
        "Understand the importance of IP protection and how to secure your trademarks, patents, and copyrights.",
      readTime: "6 min read",
    },
    {
      id: 4,
      title: "Digital Transformation for Small Businesses",
      category: "Technology",
      date: "Dec 28, 2023",
      image: "💻",
      excerpt:
        "Discover how digital tools and automation can streamline your business operations and increase efficiency.",
      readTime: "7 min read",
    },
    {
      id: 5,
      title: "GST Compliance Essentials You Must Know",
      category: "Compliance",
      date: "Dec 22, 2023",
      image: "📋",
      excerpt:
        "A detailed breakdown of GST compliance requirements and how to avoid common filing mistakes.",
      readTime: "9 min read",
    },
    {
      id: 6,
      title: "Building Strong Business Partnerships",
      category: "Business Strategy",
      date: "Dec 15, 2023",
      image: "🤝",
      excerpt:
        "Best practices for forming and maintaining successful business partnerships that create mutual growth.",
      readTime: "6 min read",
    },
  ];

  return (
    <section className="reveal relative w-full py-24 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* ================= Header ================= */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
              ACCINZIA MAGAZINE
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Insights, trends, and expert advice on business growth, compliance,
            and entrepreneurship.
          </p>
        </motion.div>

        {/* ================= Articles Grid ================= */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-14"
        >
          {articles.map((article, index) => (
            <motion.div
              key={article.id}
              variants={index % 2 === 0 ? fromLeft : fromRight}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.4 }}
              className="
                group bg-white/5 backdrop-blur-lg
                border border-white/10 rounded-xl
                overflow-hidden
                hover:border-cyan-400/50
                hover:shadow-2xl hover:shadow-cyan-500/20
              "
            >
              {/* Image / Icon */}
              <div className="
                h-40 flex items-center justify-center text-6xl
                bg-gradient-to-br from-blue-500/20 to-purple-500/20
                group-hover:from-blue-500/30 group-hover:to-purple-500/30
                transition-all duration-500
              ">
                {article.image}
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-blue-400 bg-blue-400/10 px-3 py-1 rounded-full">
                    {article.category}
                  </span>
                  <span className="text-xs text-gray-400">
                    {article.readTime}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 line-clamp-2 group-hover:text-cyan-300 transition-colors">
                  {article.title}
                </h3>

                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {article.excerpt}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <span className="text-xs text-gray-500">{article.date}</span>
                  <button className="text-blue-400 hover:text-cyan-400 font-semibold text-sm flex items-center gap-2 transition">
                    Read More
                    <span className="group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ================= CTA ================= */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="text-center"
        >
          <button
            className="
              bg-gradient-to-r from-blue-600 to-cyan-600
              hover:from-blue-700 hover:to-cyan-700
              text-white font-bold py-3.5 px-9 rounded-lg
              transition-all duration-300
              hover:shadow-lg hover:shadow-blue-500/50
            "
          >
            View All Articles
          </button>
        </motion.div>

      </div>
    </section>
  );
}
