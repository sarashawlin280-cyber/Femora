import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Heart, Calendar, ArrowLeft } from 'lucide-react'
import { useAuth } from '../context/AuthContext'

export default function CycleTracker() {
  const { user } = useAuth()
  const [cycleDay] = useState(14)
  const [periodStart] = useState('Jan 15')
  const [nextPeriod] = useState('Feb 12')
  const [cycleLength] = useState(28)

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-b from-blush-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blush-100 rounded-full mb-6">
              <Calendar className="w-8 h-8 text-blush-600" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-charcoal mb-4" style={{ fontFamily: 'Georgia, serif' }}>
              Menstrual Cycle Tracker
            </h1>
            <p className="text-lg text-charcoal-light max-w-2xl mx-auto">
              Track your menstrual cycle and stay more aware of your body's natural patterns. Predict your next period, identify fertile windows, and understand your body better.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {!user ? (
          <div className="text-center bg-blush-50 p-12 rounded-2xl max-w-2xl mx-auto">
            <Heart className="w-12 h-12 text-blush-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-charcoal mb-4">Login to Start Tracking</h2>
            <p className="text-charcoal-light mb-8">
              Create a free account to access the full cycle tracker and personalize your experience.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/login" className="inline-flex items-center gap-2 px-6 py-3 bg-blush-600 text-white rounded-xl font-medium hover:bg-blush-700 transition-all duration-200 shadow-lg hover:shadow-xl">
                Login <ArrowLeft className="w-4 h-4 rotate-180" />
              </Link>
              <Link to="/register" className="inline-flex items-center gap-2 px-6 py-3 border-2 border-blush-600 text-blush-600 rounded-xl font-medium hover:bg-blush-50 transition-all duration-200">
                Create Free Account
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <div className="bg-blush-50 p-8 rounded-2xl mb-8">
                <h3 className="text-xl font-semibold text-charcoal mb-6">Current Cycle Overview</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <p className="text-sm text-charcoal-light mb-1">Current Cycle Day</p>
                    <p className="text-3xl font-bold text-blush-600">{cycleDay}</p>
                  </div>
                  <div>
                    <p className="text-sm text-charcoal-light mb-1">Period Start Date</p>
                    <p className="text-3xl font-bold text-charcoal">{periodStart}</p>
                  </div>
                  <div>
                    <p className="text-sm text-charcoal-light mb-1">Estimated Next Period</p>
                    <p className="text-3xl font-bold text-charcoal">{nextPeriod}</p>
                  </div>
                  <div>
                    <p className="text-sm text-charcoal-light mb-1">Cycle Length</p>
                    <p className="text-3xl font-bold text-charcoal">{cycleLength} days</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm border border-blush-100">
                <h3 className="text-lg font-semibold text-charcoal mb-4">28-Day Cycle View</h3>
                <div className="grid grid-cols-7 gap-2">
                  {Array.from({ length: 28 }).map((_, i) => {
                    let bgColor = 'bg-gray-100'
                    if (i >= 1 && i <= 5) bgColor = 'bg-blush-400'
                    else if (i >= 9 && i <= 15) bgColor = 'bg-lavender-200'
                    else if (i === 13) bgColor = 'bg-lavender-400'
                    return (
                      <div
                        key={i}
                        className={`aspect-square rounded-lg flex items-center justify-center text-xs font-medium ${bgColor}`}
                        title={`Day ${i + 1}`}
                      >
                        {i + 1}
                      </div>
                    )
                  })}
                </div>
                <div className="flex flex-wrap gap-4 mt-4 justify-center text-xs">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-blush-400 rounded" />
                    <span>Period</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-lavender-200 rounded" />
                    <span>Fertile Window</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-lavender-400 rounded" />
                    <span>Ovulation</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blush-50 p-8 rounded-2xl">
              <h3 className="text-xl font-semibold text-charcoal mb-4">Log Your Cycle</h3>
              <p className="text-charcoal-light mb-6">
                Keep track of your menstrual cycle by logging your period dates, symptoms, and mood. This helps you understand your patterns and predict future cycles.
              </p>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-charcoal mb-1">Period Start Date</label>
                  <input type="date" className="w-full px-4 py-2 rounded-xl border border-blush-200 focus:outline-none focus:ring-2 focus:ring-blush-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-charcoal mb-1">Cycle Length (days)</label>
                  <input type="number" defaultValue={28} className="w-full px-4 py-2 rounded-xl border border-blush-200 focus:outline-none focus:ring-2 focus:ring-blush-500" />
                </div>
                <button className="w-full px-6 py-3 bg-blush-600 text-white rounded-xl font-medium hover:bg-blush-700 transition-all duration-200 shadow-lg hover:shadow-xl">
                  Save Cycle Data
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
