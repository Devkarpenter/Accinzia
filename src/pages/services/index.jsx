import { useNavigate } from "react-router-dom";

export default function ServicesIndex() {
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
      title: "Certificates",
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
  ];

  return (
    <section className="pt-36 pb-28">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-20">
          <p className="tracking-[0.35em] font-semibold text-[#00b3b6] mb-4">
            OUR SERVICES
          </p>

          <div className="w-32 h-[2px] bg-[#00b3b6] mx-auto mb-6 shadow-[0_0_20px_#00b3b6]" />

          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            End-to-end business services designed to launch, protect, and scale
            your company with confidence.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              onClick={() => navigate(service.path)}
              className="
                group cursor-pointer
                rounded-2xl p-8
                bg-gradient-to-br from-slate-900/70 to-slate-950/80
                backdrop-blur-xl
                border border-[#00b3b6]/25
                transition-all duration-500
                hover:-translate-y-2
                hover:border-[#00b3b6]
                hover:shadow-2xl hover:shadow-[#00b3b6]/30
              "
            >
              {/* Icon */}
              <div className="text-4xl mb-5 group-hover:scale-110 transition">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold tracking-widest text-[#00b3b6] mb-6 uppercase">
                {service.title}
              </h3>

              {/* Buttons */}
              <div className="flex flex-col gap-3">
                {service.items.map((item, i) => (
                  <button
                    key={i}
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(service.path);
                    }}
                    className="
                      flex justify-between items-center
                      px-4 py-2 rounded-lg
                      bg-white/5 border border-white/10
                      text-sm text-gray-300
                      hover:bg-[#00b3b6]/10
                      hover:border-[#00b3b6]
                      hover:text-white
                      transition-all
                    "
                  >
                    {item}
                    <span className="text-[#00b3b6]">→</span>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
