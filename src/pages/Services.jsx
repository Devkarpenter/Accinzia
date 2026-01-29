import HorizontalServicesScroll from '../components/HorizontalServicesScroll'

export default function Services() {
  const serviceCategories = [
    {
      title: "Business Registration",
      icon: "📝",
      description: "Complete setup and registration services for all business structures"
    },
    {
      title: "Startup Support",
      icon: "🚀",
      description: "Certification, funding assistance, and growth acceleration programs"
    },
    {
      title: "IP Protection",
      icon: "🛡️",
      description: "Trademark registration, renewal, and intellectual property protection"
    },
    {
      title: "Tax Planning",
      icon: "💼",
      description: "Tax optimization strategies and compliance management"
    }
  ]

  return (
    <>
      <HorizontalServicesScroll />
      <main className="flex-1 max-w-7xl mx-auto px-4 py-16 w-full">
        <h2 className="text-4xl font-bold text-center mb-12">Service Categories</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {serviceCategories.map((category, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-xl hover:bg-white/10 hover:border-blue-400/50 transition-all duration-300">
              <div className="text-4xl mb-3">{category.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">{category.title}</h3>
              <p className="text-gray-300">{category.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-xl p-8 text-center backdrop-blur-lg">
          <h3 className="text-2xl font-bold text-white mb-4">Need Custom Solutions?</h3>
          <p className="text-gray-300 mb-6">
            Contact our expert consultants to discuss your specific business needs and get a customized service plan
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition">
            Schedule a Consultation
          </button>
        </div>
      </main>
    </>
  )
}
