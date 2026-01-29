import { useState, useRef, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

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

  // Move underline smoothly when route changes
  useEffect(() => {
    if (!navRef.current || !underlineRef.current) return;

    const activeLink = navRef.current.querySelector(
      `a[href="${location.pathname}"]`
    );

    if (activeLink) {
      const { offsetLeft, offsetWidth } = activeLink;
      underlineRef.current.style.width = `${offsetWidth}px`;
      underlineRef.current.style.transform = `translateX(${offsetLeft}px)`;
    }
  }, [location.pathname]);

  return (
    <header className="fixed top-5 left-0 w-full z-50">
      <nav className="mx-auto max-w-5xl px-6 py-3 flex justify-between items-center rounded-full bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg shadow-black/20">
        {/* Logo */}
        <Link
          to="/"
          className="text-xl font-semibold tracking-wide text-white hover:text-blue-400 transition"
        >
          Accinzia
        </Link>

        {/* Desktop Nav */}
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
                      isActive
                        ? "text-blue-400"
                        : "hover:text-blue-400"
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
              className="absolute bottom-0 left-0 h-[2px]
                         bg-gradient-to-r from-blue-400 to-cyan-400
                         rounded-full shadow-[0_0_10px_rgba(56,189,248,0.8)]
                         transition-all duration-300 ease-out"
            />
          </ul>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-[5px] p-2"
        >
          <span className={`h-[2px] w-6 bg-white transition ${open && "rotate-45 translate-y-[6px]"}`} />
          <span className={`h-[2px] w-6 bg-white transition ${open && "opacity-0"}`} />
          <span className={`h-[2px] w-6 bg-white transition ${open && "-rotate-45 -translate-y-[6px]"}`} />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute left-1/2 -translate-x-1/2 mt-3 w-[92%] max-w-md rounded-2xl bg-slate-900/80 backdrop-blur-xl border border-white/15 shadow-xl transition-all duration-300
        ${open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"}`}
      >
        <ul className="flex flex-col divide-y divide-white/10 p-4 text-sm font-medium">
          {links.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block py-3 transition ${
                    isActive ? "text-blue-400" : "text-white/90"
                  }`
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
