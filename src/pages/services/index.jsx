import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

/* =====================
   Animation Variants
===================== */

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

export default function ServicesIndex() {
  const navigate = useNavigate();

  const services = [
    {
      title: "Company Incorporation",
      icon: "🏛️",
      items: [
        "Private Limited Company",
        "One Person Company",
        "Limited Liability Partnership",
        "Sole Proprietorship",
        "Partnership Firm",
      ],
      path: "/services/company-incorporation",
    },
    {
      title: "Startup India",
      icon: "🚀",
      items: [
        "Startup India Certification",
        "Seed Fund Application",
        "Tax Exemption",
        "ZOHO Credit 1 Lakh",
        "Pitch Deck",
      ],
      path: "/services/startup-india",
    },
    {
      title: "Trademark",
      icon: "™️",
      items: [
        "Trademark Registration",
        "Trademark Renewal Online",
        "Trademark Objection",
        "Trademark Opposition",
      ],
      path: "/services/trademark",
    },
    {
      title: "Certificates",
      icon: "📜",
      items: ["ISO Certificate", "MSME Registration"],
      path: "/services/certificates",
    },
    {
      title: "Compliances",
      icon: "📑",
      items: ["GST Registration", "GST Filing", "12A & 80G"],
      path: "/services/compliances",
    },
    {
      title: "IT & AI Automation",
      icon: "🤖",
      items: ["Website Development", "AI Automation"],
      path: "/services/it-automation",
    },
  ];

  return (
    <section className="pt-26 pb-32 px-4">
      <div className="max-w-7xl mx-auto">

        {/* ================= HEADER ================= */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="text-center mb-24"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent tracking-wide">
              OUR SERVICES
            </span>
          </h1>

          <div className="w-32 h-[2px] bg-[#00b3b6] mx-auto mb-8 shadow-[0_0_18px_rgba(0,179,182,0.8)]" />

          <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">
            End-to-end business services crafted to help you launch, protect,
            and scale your company with confidence.
          </p>
        </motion.div>

        {/* ================= GRID ================= */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.4 }}
              onClick={() => navigate(service.path)}
              className="
                group cursor-pointer
                rounded-2xl p-8
                bg-gradient-to-br from-slate-900/70 to-slate-950/80
                backdrop-blur-xl
                border border-[#00b3b6]/25
                hover:border-[#00b3b6]
                hover:shadow-2xl hover:shadow-[#00b3b6]/30
                transition-all
              "
            >
              {/* Icon */}
              <div className="text-4xl mb-6 group-hover:scale-110 transition">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold tracking-widest text-[#00b3b6] mb-6 uppercase">
                {service.title}
              </h3>

              {/* Items */}
              <div className="flex flex-col gap-3">
                {service.items.map((item, i) => (
                  <button
                    key={i}
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(service.path);
                    }}
                    className="
                      group/item flex items-center justify-between
                      px-4 py-2 rounded-lg
                      bg-white/5 border border-white/10
                      text-sm text-gray-300
                      hover:bg-[#00b3b6]/10
                      hover:border-[#00b3b6]
                      hover:text-white
                      transition-all
                    "
                  >
                    <span>{item}</span>
                    <span className="
                      text-[#00b3b6]
                      opacity-0 translate-x-[-6px]
                      group-hover/item:opacity-100
                      group-hover/item:translate-x-0
                      transition-all
                    ">
                      →
                    </span>
                  </button>
                ))}
              </div>

              {/* Hover Glow */}
              <span className="absolute inset-0 rounded-2xl bg-[#00b3b6]/5 opacity-0 group-hover:opacity-100 transition pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
