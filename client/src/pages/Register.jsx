import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Heart } from 'lucide-react'
import toast from 'react-hot-toast'
import { useAuth } from '../context/AuthContext'

export default function Register() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [dob, setDob] = useState('')
  const { register } = useAuth()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name || !email || !password || !confirmPassword) {
      toast.error('Please fill in all required fields')
      return
    }
    if (password !== confirmPassword) {
      toast.error('Passwords do not match')
      return
    }
    if (password.length < 6) {
      toast.error('Password must be at least 6 characters')
      return
    }
    register(name, email, password)
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
            Create Your Account
          </h2>
          <p className="text-charcoal-light">
            Join Femora and start your wellness journey today
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-sm border border-blush-100">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-2">
                Full Name *
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-blush-200 focus:border-blush-500 focus:ring-2 focus:ring-blush-200 outline-none transition-all"
                placeholder="Jane Doe"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-2">
                Email *
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
                Password *
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-blush-200 focus:border-blush-500 focus:ring-2 focus:ring-blush-200 outline-none transition-all"
                placeholder="At least 6 characters"
              />
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-charcoal mb-2">
                Confirm Password *
              </label>
              <input
                id="confirmPassword"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-blush-200 focus:border-blush-500 focus:ring-2 focus:ring-blush-200 outline-none transition-all"
                placeholder="Repeat your password"
              />
            </div>

            <div>
              <label htmlFor="dob" className="block text-sm font-medium text-charcoal mb-2">
                Date of Birth
              </label>
              <input
                id="dob"
                type="date"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-blush-200 focus:border-blush-500 focus:ring-2 focus:ring-blush-200 outline-none transition-all"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 px-6 bg-blush-600 text-white rounded-xl font-medium hover:bg-blush-700 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Create Account
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-charcoal-light">
              Already have an account?{' '}
              <Link to="/login" className="text-blush-600 font-medium hover:text-blush-700">
                Log In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
