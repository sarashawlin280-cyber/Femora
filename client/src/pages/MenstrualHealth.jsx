import { Link } from 'react-router-dom'
import { Heart, ArrowRight } from 'lucide-react'

export default function MenstrualHealth() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-b from-blush-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blush-100 rounded-full mb-6">
              <Heart className="w-8 h-8 text-blush-600" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-charcoal mb-4" style={{ fontFamily: 'Georgia, serif' }}>
              Menstrual Health
            </h1>
            <p className="text-lg text-charcoal-light max-w-2xl mx-auto">
              Learn about your cycle, hormones, menstrual hygiene, symptoms, and reproductive health. We provide easy-to-understand resources to help you feel confident and informed.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {[
            { title: 'Understanding Your Cycle', desc: 'Learn about the four phases of your menstrual cycle and what they mean for your body.' },
            { title: 'Menstrual Hygiene', desc: 'Best practices for menstrual hygiene, product choices, and staying comfortable during your period.' },
            { title: 'Common Symptoms', desc: 'Recognize common menstrual symptoms and learn when to seek medical advice.' },
            { title: 'Reproductive Health', desc: 'Comprehensive information about reproductive health, hormones, and overall wellness.' },
            { title: 'Cycle Tracking', desc: 'Track your cycle to predict periods, identify fertile windows, and understand patterns.' },
            { title: 'When to See a Doctor', desc: 'Guidance on when to visit a gynecologist for routine check-ups and concerning symptoms.' },
          ].map((item, i) => (
            <div key={i} className="bg-blush-50 p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300">
              <h3 className="text-lg font-semibold text-charcoal mb-2">{item.title}</h3>
              <p className="text-sm text-charcoal-light">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/articles" className="inline-flex items-center gap-2 px-6 py-3 bg-blush-600 text-white rounded-xl font-medium hover:bg-blush-700 transition-all duration-200 shadow-lg hover:shadow-xl">
            Read More Articles <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}
