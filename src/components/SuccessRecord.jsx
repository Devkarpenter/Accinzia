import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { successRecords } from "../data/successRecordData";

/* =====================
   Animation Variants
===================== */

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const card = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function DiscoverUs() {
  const [activeTab, setActiveTab] = useState("completed");
  const [visibleCount, setVisibleCount] = useState(4);

  // 🔥 IMPORTANT: section-level scroll target
  const sectionRef = useRef(null);

  const filteredRecords = successRecords.filter(
    (item) => item.status === activeTab
  );

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setVisibleCount(4);

    // Scroll back to section start (tabs visible)
    setTimeout(() => {
      sectionRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
  };

  return (
    <main className="reveal flex-1 max-w-7xl mx-auto px-4 py-24 w-full">
      {/* ================= HEADER ================= */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="text-center mb-16"
      >
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          SUCCESS RECORD
        </h1>
        <p className="text-gray-300 text-lg">
          Businesses we’ve empowered with trust, strategy, and execution
        </p>
      </motion.div>

      {/* ================= SECTION START (SCROLL TARGET) ================= */}
      <div ref={sectionRef}>
        {/* ================= TABS ================= */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="flex justify-center gap-4 mb-14"
        >
          <button
            onClick={() => handleTabChange("completed")}
            className={`px-6 py-2 rounded-full font-semibold transition
              ${
                activeTab === "completed"
                  ? "bg-cyan-400 text-black"
                  : "bg-white/10 text-white hover:bg-white/20"
              }`}
          >
            Completed
          </button>

          <button
            onClick={() => handleTabChange("in_process")}
            className={`px-6 py-2 rounded-full font-semibold transition
              ${
                activeTab === "in_process"
                  ? "bg-yellow-400 text-black"
                  : "bg-white/10 text-white hover:bg-white/20"
              }`}
          >
            In Process
          </button>
        </motion.div>
      </div>

      {/* ================= CARDS ================= */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          variants={container}
          initial="hidden"
          animate="show"
          exit={{ opacity: 0 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {filteredRecords
            .slice(0, visibleCount)
            .map((record, index) => (
              <motion.div
                key={record.id}
                variants={card}
                whileHover={{ y: -6 }}
                className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 hover:border-cyan-400/50 transition"
              >
                <span className="text-sm text-gray-400">
                  #{index + 1}
                </span>

                <h3 className="text-lg font-bold text-white mt-2 mb-4">
                  {record.companyName}
                </h3>

                <div className="space-y-2 mb-4">
                  {record.services.map((service, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between bg-white/5 px-3 py-2 rounded-md"
                    >
                      <span className="text-sm text-gray-300">
                        {service}
                      </span>
                      <span className="text-green-400 font-bold">✓</span>
                    </div>
                  ))}
                </div>

                <span
                  className={`inline-block text-xs font-semibold px-3 py-1 rounded-full
                    ${
                      record.status === "completed"
                        ? "bg-green-500/20 text-green-400"
                        : "bg-yellow-500/20 text-yellow-400"
                    }`}
                >
                  {record.status === "completed"
                    ? "Completed"
                    : "In Process"}
                </span>
              </motion.div>
            ))}
        </motion.div>
      </AnimatePresence>

      {/* ================= ACTION BUTTONS ================= */}
      {filteredRecords.length > 4 && (
        <div className="flex justify-center gap-4 mt-14">
          {visibleCount < filteredRecords.length && (
            <button
              onClick={() => setVisibleCount((prev) => prev + 8)}
              className="px-8 py-3 rounded-full bg-cyan-400 text-black font-semibold hover:bg-cyan-300 transition"
            >
              Show More
            </button>
          )}

          {visibleCount > 4 && (
            <button
              onClick={() => {
                setVisibleCount(4);

                sectionRef.current?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }}
              className="px-8 py-3 rounded-full bg-white/10 text-white font-semibold hover:bg-white/20 transition"
            >
              Hide
            </button>
          )}
        </div>
      )}
    </main>
  );
}
