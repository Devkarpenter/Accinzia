import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";

// Main pages
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import DiscoverUs from "./pages/DiscoverUs";
import Magazine from "./pages/Magazine";
import FAQ from "./pages/FAQ";

// ⚠️ IMPORTANT
// You DO NOT have src/pages/Services.jsx
// So we map /services to an EXISTING file
import Services from "./pages/services/StartupIndia";

// Service detail pages
import CompanyIncorporation from "./pages/services/CompanyIncorporation";
import StartupIndia from "./pages/services/StartupIndia";
import Trademark from "./pages/services/Trademark";
import Certificates from "./pages/services/Certificates";
import Compliances from "./pages/services/Compliances";
import ITAutomation from "./pages/services/ITAutomation";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        
        {/* Background glow */}
        <div className="fixed inset-0 -z-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl transform -translate-x-1/2"></div>
        </div>

        <Header />

        <Routes>
          {/* Main pages */}
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/discover" element={<DiscoverUs />} />
          <Route path="/magazine" element={<Magazine />} />
          <Route path="/faq" element={<FAQ />} />

          {/* Service detail pages */}
          <Route
            path="/services/company-incorporation"
            element={<CompanyIncorporation />}
          />
          <Route
            path="/services/startup-india"
            element={<StartupIndia />}
          />
          <Route
            path="/services/trademark"
            element={<Trademark />}
          />
          <Route
            path="/services/certificates"
            element={<Certificates />}
          />
          <Route
            path="/services/compliances"
            element={<Compliances />}
          />
          <Route
            path="/services/it-automation"
            element={<ITAutomation />}
          />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
