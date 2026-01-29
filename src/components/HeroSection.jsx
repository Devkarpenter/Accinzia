export default function HeroSection() {
  return (
    <section className="pt-32 pb-16 px-4 min-h-[600px] flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Accinzia
              </span>
              <br />
              <span className="text-white">
                Your Business Excellence Partner
              </span>
            </h1>

            <p className="text-xl text-gray-300 leading-relaxed">
              Accinzia is a professional consultancy firm dedicated to empowering businesses of all sizes. We provide comprehensive business services built on the foundation of <span className="text-blue-400 font-semibold">Trust, Integrity, and Innovation</span>.
            </p>

            <div className="space-y-4 pt-6">
              <h2 className="text-2xl font-bold text-white">What We Do</h2>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 font-bold">✓</span>
                  <span>Business Registration & Compliance Services (Private Limited, OPC, LLP, Partnership)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 font-bold">✓</span>
                  <span>Startup India Certification & Seed Fund Applications</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 font-bold">✓</span>
                  <span>Intellectual Property Protection (Trademark Registration & Renewal)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 font-bold">✓</span>
                  <span>Tax Optimization & Financial Planning</span>
                </li>
              </ul>
            </div>

            <button className="mt-8 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-lg transition transform hover:scale-105">
              Get Started Today
            </button>
          </div>

          {/* Right - Values Section */}
          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 hover:bg-white/20 transition">
              <h3 className="text-2xl font-bold text-blue-400 mb-4">Our Core Values</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-white mb-2">🎯 INTEGRITY</h4>
                  <p className="text-gray-300">Honesty and transparency guide every step of our work</p>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">💡 INNOVATION</h4>
                  <p className="text-gray-300">Fresh ideas and smart solutions tailored to your needs</p>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">👥 CUSTOMER-CENTRIC</h4>
                  <p className="text-gray-300">Clients at the heart of everything we deliver</p>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">⭐ EXCELLENCE</h4>
                  <p className="text-gray-300">Commitment to delivering nothing less than the best</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-400/30 rounded-2xl p-8">
              <h4 className="text-lg font-bold text-white mb-4">📍 Location</h4>
              <p className="text-gray-300 mb-4">B-521A, Plot No A-40, Sector 62, Noida, UP - 201301</p>
              
              <h4 className="text-lg font-bold text-white mb-4">📞 Contact</h4>
              <p className="text-gray-300 mb-2">Phone: <a href="tel:+917982923446" className="text-blue-400 hover:text-blue-300">+91-7982923446</a></p>
              <p className="text-gray-300">Email: <a href="mailto:info@accinzia.com" className="text-blue-400 hover:text-blue-300">info@accinzia.com</a></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
