import { useState } from "react";
import { motion } from "framer-motion";

/* =====================
   Animation Variants
===================== */
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const fromLeft = {
  hidden: { opacity: 0, x: -40 },
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
  hidden: { opacity: 0, x: 40 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for reaching out! We will get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
<<<<<<< HEAD
    <motion.main
      variants={container}
      initial="hidden"
      animate="show"
      className="flex-1 max-w-5xl mx-auto px-4 pt-26 pb-24 w-full"
    >
      {/* ================= HEADER ================= */}
      <motion.div variants={fadeUp} className="text-center mb-20">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Contact Us
          </span>
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          Have a question or need assistance? Our team is ready to help you.
        </p>
      </motion.div>
=======
    <main className="reveal flex-1 max-w-4xl mx-auto px-4 py-16 w-full">
      <h1 className="text-5xl font-bold mb-4 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Contact Us</h1>
      <p className="text-xl text-gray-300 text-center mb-12">
        Have a question? We'd love to hear from you. Get in touch with us today.
      </p>
>>>>>>> d16090f6eb0d40e5dd526a443ddb7d3338549676

      {/* ================= GRID ================= */}
      <div className="grid md:grid-cols-2 gap-14 items-start">

        {/* ========== CONTACT INFO ========== */}
        <motion.div variants={fromLeft} className="space-y-6">
          {[
            {
              title: "📍 Address",
              text: "B-521A, Plot No A-40, Sector 62, Noida, UP - 201301",
            },
            {
              title: "📧 Email",
              text: "info@accinzia.com",
            },
            {
              title: "📞 Phone",
              text: "+91-7982923446",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              className="
                bg-white/5 backdrop-blur-xl
                border border-white/10
                rounded-xl p-7
                hover:border-[#00b3b6]/40
                hover:bg-white/10
                transition
              "
            >
              <h3 className="text-xl font-semibold text-[#00b3b6] mb-2">
                {item.title}
              </h3>
              <p className="text-gray-300">{item.text}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* ========== FORM ========== */}
        <motion.form
          variants={fromRight}
          onSubmit={handleSubmit}
          className="
            bg-white/5 backdrop-blur-xl
            border border-white/10
            rounded-2xl p-8
          "
        >
          {[
            { label: "Name", name: "name", type: "text", placeholder: "Your name" },
            { label: "Email", name: "email", type: "email", placeholder: "Your email" },
            { label: "Subject", name: "subject", type: "text", placeholder: "Subject" },
          ].map((field, i) => (
            <div key={i} className="mb-6">
              <label className="block text-sm font-medium text-gray-200 mb-2">
                {field.label}
              </label>
              <input
                type={field.type}
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                required
                placeholder={field.placeholder}
                className="
                  w-full px-4 py-2.5
                  bg-white/5 border border-white/10
                  rounded-lg text-white
                  focus:outline-none focus:border-[#00b3b6]
                  focus:bg-white/10
                  transition
                "
              />
            </div>
          ))}

          <div className="mb-8">
            <label className="block text-sm font-medium text-gray-200 mb-2">
              Message
            </label>
            <textarea
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Your message"
              className="
                w-full px-4 py-2.5
                bg-white/5 border border-white/10
                rounded-lg text-white
                focus:outline-none focus:border-[#00b3b6]
                focus:bg-white/10
                transition
              "
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.25 }}
            type="submit"
            className="
              w-full py-3.5 rounded-lg
              bg-gradient-to-r from-[#00b3b6] to-cyan-500
              text-white font-semibold
              shadow-lg shadow-[#00b3b6]/30
            "
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </motion.main>
  );
}
