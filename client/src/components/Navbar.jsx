import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Heart, Search, Menu, X, User, LogOut, Bell, Settings } from 'lucide-react'
import { useAuth } from '../context/AuthContext'

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { user, logout } = useAuth()

  const handleLogout = () => {
    logout()
    setMobileOpen(false)
  }

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Menstrual Health', path: '/menstrual-health' },
    { name: 'Pregnancy & Maternal Care', path: '/maternal-care' },
    { name: 'Mental Wellness', path: '/mental-wellness' },
    { name: 'Nutrition & Fitness', path: '/nutrition-fitness' },
    { name: 'Cycle Tracker', path: '/cycle-tracker' },
    { name: 'Articles', path: '/articles' },
    { name: 'FAQ', path: '/faq' },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-blush-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center gap-2 group">
            <Heart className="w-6 h-6 text-blush-600 fill-blush-600 transition-transform group-hover:scale-110" />
            <span className="text-xl font-bold text-blush-800" style={{ fontFamily: 'Georgia, serif' }}>
              Femora
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-sm font-medium text-charcoal-light hover:text-blush-600 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/search"
              className="p-2 text-charcoal-light hover:text-blush-600 transition-colors"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </Link>

            {user ? (
              <div className="relative group">
                <button className="flex items-center gap-2 px-3 py-2 rounded-xl hover:bg-blush-50 transition-colors">
                  <Bell className="w-5 h-5 text-charcoal-light" />
                  <div className="w-8 h-8 rounded-full bg-blush-500 text-white flex items-center justify-center text-sm font-medium">
                    {user.name.charAt(0).toUpperCase()}
                  </div>
                  <span className="text-sm font-medium text-charcoal">{user.name}</span>
                </button>
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-blush-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="py-2">
                    <Link
                      to="/dashboard"
                      className="flex items-center gap-2 px-4 py-2 text-sm text-charcoal hover:bg-blush-50 hover:text-blush-600"
                    >
                      <User className="w-4 h-4" />
                      Profile
                    </Link>
                    <Link
                      to="/settings"
                      className="flex items-center gap-2 px-4 py-2 text-sm text-charcoal hover:bg-blush-50 hover:text-blush-600"
                    >
                      <Settings className="w-4 h-4" />
                      Settings
                    </Link>
                    {user.role === 'admin' && (
                      <Link
                        to="/admin"
                        className="flex items-center gap-2 px-4 py-2 text-sm text-charcoal hover:bg-blush-50 hover:text-blush-600"
                      >
                        Admin Panel
                      </Link>
                    )}
                    <button
                      onClick={handleLogout}
                      className="w-full flex items-center gap-2 px-4 py-2 text-sm text-charcoal hover:bg-blush-50 hover:text-blush-600"
                    >
                      <LogOut className="w-4 h-4" />
                      Logout
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <>
                <Link
                  to="/login"
                  className="px-4 py-2 text-sm font-medium text-blush-600 border border-blush-600 rounded-xl hover:bg-blush-50 transition-colors"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="px-4 py-2 text-sm font-medium text-white bg-blush-600 rounded-xl hover:bg-blush-700 transition-colors"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>

          <button
            className="lg:hidden p-2 text-charcoal"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-blush-100">
          <div className="px-4 py-3 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setMobileOpen(false)}
                className="block py-2 text-sm font-medium text-charcoal hover:text-blush-600 transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-2 border-t border-blush-100 space-y-2">
              <Link
                to="/search"
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-2 py-2 text-sm font-medium text-charcoal hover:text-blush-600"
              >
                <Search className="w-4 h-4" />
                Search
              </Link>
              {user ? (
                <>
                  <Link
                    to="/dashboard"
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-2 py-2 text-sm font-medium text-charcoal hover:text-blush-600"
                  >
                    <User className="w-4 h-4" />
                    Profile
                  </Link>
                  <Link
                    to="/settings"
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-2 py-2 text-sm font-medium text-charcoal hover:text-blush-600"
                  >
                    <Settings className="w-4 h-4" />
                    Settings
                  </Link>
                  {user.role === 'admin' && (
                    <Link
                      to="/admin"
                      onClick={() => setMobileOpen(false)}
                      className="block py-2 text-sm font-medium text-charcoal hover:text-blush-600"
                    >
                      Admin Panel
                    </Link>
                  )}
                  <button
                    onClick={handleLogout}
                    className="flex items-center gap-2 py-2 text-sm font-medium text-charcoal hover:text-blush-600"
                  >
                    <LogOut className="w-4 h-4" />
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    onClick={() => setMobileOpen(false)}
                    className="block py-2 text-sm font-medium text-blush-600"
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    onClick={() => setMobileOpen(false)}
                    className="block py-2 text-sm font-medium text-blush-600"
                  >
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
