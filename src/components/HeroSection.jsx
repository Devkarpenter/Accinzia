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

const fromLeft = {
  hidden: { opacity: 0, x: -80 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const fromRight = {
  hidden: { opacity: 0, x: 80 },
  show: {
    opacity: 1,
    x: 0,
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
      staggerChildren: 0.2,
    },
  },
};

/* =====================
   Main Hero Section
===================== */
export default function HeroSection() {
  return (
    <section className="pt-32 pb-40 px-4 min-h-[calc(100svh-5rem)] flex items-center relative">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-14 items-center">

          {/* ================= LEFT CONTENT ================= */}
          <motion.div
            variants={fromLeft}
            initial="hidden"
            animate="show"
            className="space-y-7"
          >
            <motion.h1
              variants={fadeUp}
              className="text-5xl md:text-6xl font-bold leading-tight"
            >
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Accinzia
              </span>
              <br />
              <span className="text-white">
                Your Business Excellence Partner
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-xl text-gray-300 leading-relaxed"
            >
              Accinzia is a professional consultancy firm dedicated to empowering
              businesses of all sizes. We provide comprehensive business services
              built on the foundation of{" "}
              <span className="text-blue-400 font-semibold">
                Trust, Integrity, and Innovation
              </span>.
            </motion.p>

            <motion.div
              variants={stagger}
              initial="hidden"
              animate="show"
              className="space-y-4 pt-6"
            >
              <h2 className="text-2xl font-bold text-white">
                What We Do
              </h2>

              <ul className="space-y-4 text-gray-300">
                {[
                  "Business Registration & Compliance Services (Private Limited, OPC, LLP, Partnership)",
                  "Startup India Certification & Seed Fund Applications",
                  "Intellectual Property Protection (Trademark Registration & Renewal)",
                  "Tax Optimization & Financial Planning",
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    variants={fadeUp}
                    whileHover={{ x: 8 }}
                    className="flex items-start gap-3"
                  >
                    <span className="text-blue-400 font-bold">✓</span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* CTA Button */}
            <motion.button
              variants={fadeUp}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.3 }}
              className="
                mt-10
                bg-gradient-to-r from-blue-600 to-purple-600
                hover:from-blue-700 hover:to-purple-700
                text-white font-bold py-3.5 px-9 rounded-lg
              "
            >
              Get Started Today
            </motion.button>
          </motion.div>

          {/* ================= RIGHT CONTENT ================= */}
          <motion.div
            variants={fromRight}
            initial="hidden"
            animate="show"
            className="space-y-7"
          >
            {/* Core Values Card */}
            <motion.div
              whileHover={{ scale: 1.015 }}
              transition={{ duration: 0.3 }}
              className="
                bg-white/10 backdrop-blur-xl
                border border-white/20
                rounded-2xl p-9
              "
            >
              <h3 className="text-2xl font-bold text-blue-400 mb-5">
                Our Core Values
              </h3>

              <div className="space-y-4">
                {[
                  ["🎯 INTEGRITY", "Honesty and transparency guide every step of our work"],
                  ["💡 INNOVATION", "Fresh ideas and smart solutions tailored to your needs"],
                  ["👥 CUSTOMER-CENTRIC", "Clients at the heart of everything we deliver"],
                  ["⭐ EXCELLENCE", "Commitment to delivering nothing less than the best"],
                ].map(([title, desc], i) => (
                  <div key={i}>
                    <h4 className="font-semibold text-white mb-2">
                      {title}
                    </h4>
                    <p className="text-gray-300">
                      {desc}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Contact Card */}
            <motion.div
              whileHover={{ scale: 1.015 }}
              transition={{ duration: 0.3 }}
              className="
                bg-white/10 backdrop-blur-xl
                border border-white/20
                rounded-2xl p-9
              "
            >
              <h4 className="text-lg font-bold text-white mb-4">
                📍 Location
              </h4>
              <p className="text-gray-300 mb-5">
                B-521A, Plot No A-40, Sector 62, Noida, UP - 201301
              </p>

              <h4 className="text-lg font-bold text-white mb-4">
                📞 Contact
              </h4>
              <p className="text-gray-300 mb-2">
                Phone:{" "}
                <a
                  href="tel:+917982923446"
                  className="text-blue-400 hover:text-blue-300"
                >
                  +91-7982923446
                </a>
              </p>
              <p className="text-gray-300">
                Email:{" "}
                <a
                  href="mailto:info@accinzia.com"
                  className="text-blue-400 hover:text-blue-300"
                >
                  info@accinzia.com
                </a>
              </p>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
