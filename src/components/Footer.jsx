export default function Footer() {
  return (
    <footer className="relative mt-32 w-full">
      {/* Glass Background */}
      <div
        className="
          w-full
          bg-white/10
          backdrop-blur-xl
          border-t
          border-white/20
          shadow-[0_-10px_30px_rgba(0,0,0,0.2)]
        "
      >
        {/* Content Container */}
        <div className="max-w-7xl mx-auto px-6 py-10">
          <div className="flex flex-col md:flex-row justify-between gap-10">
            {/* Brand */}
            <div>
              <h2 className="text-xl font-semibold text-white tracking-wide">
                Accinzia
              </h2>
              <p className="mt-3 text-sm text-white/70 max-w-sm">
                Building modern, scalable, and high-performance digital
                solutions with cutting-edge technology.
              </p>
            </div>

            {/* Links */}
            <div className="flex gap-20">
              <div>
                <h3 className="text-sm font-semibold text-white mb-4">
                  Company
                </h3>
                <ul className="space-y-2 text-sm text-white/70">
                  <li className="hover:text-blue-400 transition cursor-pointer">
                    About
                  </li>
                  <li className="hover:text-blue-400 transition cursor-pointer">
                    Services
                  </li>
                  <li className="hover:text-blue-400 transition cursor-pointer">
                    Careers
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-white mb-4">
                  Support
                </h3>
                <ul className="space-y-2 text-sm text-white/70">
                  <li className="hover:text-blue-400 transition cursor-pointer">
                    Contact
                  </li>
                  <li className="hover:text-blue-400 transition cursor-pointer">
                    Privacy Policy
                  </li>
                  <li className="hover:text-blue-400 transition cursor-pointer">
                    Terms & Conditions
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="my-8 h-px bg-white/20" />

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-white/60">
              © {new Date().getFullYear()} Accinzia. All rights reserved.
            </p>

            <div className="flex gap-6 text-sm text-white/70">
              <span className="hover:text-blue-400 transition cursor-pointer">
                LinkedIn
              </span>
              <span className="hover:text-blue-400 transition cursor-pointer">
                Instagram
              </span>
              <span className="hover:text-blue-400 transition cursor-pointer">
                GitHub
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
