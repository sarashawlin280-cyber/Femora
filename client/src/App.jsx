import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Login from './pages/Login'
import MenstrualHealth from './pages/MenstrualHealth'
import MaternalCare from './pages/MaternalCare'
import MentalWellness from './pages/MentalWellness'
import NutritionFitness from './pages/NutritionFitness'
import CycleTracker from './pages/CycleTracker'
import FAQ from './pages/FAQ'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/menstrual-health" element={<MenstrualHealth />} />
          <Route path="/maternal-care" element={<MaternalCare />} />
          <Route path="/mental-wellness" element={<MentalWellness />} />
          <Route path="/nutrition-fitness" element={<NutritionFitness />} />
          <Route path="/cycle-tracker" element={<CycleTracker />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
