import { useRef, useEffect, useState } from 'react'

export default function HorizontalServicesScroll() {
  const scrollContainerRef = useRef(null)
  const [isAutoScroll, setIsAutoScroll] = useState(true)
  const animationRef = useRef(null)
  const scrollSpeedRef = useRef(1)

  const services = [
    {
      id: 1,
      title: "Private Limited Company",
      description: "Register and establish your private limited company with complete compliance and legal documentation",
      icon: "🏢"
    },
    {
      id: 2,
      title: "One Person Company",
      description: "Start your OPC with minimal formalities and solo entrepreneurship benefits",
      icon: "👤"
    },
    {
      id: 3,
      title: "Limited Liability Partnership",
      description: "Form an LLP structure combining partnership flexibility with corporate liability protection",
      icon: "🤝"
    },
    {
      id: 4,
      title: "Sole Proprietorship",
      description: "Register as a sole proprietor with simplified business setup and operations",
      icon: "📋"
    },
    {
      id: 5,
      title: "Partnership Firm",
      description: "Establish a partnership with clear agreements and legal protections",
      icon: "👥"
    },
    {
      id: 6,
      title: "Startup India Certification",
      description: "Get certified and unlock benefits including tax exemptions and funding access",
      icon: "🚀"
    },
    {
      id: 7,
      title: "Seed Fund Application",
      description: "Assistance in applying for seed funding and grants for your startup",
      icon: "💰"
    },
    {
      id: 8,
      title: "Tax Exemption Planning",
      description: "Optimize your taxes and avail exemptions available for your business structure",
      icon: "📊"
    },
    {
      id: 9,
      title: "Trademark Registration",
      description: "Protect your brand with professional trademark registration and legal support",
      icon: "™️"
    },
    {
      id: 10,
      title: "Trademark Renewal",
      description: "Renew and maintain your trademark registrations online with our expert assistance",
      icon: "🔄"
    }
  ]

  // Duplicate services for infinite scroll effect
  const infiniteServices = [...services, ...services, ...services]

  useEffect(() => {
    if (!isAutoScroll || !scrollContainerRef.current) return

    const container = scrollContainerRef.current
    const singleSetWidth = container.scrollWidth / 3 // Width of one complete set

    const animate = () => {
      if (container.scrollLeft >= singleSetWidth * 0.95) {
        container.scrollLeft = 0
      } else {
        container.scrollLeft += scrollSpeedRef.current
      }
      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [isAutoScroll])

  const scroll = (direction) => {
    const container = scrollContainerRef.current
    if (container) {
      const scrollAmount = 400
      if (direction === 'left') {
        container.scrollBy({ left: -scrollAmount, behavior: 'smooth' })
      } else {
        container.scrollBy({ left: scrollAmount, behavior: 'smooth' })
      }
    }
    // Pause auto-scroll when user manually scrolls
    setIsAutoScroll(false)
    setTimeout(() => setIsAutoScroll(true), 5000) // Resume after 5 seconds
  }

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Our Services
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Comprehensive business solutions designed to help your company grow and succeed
          </p>
        </div>

        {/* Horizontal Scroll Container */}
        <div className="relative group">
          {/* Left Scroll Button */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition transform hover:scale-110 opacity-0 group-hover:opacity-100"
            aria-label="Scroll left"
          >
            ← Scroll
          </button>

          {/* Services Container */}
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto pb-4 px-16 scrollbar-hide"
            style={{
              scrollBehavior: 'auto',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}
          >
            {infiniteServices.map((service, index) => (
              <div
                key={`${service.id}-${index}`}
                className="flex-shrink-0 w-80 bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-xl p-8 hover:border-blue-500 hover:shadow-2xl hover:shadow-blue-500/20 transition transform hover:scale-105 group cursor-pointer"
              >
                <div className="text-5xl mb-4 group-hover:scale-125 transition">{service.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed mb-4">
                  {service.description}
                </p>
                <button className="text-blue-400 hover:text-blue-300 font-semibold flex items-center gap-2 group-hover:translate-x-2 transition">
                  Learn More →
                </button>
              </div>
            ))}
          </div>

          {/* Right Scroll Button */}
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition transform hover:scale-110 opacity-0 group-hover:opacity-100"
            aria-label="Scroll right"
          >
            Scroll →
          </button>
        </div>

        {/* Info Text */}
        <p className="text-center text-gray-500 text-sm mt-8">
          Auto-scrolling services • Hover over the section to see manual scroll buttons
        </p>
      </div>

      {/* Custom Scrollbar Styling - Hidden */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  )
}
