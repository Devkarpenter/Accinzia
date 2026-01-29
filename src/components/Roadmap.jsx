export default function Roadmap() {
  const roadmapItems = [
    {
      number: 1,
      title: "Roadmap to Incorporation",
      description: "Register your business and choose the right company structure.",
    },
    {
      number: 2,
      title: "Your Digital Identity",
      description: "Domain, website, and professional email setup.",
    },
    {
      number: 3,
      title: "Strategic Research & Business Development",
      description: "Market analysis and growth planning.",
    },
    {
      number: 4,
      title: "Digital Marketing",
      description: "Branding and online marketing strategies.",
    },
    {
      number: 5,
      title: "Legal & Banking Support",
      description: "GST, accounting, and compliance setup.",
    },
    {
      number: 6,
      title: "Sales Growth & Hiring",
      description: "Team building and scaling operations.",
    },
  ];

  return (
    <section className="relative w-full py-20 px-4 overflow-hidden">
      {/* Add keyframe animation styles */}
      <style jsx>{`
        @keyframes dash-horizontal {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 40px 0;
          }
        }
        
        @keyframes dash-vertical {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 0 40px;
          }
        }
        
        .animate-dash-horizontal {
          background-image: repeating-linear-gradient(
            to right,
            rgba(34, 211, 238, 0.8) 0px,
            rgba(34, 211, 238, 0.8) 10px,
            transparent 10px,
            transparent 20px
          );
          background-size: 40px 2px;
          animation: dash-horizontal 1s linear infinite;
        }
        
        .animate-dash-vertical {
          background-image: repeating-linear-gradient(
            to bottom,
            rgba(34, 211, 238, 0.8) 0px,
            rgba(34, 211, 238, 0.8) 10px,
            transparent 10px,
            transparent 20px
          );
          background-size: 2px 40px;
          animation: dash-vertical 1s linear infinite;
        }
      `}</style>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent tracking-wider">
              ROAD MAP
            </span>
          </h2>
          <p className="text-gray-400 text-lg">
            Your journey to business success in 6 strategic steps
          </p>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block relative">
          {roadmapItems.map((item, index) => {
            const isLeft = index % 2 === 0;
            const isLast = index === roadmapItems.length - 1;

            return (
              <div key={item.number} className="relative mb-32 last:mb-0">
                {/* Main Grid */}
                <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-8">
                  {/* Left Content */}
                  <div className={`${isLeft ? 'block' : 'invisible'}`}>
                    <div className="flex justify-end">
                      <Card item={item} isLeft={true} />
                    </div>
                  </div>

                  {/* Center Circle */}
                  <div className="relative flex flex-col items-center">
                    {/* Glow Effect */}
                    <div className="absolute w-20 h-20 bg-cyan-500/20 rounded-full blur-xl animate-pulse" />
                    
                    {/* Circle */}
                    <div className="relative w-16 h-16 bg-gradient-to-br from-cyan-400 via-blue-500 to-cyan-600 rounded-full flex items-center justify-center border-4 border-cyan-300/50 shadow-2xl shadow-cyan-500/50 z-10">
                      <span className="text-white font-bold text-xl">
                        {item.number}
                      </span>
                    </div>

                    {/* Animated Vertical Dotted Line to Next Item */}
                    {!isLast && (
                      <div className="absolute top-16 left-1/2 -translate-x-1/2 w-1 h-32 animate-dash-vertical" />
                    )}
                  </div>

                  {/* Right Content */}
                  <div className={`${!isLeft ? 'block' : 'invisible'}`}>
                    <div className="flex justify-start">
                      <Card item={item} isLeft={false} />
                    </div>
                  </div>
                </div>

                {/* Animated Horizontal Dotted Line from Circle to Card */}
                <div className="absolute top-8 left-1/2 -translate-y-1/2">
                  {isLeft ? (
                    // Animated line going left
                    <div className="absolute right-8 w-24 h-0.5 animate-dash-horizontal" />
                  ) : (
                    // Animated line going right
                    <div className="absolute left-8 w-24 h-0.5 animate-dash-horizontal" />
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile Timeline */}
        <div className="lg:hidden space-y-8">
          {roadmapItems.map((item, index) => {
            const isLast = index === roadmapItems.length - 1;

            return (
              <div key={item.number} className="relative flex gap-6">
                {/* Left Side - Circle and Line */}
                <div className="relative flex flex-col items-center">
                  {/* Glow */}
                  <div className="absolute w-16 h-16 bg-cyan-500/20 rounded-full blur-lg animate-pulse" />
                  
                  {/* Circle */}
                  <div className="relative w-14 h-14 bg-gradient-to-br from-cyan-400 via-blue-500 to-cyan-600 rounded-full flex items-center justify-center border-4 border-cyan-300/50 shadow-xl shadow-cyan-500/50 z-10 shrink-0">
                    <span className="text-white font-bold text-lg">
                      {item.number}
                    </span>
                  </div>

                  {/* Animated Vertical Line */}
                  {!isLast && (
                    <div className="w-1 flex-1 mt-2 min-h-[80px] animate-dash-vertical" />
                  )}
                </div>

                {/* Right Side - Card */}
                <div className="flex-1 pb-8">
                  {/* Animated Horizontal Dotted Line */}
                  <div className="relative h-7 mb-2">
                    <div className="absolute top-1/2 -translate-y-1/2 w-6 h-0.5 animate-dash-horizontal" />
                  </div>
                  <MobileCard item={item} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* Desktop Card Component */
function Card({ item, isLeft }) {
  return (
    <div
      className={`relative max-w-md ${isLeft ? 'mr-8' : 'ml-8'}`}
    >
      <div className="bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-xl border-2 border-cyan-500/30 rounded-2xl p-8 hover:border-cyan-400/70 hover:shadow-2xl hover:shadow-cyan-500/30 transition-all duration-500 group">
        {/* Corner Accent */}
        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-cyan-500/20 to-transparent rounded-bl-3xl rounded-tr-2xl" />
        
        <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-300 via-blue-300 to-cyan-400 bg-clip-text text-transparent mb-4 relative z-10">
          {item.title}
        </h3>
        <p className="text-gray-300 leading-relaxed relative z-10">
          {item.description}
        </p>

        {/* Hover Glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/5 group-hover:to-blue-500/5 rounded-2xl transition-all duration-500" />
      </div>
    </div>
  );
}

/* Mobile Card Component */
function MobileCard({ item }) {
  return (
    <div className="bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-xl border-2 border-cyan-500/30 rounded-xl p-6 hover:border-cyan-400/70 hover:shadow-xl hover:shadow-cyan-500/20 transition-all duration-300">
      <h3 className="text-xl font-bold bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent mb-3">
        {item.title}
      </h3>
      <p className="text-gray-300 text-sm leading-relaxed">
        {item.description}
      </p>
    </div>
  );
}