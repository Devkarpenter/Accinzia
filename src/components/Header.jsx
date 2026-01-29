import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="fixed top-5 left-0 w-full z-50">
      <nav
        className="
          mx-auto
          max-w-5xl
          px-6
          py-3
          flex
          justify-between
          items-center
          rounded-full
          bg-white/10
          backdrop-blur-xl
          border
          border-white/20
          shadow-lg
          shadow-black/20
        "
      >
        {/* Logo */}
        <Link to="/" className="text-xl font-semibold tracking-wide text-white hover:text-blue-400 transition-all duration-300">
          Accinzia
        </Link>

        {/* Links */}
        <ul className="flex gap-8 text-sm font-medium text-white/90">
          <li>
            <Link
              to="/"
              className="hover:text-blue-400 transition-all duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/discover"
              className="hover:text-blue-400 transition-all duration-300"
            >
              Discover Us
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className="hover:text-blue-400 transition-all duration-300"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/magazine"
              className="hover:text-blue-400 transition-all duration-300"
            >
              Magazine
            </Link>
          </li>
          <li>
            <Link
              to="/faq"
              className="hover:text-blue-400 transition-all duration-300"
            >
              FAQ
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="hover:text-blue-400 transition-all duration-300"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

