import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Footer() {
  return (
    <motion.footer
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="relative mt-32 w-full overflow-hidden"
    >
      {/* Subtle top glow */}
      <div className="absolute inset-x-0 -top-24 h-24 bg-gradient-to-t from-transparent via-cyan-500/10 to-transparent blur-2xl pointer-events-none" />

      {/* Glass Background */}
      <div className="
        w-full bg-white/10 backdrop-blur-xl
        border-t border-white/20
        shadow-[0_-12px_40px_rgba(0,0,0,0.35)]
      ">
        <div className="max-w-7xl mx-auto px-6 py-12">

          {/* Top Grid */}
          <motion.div
            variants={container}
            className="grid grid-cols-1 md:grid-cols-3 gap-12"
          >
            {/* Brand */}
            <motion.div variants={item} className="space-y-4">
              <h2 className="text-xl font-semibold text-white tracking-wide">
                Accinzia
              </h2>
              <p className="text-sm text-white/70 leading-relaxed max-w-sm">
                Empowering businesses with modern, scalable, and compliant
                digital solutions — built on trust, integrity, and innovation.
              </p>
            </motion.div>

            {/* Company */}
            <motion.div variants={item}>
              <h3 className="text-sm font-semibold text-white mb-5 tracking-wider">
                COMPANY
              </h3>
              <ul className="space-y-3 text-sm text-white/70">
                {[
                  { label: "Discover Us", to: "/discover" },
                  { label: "Services", to: "/services" },
                  { label: "Magazine", to: "/magazine" },
                ].map((item) => (
                  <li key={item.label}>
                    <Link
                      to={item.to}
                      className="group inline-flex items-center gap-2 hover:text-cyan-400 transition-colors duration-300"
                    >
                      <span>{item.label}</span>
                      <span className="w-0 h-[1px] bg-cyan-400 group-hover:w-6 transition-all duration-300" />
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Support */}
            <motion.div variants={item}>
              <h3 className="text-sm font-semibold text-white mb-5 tracking-wider">
                SUPPORT
              </h3>
              <ul className="space-y-3 text-sm text-white/70">
                {[
                  { label: "Contact", to: "/contact" },
                  { label: "Privacy Policy", to: "#" },
                  { label: "Terms & Conditions", to: "#" },
                ].map((item) => (
                  <li key={item.label}>
                    <Link
                      to={item.to}
                      className="group inline-flex items-center gap-2 hover:text-cyan-400 transition-colors duration-300"
                    >
                      <span>{item.label}</span>
                      <span className="w-0 h-[1px] bg-cyan-400 group-hover:w-6 transition-all duration-300" />
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          {/* Divider */}
          <motion.div
            variants={item}
            className="my-10 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
          />

          {/* Bottom Bar */}
          <motion.div
            variants={item}
            className="flex flex-col md:flex-row justify-between items-center gap-6"
          >
            <p className="text-xs text-white/60 tracking-wide">
              © {new Date().getFullYear()} Accinzia. All rights reserved.
            </p>

            <div className="flex gap-6 text-sm text-white/70">
              {["LinkedIn", "Instagram", "GitHub"].map((social) => (
                <motion.span
                  key={social}
                  whileHover={{ y: -2 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="
                    cursor-pointer hover:text-cyan-400
                    transition-colors duration-300
                    relative after:absolute after:left-0 after:-bottom-1
                    after:h-[1px] after:w-0 after:bg-cyan-400
                    hover:after:w-full after:transition-all after:duration-300
                  "
                >
                  {social}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.footer>
  );
}
