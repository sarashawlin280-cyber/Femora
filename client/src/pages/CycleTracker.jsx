import { useState, useMemo } from 'react'
import { Calendar, ChevronLeft, ChevronRight, Droplets } from 'lucide-react'

const DAYS_IN_WEEK = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
const MONTH_NAMES = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

function dateKey(date) {
  const d = new Date(date)
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
}

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

function getPeriodDays(periodStart, cycleLength) {
  const days = []
  for (let i = 0; i < 5; i++) {
    days.push(addDays(periodStart, i))
  }
  return days
}

const STORAGE_KEY = 'femora_cycle_data'

function loadStoredData() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return null
    return JSON.parse(raw)
  } catch {
    return null
  }
}

function saveStoredData(data) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
  } catch {
    // ignore
  }
}

export default function CycleTracker() {
  const today = new Date()

  const [periodStart, setPeriodStart] = useState(() => {
    const stored = loadStoredData()
    if (stored?.periodStart) return new Date(stored.periodStart + 'T00:00:00')
    return new Date(today.getFullYear(), today.getMonth(), today.getDate() - 13)
  })
  const [cycleLength, setCycleLength] = useState(() => {
    const stored = loadStoredData()
    return stored?.cycleLength || 28
  })
  const [viewMonth, setViewMonth] = useState({ year: today.getFullYear(), month: today.getMonth() })
  const [saved, setSaved] = useState(false)

  const nextPeriod = useMemo(() => addDays(periodStart, cycleLength), [periodStart, cycleLength])
  const cycleDay = useMemo(() => getCycleDay(periodStart, today), [periodStart, today])
  const periodDays = useMemo(() => getPeriodDays(periodStart, cycleLength), [periodStart, cycleLength])
  const daysToNextPeriod = useMemo(() => {
    const diff = Math.ceil((nextPeriod - today) / (1000 * 60 * 60 * 24))
    return diff >= 0 ? diff : null
  }, [nextPeriod, today])

  const calendarDays = useMemo(() => {
    const firstDay = new Date(viewMonth.year, viewMonth.month, 1)
    let startDayOfWeek = firstDay.getDay()
    startDayOfWeek = startDayOfWeek === 0 ? 6 : startDayOfWeek - 1
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
      month: prev.month === 0 ? 11 : prev.month - 1,
    }))
  }

  const nextMonth = () => {
    setViewMonth(prev => ({
      year: prev.month === 11 ? prev.year + 1 : prev.year,
      month: prev.month === 11 ? 0 : prev.month + 1,
    }))
  }

  const handleSave = (e) => {
    e.preventDefault()
    saveStoredData({ periodStart: dateKey(periodStart), cycleLength })
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  const progress = cycleDay && cycleLength ? Math.min(100, Math.max(0, ((cycleDay - 1) / cycleLength) * 100)) : 0
  const radius = 120
  const circumference = 2 * Math.PI * radius
  const strokeDashoffset = circumference - (progress / 100) * circumference

  return (
    <div className="min-h-screen bg-gradient-to-b from-blush-50/60 to-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-charcoal mb-2" style={{ fontFamily: 'Georgia, serif' }}>
            🌸 Your Cycle
          </h1>
          <p className="text-charcoal-light text-lg">Track your period with ease and stay prepared.</p>
        </div>

        <div className="flex justify-center mb-10">
          <div className="relative w-64 h-64 sm:w-72 sm:h-72">
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 260 260">
              <circle cx="130" cy="130" r={radius} stroke="#fce7eb" strokeWidth="12" fill="none" />
              <circle
                cx="130"
                cy="130"
                r={radius}
                stroke="#d13d64"
                strokeWidth="12"
                fill="none"
                strokeLinecap="round"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                className="transition-all duration-1000 ease-out"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
              <p className="text-xs font-medium text-charcoal-light uppercase tracking-wider mb-1">Day {cycleDay || '--'}</p>
              <p className="text-4xl sm:text-5xl font-bold text-charcoal mb-1" style={{ fontFamily: 'Georgia, serif' }}>
                {cycleDay || '--'}
              </p>
              <p className="text-sm text-charcoal-light">of your {cycleLength}-day cycle</p>
              <p className="text-xs text-charcoal-light mt-3">Last period: {periodStart.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-blush-100 mb-6">
          <p className="text-xs font-semibold text-blush-600 uppercase tracking-wider mb-2">🩸 Your Next Period</p>
          <p className="text-3xl sm:text-4xl font-bold text-charcoal mb-2" style={{ fontFamily: 'Georgia, serif' }}>
            {nextPeriod.toLocaleDateString('en-US', { month: 'long', day: 'numeric' })}
          </p>
          <p className="text-blush-600 font-medium mb-4">
            {daysToNextPeriod !== null ? `${daysToNextPeriod} days away` : 'Calculating...'}
          </p>
          <div className="w-full bg-blush-100 rounded-full h-2 mb-2">
            <div
              className="bg-blush-500 h-2 rounded-full transition-all duration-700"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-xs text-charcoal-light">Based on your {cycleLength}-day cycle</p>
        </div>

        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-blush-100 mb-6">
          <h2 className="text-sm font-semibold text-charcoal-light uppercase tracking-wider mb-6 text-center">Your Cycle</h2>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0">
            <div className="flex-1 text-center">
              <div className="flex items-center justify-center gap-2 mb-1">
                <span className="text-xl">🩸</span>
                <span className="text-sm font-medium text-charcoal">Last Period</span>
              </div>
              <p className="text-xs text-charcoal-light">{periodStart.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</p>
              <p className="text-xs font-semibold text-blush-600">Day 1</p>
            </div>

            <div className="hidden sm:block flex-1 h-px bg-blush-200 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-blush-400" />
              </div>
            </div>
            <div className="sm:hidden w-px h-6 bg-blush-200" />

            <div className="flex-1 text-center">
              <div className="flex items-center justify-center gap-2 mb-1">
                <span className="text-xl">🌸</span>
                <span className="text-sm font-medium text-charcoal">Today</span>
              </div>
              <p className="text-xs text-charcoal-light">{today.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</p>
              <p className="text-xs font-semibold text-blush-600">Day {cycleDay || '--'}</p>
            </div>

            <div className="hidden sm:block flex-1 h-px bg-blush-200 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-blush-400" />
              </div>
            </div>
            <div className="sm:hidden w-px h-6 bg-blush-200" />

            <div className="flex-1 text-center">
              <div className="flex items-center justify-center gap-2 mb-1">
                <span className="text-xl">📅</span>
                <span className="text-sm font-medium text-charcoal">Next Period</span>
              </div>
              <p className="text-xs text-charcoal-light">{nextPeriod.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</p>
              <p className="text-xs font-semibold text-blush-600">Day {cycleLength}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-4 sm:p-6 shadow-sm border border-blush-100 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-charcoal" style={{ fontFamily: 'Georgia, serif' }}>
              {MONTH_NAMES[viewMonth.month]} {viewMonth.year}
            </h2>
            <div className="flex items-center gap-1 sm:gap-2">
              <button onClick={prevMonth} className="p-1.5 sm:p-2 rounded-lg hover:bg-blush-50 transition-colors" aria-label="Previous month">
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-charcoal" />
              </button>
              <button onClick={nextMonth} className="p-1.5 sm:p-2 rounded-lg hover:bg-blush-50 transition-colors" aria-label="Next month">
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-charcoal" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-7 gap-1 sm:gap-2 mb-2">
            {DAYS_IN_WEEK.map(day => (
              <div key={day} className="text-center text-xs font-medium text-charcoal-light py-2">
                {day}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-1 sm:gap-2">
            {calendarDays.map((date, i) => {
              if (!date) return <div key={`empty-${i}`} className="aspect-square" />
              const isPeriod = periodDays.some(d => isSameDay(d, date))
              const isToday = isSameDay(date, today)

              return (
                <div
                  key={i}
                  className="aspect-square rounded-xl flex flex-col items-center justify-center text-xs sm:text-sm font-medium transition-all relative"
                >
                  {isPeriod ? (
                    <span className="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-blush-100 text-blush-700">
                      <Droplets className="w-3 h-3 sm:w-4 sm:h-4" />
                    </span>
                  ) : (
                    <span className={`${isToday ? 'ring-2 ring-blush-400 rounded-full w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center bg-blush-50 text-blush-700' : 'text-charcoal hover:text-blush-600'}`}>
                      {date.getDate()}
                    </span>
                  )}
                </div>
              )
            })}
          </div>

          <div className="flex flex-wrap gap-3 sm:gap-4 mt-4 justify-center text-xs">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-blush-100 flex items-center justify-center">
                <Droplets className="w-2.5 h-2.5 text-blush-600" />
              </div>
              <span className="text-charcoal-light">Period</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-blush-50 ring-2 ring-blush-400" />
              <span className="text-charcoal-light">Today</span>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-sm font-semibold text-charcoal-light uppercase tracking-wider mb-4 text-center">Cycle at a Glance</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            <div className="bg-white rounded-2xl p-4 shadow-sm border border-blush-100 text-center">
              <p className="text-xl sm:text-2xl mb-1">🩸</p>
              <p className="text-xs text-charcoal-light mb-1">Last period</p>
              <p className="text-sm font-semibold text-charcoal">{periodStart.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</p>
            </div>
            <div className="bg-white rounded-2xl p-4 shadow-sm border border-blush-100 text-center">
              <p className="text-xl sm:text-2xl mb-1">🔄</p>
              <p className="text-xs text-charcoal-light mb-1">Cycle length</p>
              <p className="text-sm font-semibold text-charcoal">{cycleLength} days</p>
            </div>
            <div className="bg-white rounded-2xl p-4 shadow-sm border border-blush-100 text-center">
              <p className="text-xl sm:text-2xl mb-1">📅</p>
              <p className="text-xs text-charcoal-light mb-1">Next period</p>
              <p className="text-sm font-semibold text-charcoal">{nextPeriod.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</p>
            </div>
            <div className="bg-white rounded-2xl p-4 shadow-sm border border-blush-100 text-center">
              <p className="text-xl sm:text-2xl mb-1">⏳</p>
              <p className="text-xs text-charcoal-light mb-1">Days remaining</p>
              <p className="text-sm font-semibold text-charcoal">{daysToNextPeriod !== null ? daysToNextPeriod : '--'}</p>
            </div>
          </div>
        </div>

        <div className="bg-blush-50 rounded-3xl p-6 sm:p-8 shadow-sm border border-blush-100">
          <p className="text-sm font-medium text-blush-700 mb-1">🌷 Your next period is approaching</p>
          <p className="text-sm text-charcoal-light">You're about {daysToNextPeriod !== null ? daysToNextPeriod : '--'} days away from your expected period.</p>
        </div>

        <div className="mt-8 bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-blush-100">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
            <div>
              <p className="text-sm font-medium text-charcoal-light mb-1">Your period started on</p>
              <p className="text-2xl font-bold text-charcoal">
                {periodStart.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </p>
            </div>
            <form onSubmit={handleSave} className="flex items-center gap-3">
              <input
                type="date"
                value={periodStart.toISOString().split('T')[0]}
                onChange={(e) => setPeriodStart(new Date(e.target.value + 'T00:00:00'))}
                className="px-4 py-2 rounded-xl border border-blush-200 focus:outline-none focus:ring-2 focus:ring-blush-500 text-sm"
              />
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-4 py-2 bg-blush-600 text-white rounded-xl text-sm font-medium hover:bg-blush-700 transition-all duration-200 whitespace-nowrap"
              >
                <Calendar className="w-4 h-4" />
                {saved ? 'Saved' : 'Save Period'}
              </button>
            </form>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-bold text-charcoal">Cycle Day {cycleDay || '--'}</span>
            <span className="text-charcoal-light">of {cycleLength} days</span>
          </div>
        </div>
      </div>
    </div>
  )
}
