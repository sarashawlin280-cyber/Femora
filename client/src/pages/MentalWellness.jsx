import { Link } from 'react-router-dom'
import { Heart, Brain, Activity, Sparkles, Users, ArrowRight } from 'lucide-react'

export default function MentalWellness() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-b from-lavender-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-lavender-100 rounded-full mb-6">
              <Brain className="w-8 h-8 text-lavender-600" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-charcoal mb-4" style={{ fontFamily: 'Georgia, serif' }}>
              Mental Wellness
            </h1>
            <p className="text-lg text-charcoal-light max-w-2xl mx-auto">
              Mental health is just as important as physical health. Explore resources and support for your emotional wellbeing, stress management, and self-care.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            { icon: Activity, title: 'Stress & Anxiety', desc: 'Techniques to manage everyday stress and anxiety effectively.' },
            { icon: Heart, title: 'Emotional Wellbeing', desc: 'Understanding and nurturing your emotional health.' },
            { icon: Sparkles, title: 'Self-Care', desc: 'Simple self-care practices for a balanced life.' },
            { icon: Users, title: 'Mental Health Awareness', desc: 'Breaking stigma and understanding mental health conditions.' },
          ].map((item, i) => (
            <div key={i} className="bg-lavender-50 p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-lavender-100 rounded-full mb-4">
                <item.icon className="w-6 h-6 text-lavender-600" />
              </div>
              <h3 className="text-lg font-semibold text-charcoal mb-2">{item.title}</h3>
              <p className="text-sm text-charcoal-light">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}
