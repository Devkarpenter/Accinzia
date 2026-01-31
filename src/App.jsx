import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import ScrollToTop from "./components/ScrollToTop";

import Header from "./components/Header";
import Footer from "./components/Footer";

/* =========================
   Main pages
========================= */
import Home from "./pages/Home";
import DiscoverUs from "./pages/DiscoverUs";
import Magazine from "./pages/Magazine";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";

/* =========================
   Services landing page
========================= */
import Services from "./pages/services";

/* =========================
   Certificates
========================= */
import Certificates from "./pages/services/certificates";
import ISO from "./pages/services/certificates/ISO";
import MSME from "./pages/services/certificates/MSME";

/* =========================
   Startup India
========================= */
import StartupIndia from "./pages/services/startup-india";
import Certification from "./pages/services/startup-india/Certification";
import SeedFund from "./pages/services/startup-india/SeedFund";
import TaxExemption from "./pages/services/startup-india/TaxExemption";
import ZohoCredit from "./pages/services/startup-india/ZohoCredit";
import PitchDeck from "./pages/services/startup-india/PitchDeck";

/* =========================
   Company Incorporation
========================= */
import CompanyIncorporation from "./pages/services/company-incorporation";
import PrivateLimited from "./pages/services/company-incorporation/PrivateLimited";
import OPC from "./pages/services/company-incorporation/OPC";
import LLP from "./pages/services/company-incorporation/LLP";
import Partnership from "./pages/services/company-incorporation/Partnership";
import SoleProprietorship from "./pages/services/company-incorporation/SoleProprietorship";

/* =========================
   Trademark
========================= */
import Trademark from "./pages/services/trademark";
import Registration from "./pages/services/trademark/Registration";
import Renewal from "./pages/services/trademark/Renewal";
import Objection from "./pages/services/trademark/Objection";
import Opposition from "./pages/services/trademark/Opposition";

/* =========================
   Compliances
========================= */
import Compliances from "./pages/services/compliances";
import GST from "./pages/services/compliances/GST";
import ITR from "./pages/services/compliances/ITR";
import MCA from "./pages/services/compliances/MCA";
import BookKeeping from "./pages/services/compliances/BookKeeping";

/* =========================
   IT & AI Automation
========================= */
import ITAutomation from "./pages/services/it-automation";
import WebDevelopment from "./pages/services/it-automation/WebDevelopment";
import AIAutomation from "./pages/services/it-automation/AIAutomation";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-[100svh]">

        {/* Background glow */}
        <div className="fixed inset-0 -z-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#00b3b6]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -translate-x-1/2"></div>
        </div>

        <Header />

        <Routes>
          {/* Main */}
          <Route path="/" element={<Home />} />
          <Route path="/discover" element={<DiscoverUs />} />
          <Route path="/magazine" element={<Magazine />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />

          {/* Services landing */}
          <Route path="/services" element={<Services />} />

          {/* Certificates */}
          <Route path="/services/certificates" element={<Certificates />} />
          <Route path="/services/certificates/iso" element={<ISO />} />
          <Route path="/services/certificates/msme" element={<MSME />} />

          {/* Startup India */}
          <Route path="/services/startup-india" element={<StartupIndia />} />
          <Route path="/services/startup-india/certification" element={<Certification />} />
          <Route path="/services/startup-india/seed-fund" element={<SeedFund />} />
          <Route path="/services/startup-india/tax-exemption" element={<TaxExemption />} />
          <Route path="/services/startup-india/zoho-credit" element={<ZohoCredit />} />
          <Route path="/services/startup-india/pitch-deck" element={<PitchDeck />} />

          {/* Company Incorporation */}
          <Route path="/services/company-incorporation" element={<CompanyIncorporation />} />
          <Route path="/services/company-incorporation/private-limited" element={<PrivateLimited />} />
          <Route path="/services/company-incorporation/opc" element={<OPC />} />
          <Route path="/services/company-incorporation/llp" element={<LLP />} />
          <Route path="/services/company-incorporation/partnership" element={<Partnership />} />
          <Route path="/services/company-incorporation/sole-proprietorship" element={<SoleProprietorship />} />

          {/* Trademark */}
          <Route path="/services/trademark" element={<Trademark />} />
          <Route path="/services/trademark/registration" element={<Registration />} />
          <Route path="/services/trademark/renewal" element={<Renewal />} />
          <Route path="/services/trademark/objection" element={<Objection />} />
          <Route path="/services/trademark/opposition" element={<Opposition />} />

          {/* Compliances */}
          <Route path="/services/compliances" element={<Compliances />} />
          <Route path="/services/compliances/gst" element={<GST />} />
          <Route path="/services/compliances/itr" element={<ITR />} />
          <Route path="/services/compliances/mca" element={<MCA />} />
          <Route path="/services/compliances/book-keeping" element={<BookKeeping />} />

          {/* IT & AI Automation */}
          <Route path="/services/it-automation" element={<ITAutomation />} />
          <Route path="/services/it-automation/web-development" element={<WebDevelopment />} />
          <Route path="/services/it-automation/ai-automation" element={<AIAutomation />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
