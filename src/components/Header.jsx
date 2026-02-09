import { useState, useRef, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [open, setOpen] = useState(false);
  const underlineRef = useRef(null);
  const navRef = useRef(null);
  const location = useLocation();

  const links = [
    { name: "Home", path: "/" },
    { name: "Discover Us", path: "/discover" },
    { name: "Services", path: "/services" },
    { name: "Magazine", path: "/magazine" },
    { name: "FAQ", path: "/faq" },
    { name: "Contact", path: "/contact" },
  ];

  const activePath = location.pathname.startsWith("/services")
    ? "/services"
    : location.pathname;

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const updateUnderline = () => {
      if (!navRef.current || !underlineRef.current) return;

      const activeLink = navRef.current.querySelector(
        `a[href="${activePath}"]`
      );

      if (activeLink) {
        const { offsetLeft, offsetWidth } = activeLink;
        underlineRef.current.style.width = `${offsetWidth}px`;
        underlineRef.current.style.transform = `translateX(${offsetLeft}px)`;
        underlineRef.current.style.opacity = "1";
      }
    };

    updateUnderline();
    window.addEventListener("resize", updateUnderline);
    return () => window.removeEventListener("resize", updateUnderline);
  }, [activePath]);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-4 left-0 w-full z-50 px-4"
    >
      {/* ================= NAV BAR ================= */}
      <nav
        className="
          relative
          mx-auto max-w-6xl
          px-6 py-3
          flex justify-between items-center
          rounded-full
          backdrop-blur-2xl
          bg-black/40
          border border-white/20
          shadow-lg shadow-black/30
        "
      >
        {/* Overlay for better contrast */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/5 via-white/0 to-white/5 pointer-events-none" />

        {/* Logo */}
        <Link
          to="/"
          className="relative z-10 text-xl font-semibold tracking-wide text-white hover:text-cyan-400 transition"
        >
          Accinzia
        </Link>

        {/* ================= Desktop Nav ================= */}
        <div className="relative z-10 hidden md:block">
          <ul
            ref={navRef}
            className="flex gap-8 text-sm font-medium text-white/90 relative"
          >
            {links.map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `px-1 py-2 transition-colors duration-300 ${
                      isActive || activePath === item.path
                        ? "text-cyan-400"
                        : "hover:text-cyan-400"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}

            {/* Sliding underline */}
            <span
              ref={underlineRef}
              className="
                absolute bottom-0 left-0 h-[2px]
                bg-gradient-to-r from-cyan-400 to-blue-400
                rounded-full
                shadow-[0_0_12px_rgba(0,179,182,0.9)]
                transition-[transform,width]
                duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
                opacity-0
              "
            />
          </ul>
        </div>

        {/* ================= Mobile Hamburger ================= */}
        <motion.button
          aria-label="Toggle menu"
          aria-expanded={open}
          whileTap={{ scale: 0.9 }}
          onClick={() => setOpen((v) => !v)}
          className="relative z-10 md:hidden flex flex-col gap-[5px] p-2"
        >
          <motion.span
            animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            className="h-[2px] w-6 bg-white"
          />
          <motion.span
            animate={open ? { opacity: 0 } : { opacity: 1 }}
            className="h-[2px] w-6 bg-white"
          />
          <motion.span
            animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            className="h-[2px] w-6 bg-white"
          />
        </motion.button>
      </nav>

      {/* ================= Mobile Menu ================= */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3 }}
            className="
              md:hidden mt-3
              mx-auto max-w-6xl
              rounded-2xl
              backdrop-blur-2xl
              bg-black/70
              border border-white/20
              shadow-xl
              overflow-hidden
            "
          >
            <ul className="flex flex-col divide-y divide-white/10 p-4 text-sm font-medium">
              {links.map((item) => (
                <li key={item.name}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `block py-3 ${
                        isActive || activePath === item.path
                          ? "text-cyan-400"
                          : "text-white/90 hover:text-cyan-300"
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
