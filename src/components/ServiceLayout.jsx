import { Link, useNavigate } from "react-router-dom";

export default function Services() {
  const navigate = useNavigate();

  const services = [
    {
      title: "Company Incorporation",
      icon: "🏛️",
      items: [
        "Private Limited Company",
        "One Person Company",
        "Limited Liability Partnership",
        "Sole Proprietorship",
        "Partnership Firm",
      ],
      path: "/services/company-incorporation",
    },
    {
      title: "Startup India",
      icon: "🚀",
      items: [
        "Startup India Certification",
        "Seed Fund Application",
        "Tax Exemption",
        "ZOHO Credit 1 Lakh",
        "Pitch Deck",
      ],
      path: "/services/startup-india",
    },
    {
      title: "Trademark",
      icon: "™️",
      items: [
        "Trademark Registration",
        "Trademark Renewal Online",
        "Trademark Objection",
        "Trademark Opposition",
      ],
      path: "/services/trademark",
    },
    {
      title: "Certificate",
      icon: "📜",
      items: ["ISO Certificate", "MSME Registration"],
      path: "/services/certificates",
    },
    {
      title: "Compliances",
      icon: "📑",
      items: ["GST Registration", "GST Filing", "12A & 80G"],
      path: "/services/compliances",
    },
    {
      title: "IT & AI Automation",
      icon: "🤖",
      items: ["Website Development", "AI Automation"],
      path: "/services/it-automation",
    },
    {
      title: "MCA Compliances",
      icon: "⚖️",
      items: [
        "Pvt. Ltd. Compliance",
        "OPC Compliance",
        "ADT-1 Filing",
        "DIN – eKYC Filing",
        "MGT-7 Filing",
        "AOC-4 Filing",
        "AGM Report",
        "ITR",
        "Monthly Book Keeping",
        "Financial Report",
        "P&L",
        "Balance Sheet",
      ],
      path: "/services/compliances",
      tall: true,
    },
  ];

  return (
    <section className="reveal py-28">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-24 animate-fade-up">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent tracking-wider">
              OUR SERVICES
            </span>
          </h2>

          <div className="w-32 h-[2px] bg-[#00b3b6] mx-auto mb-8 animate-glow-line" />

          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            End-to-end business services designed to launch, protect, and scale
            your company with confidence.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 auto-rows-fr">
          {services.map((service, index) => (
            <div
              key={index}
              style={{ animationDelay: `${index * 80}ms` }}
              className={`group relative rounded-2xl p-8
                bg-gradient-to-br from-slate-900/70 to-slate-950/80
                backdrop-blur-xl
                border border-[#00b3b6]/25
                transition-all duration-500
                hover:-translate-y-2
                hover:border-[#00b3b6]
                hover:shadow-2xl hover:shadow-[#00b3b6]/30
                animate-card-in
                ${service.tall ? "lg:row-span-2" : ""}
              `}
              onClick={() => navigate(service.path)}
            >
              {/* Icon */}
              <div className="text-4xl mb-5 transition-transform duration-500 group-hover:scale-110">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold tracking-widest text-[#00b3b6] mb-6 uppercase">
                {service.title}
              </h3>

              {/* Action Buttons */}
              <div className="flex flex-col gap-3">
                {service.items.map((item, i) => (
                  <button
                    key={i}
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(service.path);
                    }}
                    className="
                      group/item flex items-center justify-between
                      px-4 py-2 rounded-lg
                      bg-white/5 border border-white/10
                      text-sm text-gray-300
                      hover:bg-[#00b3b6]/10
                      hover:border-[#00b3b6]
                      hover:text-white
                      transition-all duration-300
                    "
                  >
                    <span>{item}</span>
                    <span className="
                      text-[#00b3b6]
                      opacity-0 translate-x-[-6px]
                      group-hover/item:opacity-100
                      group-hover/item:translate-x-0
                      transition-all duration-300
                    ">
                      →
                    </span>
                  </button>
                ))}
              </div>

              {/* Hover overlay */}
              <span className="absolute inset-0 rounded-2xl bg-[#00b3b6]/5 opacity-0 group-hover:opacity-100 transition pointer-events-none" />
            </div>
          ))}
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes cardIn {
          from { opacity: 0; transform: translateY(30px) scale(0.96); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        @keyframes glowLine {
          0%, 100% { box-shadow: 0 0 12px rgba(0,179,182,0.4); }
          50% { box-shadow: 0 0 22px rgba(0,179,182,0.9); }
        }

        .animate-fade-up {
          animation: fadeUp 0.8s ease-out both;
        }

        .animate-card-in {
          animation: cardIn 0.7s ease-out both;
        }

        .animate-glow-line {
          animation: glowLine 2.5s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
