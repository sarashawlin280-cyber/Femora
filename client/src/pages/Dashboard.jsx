import { Navigate, Link } from 'react-router-dom'
import { Heart, Calendar, Activity, Baby, BookOpen, User } from 'lucide-react'
import { useAuth } from '../context/AuthContext'

export default function Dashboard() {
  const { user } = useAuth()

  if (!user) {
    return <Navigate to="/login" replace />
  }

  const cards = [
    { icon: Calendar, title: 'My Cycle', desc: 'Track your menstrual cycle and get insights', link: '/cycle-tracker' },
    { icon: Activity, title: 'Mental Wellness', desc: 'Resources for emotional health and self-care', link: '/mental-wellness' },
    { icon: Baby, title: 'Pregnancy & Maternal Care', desc: 'Guidance for every stage of pregnancy', link: '/maternal-care' },
    { icon: Heart, title: 'Nutrition & Fitness', desc: 'Diet plans and workout routines for women', link: '/nutrition-fitness' },
    { icon: BookOpen, title: 'Saved Resources', desc: 'Your bookmarked health resources', link: '/faq' },
    { icon: User, title: 'My Profile', desc: 'Manage your account settings', link: '/dashboard' },
  ]

  return (
    <div className="min-h-screen bg-blush-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <Heart className="w-8 h-8 text-blush-600 fill-blush-600" />
            <h1 className="text-3xl font-bold text-charcoal" style={{ fontFamily: 'Georgia, serif' }}>
              Welcome back, {user.name}!
            </h1>
          </div>
          <p className="text-charcoal-light">
            Here's your personalized health dashboard. What would you like to explore today?
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-blush-100 mb-8">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-blush-500 text-white flex items-center justify-center text-2xl font-bold">
              {user.name.charAt(0).toUpperCase()}
            </div>
            <div>
              <h2 className="text-xl font-semibold text-charcoal">{user.name}</h2>
              <p className="text-sm text-charcoal-light">{user.email}</p>
              <span className="inline-block mt-1 px-3 py-1 text-xs font-medium bg-blush-100 text-blush-700 rounded-full capitalize">
                {user.role}
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <Link
              key={i}
              to={card.link}
              className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-[1.02] group"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blush-100 rounded-full mb-4 group-hover:bg-blush-200 transition-colors">
                <card.icon className="w-6 h-6 text-blush-600" />
              </div>
              <h3 className="text-lg font-semibold text-charcoal mb-2">{card.title}</h3>
              <p className="text-sm text-charcoal-light">{card.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
