import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Services from './pages/Services'
import Contact from './pages/Contact'
import DiscoverUs from './pages/DiscoverUs'
import Magazine from './pages/Magazine'
import FAQ from './pages/FAQ'

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        {/* Animated gradient overlay */}
        <div className="fixed inset-0 -z-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl transform -translate-x-1/2"></div>
        </div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/discover" element={<DiscoverUs />} />
          <Route path="/magazine" element={<Magazine />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
