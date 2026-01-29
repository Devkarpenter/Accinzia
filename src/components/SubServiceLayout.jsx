import { useNavigate } from "react-router-dom";

export default function SubServiceLayout({
  title,
  description,
  features = [],
  ctaText = "Talk to an Expert",
}) {
  const navigate = useNavigate();

  return (
    <section className="reveal py-28">
      <div className="max-w-5xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-up">
          <h1 className="text-4xl md:text-5xl font-bold text-[#00b3b6] mb-6">
            {title}
          </h1>

          <div className="w-28 h-[2px] bg-[#00b3b6] mx-auto mb-6 animate-glow-line" />

          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            {description}
          </p>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="animate-card-in p-6 rounded-2xl
                bg-gradient-to-br from-slate-900/70 to-slate-950/80
                backdrop-blur-xl
                border border-[#00b3b6]/25
                hover:border-[#00b3b6]
                hover:shadow-xl hover:shadow-[#00b3b6]/20
                transition-all duration-300"
            >
              <h3 className="text-lg font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <button
            onClick={() => navigate("/contact")}
            className="px-8 py-3 rounded-full bg-[#00b3b6] text-black font-semibold
              hover:shadow-2xl hover:shadow-[#00b3b6]/40 transition"
          >
            {ctaText}
          </button>
        </div>
      </div>
    </section>
  );
}
