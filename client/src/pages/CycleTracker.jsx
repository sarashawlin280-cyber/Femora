import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { Heart, Calendar, ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react'
import { useAuth } from '../context/AuthContext'

const DAYS_IN_WEEK = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
const MONTH_NAMES = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

function addDays(date, days) {
  const result = new Date(date)
  result.setDate(result.getDate() + days)
  return result
}

function isSameDay(a, b) {
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate()
}

function getCycleDay(periodStart, targetDate) {
  const diff = Math.floor((targetDate - periodStart) / (1000 * 60 * 60 * 24))
  return diff >= 0 ? diff + 1 : null
}

function getPeriodDays(periodStart) {
  const days = []
  for (let i = 0; i < 5; i++) {
    days.push(addDays(periodStart, i))
  }
  return days
}

function getFertileWindow(periodStart) {
  const days = []
  for (let i = 8; i <= 15; i++) {
    days.push(addDays(periodStart, i))
  }
  return days
}

function getOvulationDay(periodStart) {
  return addDays(periodStart, 13)
}

export default function CycleTracker() {
  const { user } = useAuth()
  const today = useMemo(() => new Date(), [])
  const [periodStart, setPeriodStart] = useState(new Date(today.getFullYear(), today.getMonth(), today.getDate() - 13))
  const [cycleLength, setCycleLength] = useState(28)
  const [viewMonth, setViewMonth] = useState({ year: today.getFullYear(), month: today.getMonth() })
  const [saved, setSaved] = useState(false)

  const nextPeriod = useMemo(() => addDays(periodStart, cycleLength), [periodStart, cycleLength])
  const cycleDay = useMemo(() => getCycleDay(periodStart, today), [periodStart, today])
  const periodDays = useMemo(() => getPeriodDays(periodStart, cycleLength), [periodStart, cycleLength])
  const fertileWindow = useMemo(() => getFertileWindow(periodStart, cycleLength), [periodStart, cycleLength])
  const ovulationDay = useMemo(() => getOvulationDay(periodStart, cycleLength), [periodStart, cycleLength])

  const calendarDays = useMemo(() => {
    const firstDay = new Date(viewMonth.year, viewMonth.month, 1)
    const startDayOfWeek = firstDay.getDay()
    const daysInMonth = new Date(viewMonth.year, viewMonth.month + 1, 0).getDate()
    const days = []

    for (let i = 0; i < startDayOfWeek; i++) {
      days.push(null)
    }
    for (let d = 1; d <= daysInMonth; d++) {
      days.push(new Date(viewMonth.year, viewMonth.month, d))
    }
    return days
  }, [viewMonth])

  const prevMonth = () => {
    setViewMonth(prev => ({
      year: prev.month === 0 ? prev.year - 1 : prev.year,
      month: prev.month === 0 ? 11 : prev.month - 1
    }))
  }

  const nextMonth = () => {
    setViewMonth(prev => ({
      year: prev.month === 11 ? prev.year + 1 : prev.year,
      month: prev.month === 11 ? 0 : prev.month + 1
    }))
  }

  const getDayClass = (date) => {
    if (!date) return 'invisible'
    if (periodDays.some(d => isSameDay(d, date))) return 'bg-blush-400 text-white'
    if (isSameDay(date, ovulationDay)) return 'bg-lavender-400 text-white'
    if (fertileWindow.some(d => isSameDay(d, date))) return 'bg-lavender-100 text-lavender-700'
    if (isSameDay(date, nextPeriod)) return 'bg-blush-100 text-blush-700 ring-2 ring-blush-400'
    if (isSameDay(date, today)) return 'ring-2 ring-charcoal text-charcoal'
    return 'text-charcoal hover:bg-blush-50'
  }

  const handleSave = (e) => {
    e.preventDefault()
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

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
                    <p className="text-3xl font-bold text-blush-600">{cycleDay || '--'}</p>
                  </div>
                  <div>
                    <p className="text-sm text-charcoal-light mb-1">Period Start Date</p>
                    <p className="text-3xl font-bold text-charcoal">
                      {periodStart.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-charcoal-light mb-1">Estimated Next Period</p>
                    <p className="text-3xl font-bold text-charcoal">
                      {nextPeriod.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-charcoal-light mb-1">Cycle Length</p>
                    <p className="text-3xl font-bold text-charcoal">{cycleLength} days</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-sm border border-blush-100">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-base sm:text-lg font-semibold text-charcoal">Calendar</h3>
                  <div className="flex items-center gap-1 sm:gap-2">
                    <button onClick={prevMonth} className="p-1.5 sm:p-2 rounded-lg hover:bg-blush-50 transition-colors" aria-label="Previous month">
                      <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-charcoal" />
                    </button>
                    <span className="font-medium text-charcoal text-sm sm:text-base min-w-[100px] sm:min-w-[140px] text-center">
                      {MONTH_NAMES[viewMonth.month]} {viewMonth.year}
                    </span>
                    <button onClick={nextMonth} className="p-1.5 sm:p-2 rounded-lg hover:bg-blush-50 transition-colors" aria-label="Next month">
                      <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-charcoal" />
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-7 gap-1 sm:gap-2">
                  {DAYS_IN_WEEK.map(day => (
                    <div key={day} className="text-center text-xs font-medium text-charcoal-light py-2">
                      {day}
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-7 gap-1 sm:gap-2">
                  {calendarDays.map((date, i) => {
                    if (!date) {
                      return <div key={`empty-${i}`} className="aspect-square" />
                    }
                    const cd = getCycleDay(periodStart, date)
                    const isPeriod = periodDays.some(d => isSameDay(d, date))
                    const isOvulation = isSameDay(date, ovulationDay)
                    const isFertile = fertileWindow.some(d => isSameDay(d, date))
                    const isNextPeriod = isSameDay(date, nextPeriod)

                    return (
                      <div
                        key={i}
                        className={`aspect-square rounded-lg flex flex-col items-center justify-center text-xs sm:text-sm font-medium cursor-pointer transition-all ${getDayClass(date)} hover:scale-105`}
                        title={`${date.toDateString()}\n${cd ? `Cycle Day: ${cd}` : ''}${isPeriod ? '\nPeriod' : ''}${isOvulation ? '\nOvulation' : ''}${isFertile ? '\nFertile Window' : ''}${isNextPeriod ? '\nNext Period' : ''}`}
                      >
                        <span>{date.getDate()}</span>
                        {cd && !isPeriod && !isOvulation && !isFertile && cd <= 5 && (
                          <span className="text-[8px] leading-none mt-0.5 text-blush-500">P</span>
                        )}
                        {isOvulation && (
                          <span className="text-[8px] leading-none mt-0.5 text-white">O</span>
                        )}
                      </div>
                    )
                  })}
                </div>

                <div className="flex flex-wrap gap-3 sm:gap-4 mt-4 justify-center text-xs">
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
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-blush-100 rounded ring-2 ring-blush-400" />
                    <span>Next Period</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blush-50 p-8 rounded-2xl">
              <h3 className="text-xl font-semibold text-charcoal mb-4">Log Your Cycle</h3>
              <p className="text-charcoal-light mb-6">
                Keep track of your menstrual cycle by logging your period dates, symptoms, and mood. This helps you understand your patterns and predict future cycles.
              </p>
              <form onSubmit={handleSave} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-charcoal mb-1">Period Start Date</label>
                  <input
                    type="date"
                    value={periodStart.toISOString().split('T')[0]}
                    onChange={(e) => setPeriodStart(new Date(e.target.value + 'T00:00:00'))}
                    className="w-full px-4 py-2 rounded-xl border border-blush-200 focus:outline-none focus:ring-2 focus:ring-blush-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-charcoal mb-1">Cycle Length (days)</label>
                  <input
                    type="number"
                    value={cycleLength}
                    onChange={(e) => setCycleLength(Number(e.target.value))}
                    min={20}
                    max={45}
                    className="w-full px-4 py-2 rounded-xl border border-blush-200 focus:outline-none focus:ring-2 focus:ring-blush-500"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-blush-600 text-white rounded-xl font-medium hover:bg-blush-700 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  {saved ? 'Saved Successfully!' : 'Save Cycle Data'}
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
