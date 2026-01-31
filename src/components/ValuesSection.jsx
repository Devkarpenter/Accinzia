import { motion } from "framer-motion";

/* =====================
   Calm Animation Variants
===================== */

const sectionFade = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 1.2, ease: "easeOut" },
  },
};

const cardFade = {
  hidden: { opacity: 0, y: 30, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function ValuesSection() {
  const values = [
    {
      title: "Trust",
      description:
        "Trust is the foundation of every successful business relationship. It builds long-term connections with clients, employees, and partners, ensuring loyalty and growth.",
      icon: "🤝",
      gradient: "from-blue-400 to-cyan-400",
    },
    {
      title: "Integrity",
      description:
        "We believe every successful business is built on strong Integrity, where honesty and transparency guide every step.",
      icon: "🎯",
      gradient: "from-purple-400 to-pink-400",
    },
    {
      title: "Innovation",
      description:
        "Our commitment to Innovation ensures we bring fresh ideas and smart solutions tailored to your needs.",
      icon: "💡",
      gradient: "from-green-400 to-emerald-400",
    },
    {
      title: "Customer-Centricity",
      description:
        "We put clients at the heart of everything, delivering services that truly add value to your business.",
      icon: "👥",
      gradient: "from-orange-400 to-red-400",
    },
    {
      title: "Excellence",
      description:
        "We strive to deliver nothing less than the best in every aspect of our work and service delivery.",
      icon: "⭐",
      gradient: "from-yellow-400 to-orange-400",
    },
    {
      title: "Sustainability",
      description:
        "Our focus on Sustainability drives us to build solutions that are future-ready and responsible.",
      icon: "🌱",
      gradient: "from-green-500 to-blue-500",
    },
  ];

  return (
    <section className="reveal relative w-full py-24 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* ================= Header ================= */}
        <motion.div
          variants={sectionFade}
          initial="hidden"
          animate="show"
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              OUR CORE VALUES
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            At Accinzia, we believe in building businesses on strong principles
            that drive success and lasting relationships.
          </p>
        </motion.div>

        {/* ================= Values Grid ================= */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              variants={cardFade}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="
                group bg-white/5 backdrop-blur-lg
                border border-white/10
                p-8 rounded-xl
                hover:bg-white/10
                hover:border-cyan-400/50
                hover:shadow-xl hover:shadow-cyan-500/15
                transition-colors duration-300
              "
            >
              <div className="text-5xl mb-4">{value.icon}</div>

              <h3
                className={`text-2xl font-bold mb-3 bg-gradient-to-r ${value.gradient} bg-clip-text text-transparent`}
              >
                {value.title}
              </h3>

              <p className="text-gray-300 leading-relaxed">
                {value.description}
              </p>

              <div
                className={`mt-6 h-1 w-12 bg-gradient-to-r ${value.gradient}
                rounded-full group-hover:w-full transition-all duration-500`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
