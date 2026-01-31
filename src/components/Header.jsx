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

  /* Handle nested routes */
  const getActivePath = () => {
    if (location.pathname.startsWith("/services")) return "/services";
    return location.pathname;
  };

  /* Smooth underline motion */
  useEffect(() => {
    if (!navRef.current || !underlineRef.current) return;

    const activePath = getActivePath();
    const activeLink = navRef.current.querySelector(
      `a[href="${activePath}"]`
    );

    if (activeLink) {
      const { offsetLeft, offsetWidth } = activeLink;
      underlineRef.current.style.width = `${offsetWidth}px`;
      underlineRef.current.style.transform = `translateX(${offsetLeft}px)`;
      underlineRef.current.style.opacity = "1";
    }
  }, [location.pathname]);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-5 left-0 w-full z-50"
    >
      {/* ================= NAV BAR ================= */}
      <nav
        className="
          mx-auto max-w-5xl px-6 py-3
          flex justify-between items-center
          rounded-full
          bg-white/10 backdrop-blur-xl
          border border-white/20
          shadow-lg shadow-black/20
        "
      >
        {/* Logo */}
        <Link
          to="/"
          className="text-xl font-semibold tracking-wide text-white hover:text-cyan-400 transition"
        >
          Accinzia
        </Link>

        {/* ================= Desktop Nav ================= */}
        <div className="relative hidden md:block">
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
                      isActive || getActivePath() === item.path
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
          whileTap={{ scale: 0.9 }}
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-[5px] p-2"
        >
          <motion.span
            animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="h-[2px] w-6 bg-white"
          />
          <motion.span
            animate={open ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.2 }}
            className="h-[2px] w-6 bg-white"
          />
          <motion.span
            animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="h-[2px] w-6 bg-white"
          />
        </motion.button>
      </nav>

      {/* ================= Mobile Menu ================= */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="
              md:hidden absolute left-1/2 -translate-x-1/2 mt-3
              w-[92%] max-w-md
              rounded-2xl
              bg-slate-900/90 backdrop-blur-xl
              border border-white/15
              shadow-xl
            "
          >
            <ul className="flex flex-col divide-y divide-white/10 p-4 text-sm font-medium">
              {links.map((item) => (
                <li key={item.name}>
                  <NavLink
                    to={item.path}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `block py-3 transition-colors duration-300 ${
                        isActive || getActivePath() === item.path
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
