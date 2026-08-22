import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Heart, User, Bell, Shield, LogOut } from 'lucide-react'
import { useAuth } from '../context/AuthContext'

export default function Settings() {
  const { user, logout } = useAuth()
  const [notifications, setNotifications] = useState(true)
  const [emailUpdates, setEmailUpdates] = useState(false)

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-blush-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-charcoal mb-4">Please log in to access settings</h2>
          <Link to="/login" className="text-blush-600 hover:text-blush-700 font-medium">Login</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-blush-50 py-8">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-8">
          <Heart className="w-8 h-8 text-blush-600 fill-blush-600" />
          <h1 className="text-3xl font-bold text-charcoal" style={{ fontFamily: 'Georgia, serif' }}>
            Settings
          </h1>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-blush-100 p-6 mb-6">
          <h2 className="text-lg font-semibold text-charcoal mb-4 flex items-center gap-2">
            <User className="w-5 h-5 text-blush-600" />
            Profile Information
          </h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-charcoal mb-1">Full Name</label>
              <input
                type="text"
                defaultValue={user.name}
                className="w-full px-4 py-2 rounded-xl border border-blush-200 focus:outline-none focus:ring-2 focus:ring-blush-500"
                readOnly
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-charcoal mb-1">Email</label>
              <input
                type="email"
                defaultValue={user.email}
                className="w-full px-4 py-2 rounded-xl border border-blush-200 focus:outline-none focus:ring-2 focus:ring-blush-500"
                readOnly
              />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-blush-100 p-6 mb-6">
          <h2 className="text-lg font-semibold text-charcoal mb-4 flex items-center gap-2">
            <Bell className="w-5 h-5 text-blush-600" />
            Notifications
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-charcoal">Push Notifications</p>
                <p className="text-sm text-charcoal-light">Receive notifications about new articles and updates</p>
              </div>
              <button
                onClick={() => setNotifications(!notifications)}
                className={`w-12 h-6 rounded-full transition-colors ${notifications ? 'bg-blush-600' : 'bg-gray-300'}`}
              >
                <div className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform ${notifications ? 'translate-x-7' : 'translate-x-1'} mt-1`} />
              </button>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-charcoal">Email Updates</p>
                <p className="text-sm text-charcoal-light">Receive weekly health tips and newsletters</p>
              </div>
              <button
                onClick={() => setEmailUpdates(!emailUpdates)}
                className={`w-12 h-6 rounded-full transition-colors ${emailUpdates ? 'bg-blush-600' : 'bg-gray-300'}`}
              >
                <div className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform ${emailUpdates ? 'translate-x-7' : 'translate-x-1'} mt-1`} />
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-blush-100 p-6 mb-6">
          <h2 className="text-lg font-semibold text-charcoal mb-4 flex items-center gap-2">
            <Shield className="w-5 h-5 text-blush-600" />
            Privacy & Security
          </h2>
          <p className="text-sm text-charcoal-light mb-4">
            Your data is protected and encrypted. We never share your personal information with third parties.
          </p>
          <Link to="/privacy" className="text-sm text-blush-600 hover:text-blush-700 font-medium">
            View Privacy Policy
          </Link>
        </div>

        <button
          onClick={logout}
          className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-blush-600 text-white rounded-xl font-medium hover:bg-blush-700 transition-all duration-200"
        >
          <LogOut className="w-4 h-4" />
          Logout
        </button>
      </div>
    </div>
  )
}
