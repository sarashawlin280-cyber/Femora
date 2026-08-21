import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Heart } from 'lucide-react'
import toast from 'react-hot-toast'
import { useAuth } from '../context/AuthContext'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [remember, setRemember] = useState(false)
  const { login } = useAuth()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email || !password) {
      toast.error('Please fill in all fields')
      return
    }
    login(email, password)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-blush-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2 mb-6">
            <Heart className="w-8 h-8 text-blush-600 fill-blush-600" />
            <span className="text-2xl font-bold text-blush-800" style={{ fontFamily: 'Georgia, serif' }}>
              Femora
            </span>
          </Link>
          <h2 className="text-3xl font-bold text-charcoal mb-2" style={{ fontFamily: 'Georgia, serif' }}>
            Welcome Back
          </h2>
          <p className="text-charcoal-light">
            Sign in to access your personalized health dashboard
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-sm border border-blush-100">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-2">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-blush-200 focus:border-blush-500 focus:ring-2 focus:ring-blush-200 outline-none transition-all"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-charcoal mb-2">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-blush-200 focus:border-blush-500 focus:ring-2 focus:ring-blush-200 outline-none transition-all"
                placeholder="••••••••"
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <input
                  id="remember"
                  type="checkbox"
                  checked={remember}
                  onChange={(e) => setRemember(e.target.checked)}
                  className="w-4 h-4 text-blush-600 border-blush-300 rounded focus:ring-blush-500"
                />
                <label htmlFor="remember" className="text-sm text-charcoal-light">
                  Remember Me
                </label>
              </div>
              <Link to="/forgot-password" className="text-sm text-blush-600 hover:text-blush-700">
                Forgot Password?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full py-3 px-6 bg-blush-600 text-white rounded-xl font-medium hover:bg-blush-700 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Sign In
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-charcoal-light">
              Don't have an account?{' '}
              <Link to="/register" className="text-blush-600 font-medium hover:text-blush-700">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
