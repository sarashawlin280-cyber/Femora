import { useState, useMemo } from 'react'
import { Calendar, ChevronLeft, ChevronRight } from 'lucide-react'

const DAYS_IN_WEEK = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
const MONTH_NAMES = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

const PHASES = [
  { id: 'menstruation', name: 'Menstrual', short: 'Period', color: 'bg-blush-400', text: 'text-white', light: 'bg-blush-50', textLight: 'text-blush-700', icon: '🩸' },
  { id: 'follicular', name: 'Follicular', short: 'Follicular', color: 'bg-lavender-300', text: 'text-white', light: 'bg-lavender-50', textLight: 'text-lavender-700', icon: '🌱' },
  { id: 'ovulation', name: 'Ovulation', short: 'Ovulation', color: 'bg-lavender-500', text: 'text-white', light: 'bg-lavender-50', textLight: 'text-lavender-700', icon: '🌙' },
  { id: 'luteal', name: 'Luteal', short: 'Luteal', color: 'bg-peach-400', text: 'text-white', light: 'bg-peach-50', textLight: 'text-peach-700', icon: '🌷' },
]

const PHASE_INFO = {
  menstruation: 'During menstruation, the uterine lining breaks down and flows out of the body. Energy may be lower, making this a good time for rest and gentle self-care.',
  follicular: 'Estrogen rises as the body prepares an egg for ovulation. Energy and mood often improve during this phase.',
  ovulation: 'A mature egg is released from the ovary. This is the most fertile time of the cycle, and energy levels are often at their peak.',
  luteal: 'Progesterone rises after ovulation. You may notice changes in mood, energy, and appetite as your body prepares for the next cycle.',
}

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

function getPhase(cycleDay) {
  if (!cycleDay || cycleDay < 1) return PHASES[0]
  if (cycleDay <= 5) return PHASES[0]
  if (cycleDay <= 13) return PHASES[1]
  if (cycleDay === 14) return PHASES[2]
  return PHASES[3]
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
  const activePhase = useMemo(() => getPhase(cycleDay), [cycleDay])

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

  return (
    <div className="min-h-screen bg-gradient-to-b from-blush-50/40 to-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-charcoal mb-2" style={{ fontFamily: 'Georgia, serif' }}>
            Your Cycle
          </h1>
          <p className="text-charcoal-light text-lg">Track your period simply and understand your cycle.</p>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-blush-100">
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

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-blush-100">
              <p className="text-sm font-medium text-charcoal-light mb-1">🩸 Next Period</p>
              <p className="text-2xl font-bold text-charcoal mb-1">
                {nextPeriod.toLocaleDateString('en-US', { month: 'long', day: 'numeric' })}
              </p>
              <p className="text-blush-600 font-medium">
                {daysToNextPeriod !== null ? `${daysToNextPeriod} days away` : 'Calculating...'}
              </p>
              <p className="text-xs text-charcoal-light mt-2">Based on your last period start date.</p>
            </div>

            <div className="bg-white rounded-3xl p-6 shadow-sm border border-blush-100">
              <p className="text-sm font-medium text-charcoal-light mb-1">🌸 Current Phase</p>
              <p className="text-2xl font-bold text-charcoal mb-1">{activePhase.name}</p>
              <p className="text-sm text-charcoal-light leading-relaxed">{PHASE_INFO[activePhase.id]}</p>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-4 sm:p-6 shadow-sm border border-blush-100">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-charcoal">Cycle Calendar</h2>
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
                    className={`aspect-square rounded-lg flex items-center justify-center text-xs sm:text-sm font-medium transition-all ${
                      isPeriod
                        ? 'bg-blush-400 text-white'
                        : isToday
                          ? 'ring-2 ring-charcoal text-charcoal'
                          : 'text-charcoal hover:bg-blush-50'
                    }`}
                  >
                    {date.getDate()}
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
                <div className="w-4 h-4 bg-blush-100 rounded ring-2 ring-blush-400" />
                <span>Today</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
