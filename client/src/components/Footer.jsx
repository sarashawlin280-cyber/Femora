import { Link } from 'react-router-dom'
import { Heart, ChevronUp } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-blush-50 border-t border-blush-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Heart className="w-5 h-5 text-blush-600 fill-blush-600" />
              <span className="text-lg font-bold text-blush-800" style={{ fontFamily: 'Georgia, serif' }}>
                Femora
              </span>
            </div>
            <p className="text-sm text-charcoal-light leading-relaxed max-w-md">
              A safe and trusted space for women to learn, care for themselves, and access reliable information about menstrual health, pregnancy, mental wellness, nutrition, and a healthy lifestyle.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-blush-800 uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-sm text-charcoal-light hover:text-blush-600 transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-sm text-charcoal-light hover:text-blush-600 transition-colors">About Us</Link></li>
              <li><Link to="/menstrual-health" className="text-sm text-charcoal-light hover:text-blush-600 transition-colors">Menstrual Health</Link></li>
              <li><Link to="/maternal-care" className="text-sm text-charcoal-light hover:text-blush-600 transition-colors">Pregnancy & Maternal Care</Link></li>
              <li><Link to="/mental-wellness" className="text-sm text-charcoal-light hover:text-blush-600 transition-colors">Mental Wellness</Link></li>
              <li><Link to="/nutrition-fitness" className="text-sm text-charcoal-light hover:text-blush-600 transition-colors">Nutrition & Fitness</Link></li>
              <li><Link to="/faq" className="text-sm text-charcoal-light hover:text-blush-600 transition-colors">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-blush-800 uppercase tracking-wider mb-4">
              Account
            </h3>
            <ul className="space-y-2">
              <li><Link to="/login" className="text-sm text-charcoal-light hover:text-blush-600 transition-colors">Login</Link></li>
              <li><Link to="/register" className="text-sm text-charcoal-light hover:text-blush-600 transition-colors">Sign Up</Link></li>
              <li><Link to="/dashboard" className="text-sm text-charcoal-light hover:text-blush-600 transition-colors">My Profile</Link></li>
              <li><Link to="/cycle-tracker" className="text-sm text-charcoal-light hover:text-blush-600 transition-colors">Cycle Tracker</Link></li>
              <li><Link to="/settings" className="text-sm text-charcoal-light hover:text-blush-600 transition-colors">Settings</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-blush-800 uppercase tracking-wider mb-4">
              Support
            </h3>
            <ul className="space-y-2">
              <li><Link to="/emergency" className="text-sm text-charcoal-light hover:text-blush-600 transition-colors">Emergency Information</Link></li>
              <li><Link to="/feedback" className="text-sm text-charcoal-light hover:text-blush-600 transition-colors">Feedback</Link></li>
              <li><Link to="/feedback" className="text-sm text-charcoal-light hover:text-blush-600 transition-colors">Contact Us</Link></li>
              <li><Link to="/privacy" className="text-sm text-charcoal-light hover:text-blush-600 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-sm text-charcoal-light hover:text-blush-600 transition-colors">Terms & Conditions</Link></li>
              <li><Link to="/terms" className="text-sm text-charcoal-light hover:text-blush-600 transition-colors">Disclaimer</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-blush-200 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-charcoal-light">
            &copy; 2026 Femora. All rights reserved.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="inline-flex items-center gap-1 text-sm text-blush-600 hover:text-blush-700 transition-colors"
          >
            Back to Top <ChevronUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  )
}
