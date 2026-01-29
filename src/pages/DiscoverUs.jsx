export default function DiscoverUs() {
  return (
    <main className="flex-1 max-w-7xl mx-auto px-4 py-12 w-full">
      <h1 className="text-5xl font-bold mb-4 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Discover Us</h1>
      
      {/* About Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-blue-400">About Accinzia</h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              Accinzia is a leading technology company dedicated to delivering innovative digital solutions that transform businesses. Founded with a mission to bridge the gap between technology and business success, we have been helping organizations achieve their goals for over a decade.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Our team of passionate experts is committed to pushing the boundaries of what's possible in technology, creating solutions that are not just functional but game-changing.
            </p>
          </div>
          <div className="bg-gradient-to-br from-blue-500 to-purple-600 h-64 rounded-lg"></div>
        </div>
      </div>

      {/* Our Values */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-blue-400">Our Core Values</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-xl text-center hover:bg-white/10 hover:border-cyan-400/30 transition-all duration-300">
            <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Innovation</h3>
            <p className="text-gray-300">Constantly pushing boundaries to create cutting-edge solutions</p>
          </div>
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-xl text-center hover:bg-white/10 hover:border-purple-400/30 transition-all duration-300">
            <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Excellence</h3>
            <p className="text-gray-300">Delivering the highest quality in everything we do</p>
          </div>
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-xl text-center hover:bg-white/10 hover:border-green-400/30 transition-all duration-300">
            <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">Integrity</h3>
            <p className="text-gray-300">Building trust through honest and transparent relationships</p>
          </div>
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-xl text-center hover:bg-white/10 hover:border-orange-400/30 transition-all duration-300">
            <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">Growth</h3>
            <p className="text-gray-300">Empowering our clients and team to grow and succeed</p>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div>
        <h2 className="text-3xl font-bold mb-8 text-blue-400">Our Team</h2>
        <p className="text-gray-300 text-lg mb-8">
          Our diverse team of 50+ professionals brings expertise across various industries and technologies.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-xl text-center hover:bg-white/10 hover:border-cyan-400/30 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full mx-auto mb-4"></div>
              <h3 className="text-lg font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Team Member {i}</h3>
              <p className="text-blue-400">Specialist</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
