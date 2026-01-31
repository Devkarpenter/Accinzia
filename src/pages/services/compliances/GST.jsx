import { useNavigate } from "react-router-dom";

export default function Compliances() {
  const navigate = useNavigate();

  const services = [
    { title: "GST Registration & Filing", path: "/services/compliances/gst" },
    { title: "Income Tax Return (ITR)", path: "/services/compliances/itr" },
    { title: "MCA Compliance", path: "/services/compliances/mca" },
    { title: "Book Keeping", path: "/services/compliances/book-keeping" },
  ];

  return (
    <section className="reveal py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h1 className="text-5xl font-bold text-[#00b3b6] mb-6">
            Compliances
          </h1>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Stay compliant with government regulations while focusing on business growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, i) => (
            <button
              key={i}
              onClick={() => navigate(service.path)}
              className="
                group p-8 text-left rounded-2xl
                bg-gradient-to-br from-slate-900/70 to-slate-950/80
                border border-[#00b3b6]/30
                hover:border-[#00b3b6]
                hover:-translate-y-1
                transition-all duration-500
              "
            >
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold text-white group-hover:text-[#00b3b6]">
                  {service.title}
                </h3>
                <span className="text-[#00b3b6] text-xl opacity-0 group-hover:opacity-100 transition">
                  →
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
