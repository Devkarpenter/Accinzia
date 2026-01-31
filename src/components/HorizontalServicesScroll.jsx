import { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

/* =====================
   Animation Variants
===================== */

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.1,
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
      duration: 1.2,
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
      duration: 1.2,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function HorizontalServicesScroll() {
  const scrollRef = useRef(null);
  const animationRef = useRef(null);
  const [paused, setPaused] = useState(false);

  const services = [
    {
      title: "Private Limited Company",
      description: "Register and establish your private limited company with full legal compliance.",
      icon: "🏢",
      path: "/services/company-incorporation",
    },
    {
      title: "One Person Company",
      description: "Start your OPC with minimal formalities and solo ownership benefits.",
      icon: "👤",
      path: "/services/company-incorporation",
    },
    {
      title: "Limited Liability Partnership",
      description: "Flexible partnership with corporate-level liability protection.",
      icon: "🤝",
      path: "/services/company-incorporation",
    },
    {
      title: "Sole Proprietorship",
      description: "Simplified registration for individual entrepreneurs.",
      icon: "📋",
      path: "/services/company-incorporation",
    },
    {
      title: "Startup India Certification",
      description: "Unlock tax exemptions, funding access, and government benefits.",
      icon: "🚀",
      path: "/services/startup-india",
    },
    {
      title: "Seed Fund Application",
      description: "End-to-end support for startup seed fund applications.",
      icon: "💰",
      path: "/services/startup-india",
    },
    {
      title: "Tax Exemption Planning",
      description: "Smart tax planning and compliance strategies.",
      icon: "📊",
      path: "/services/compliances",
    },
    {
      title: "Trademark Registration",
      description: "Protect your brand with expert trademark services.",
      icon: "™️",
      path: "/services/trademark",
    },
  ];

  const items = [...services, ...services];

  /* =====================
     Auto Scroll Logic
  ===================== */
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const animate = () => {
      if (!paused) {
        container.scrollLeft += 0.6;
        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft = 0;
        }
      }
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationRef.current);
  }, [paused]);

  return (
    <section
      className="reveal py-24"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="max-w-7xl mx-auto px-4">

        {/* ================= Heading ================= */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent tracking-wider">
              OUR SERVICES
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Business-focused services crafted to help you launch, protect, and scale with confidence.
          </p>
        </motion.div>

        {/* ================= Scroll Container ================= */}
        <div
          ref={scrollRef}
          className="flex gap-8 px-2 pt-8 pb-14 no-scrollbar"
        >
          {items.map((service, index) => (
            <motion.div
              key={index}
              variants={index % 2 === 0 ? fromLeft : fromRight}
              initial="hidden"
              animate="show"
              whileHover={{ y: -8 }}
              transition={{ duration: 0.4 }}
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
              className="
                flex-shrink-0 w-80 rounded-2xl
                bg-gradient-to-br from-slate-800/80 to-slate-900/80
                border border-white/10 backdrop-blur-xl
                p-8
                hover:shadow-2xl hover:shadow-blue-500/20
              "
            >
              <div className="text-4xl mb-4">{service.icon}</div>

              <h3 className="text-xl font-semibold text-white mb-3">
                {service.title}
              </h3>

              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                {service.description}
              </p>

              <Link
                to={service.path}
                className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium transition"
              >
                Learn more →
              </Link>
            </motion.div>
          ))}
        </div>

        {/* ================= Helper Text ================= */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="text-center text-gray-500 text-sm mt-6"
        >
          Auto-scroll pauses on hover • Click a card to explore
        </motion.p>
      </div>

      {/* ================= Scrollbar Kill ================= */}
      <style>{`
        .no-scrollbar {
          overflow-x: scroll;
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
