import { Link } from 'react-router-dom'
import { Baby, ArrowRight } from 'lucide-react'

export default function MaternalCare() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-b from-blush-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blush-100 rounded-full mb-6">
              <Baby className="w-8 h-8 text-blush-600" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-charcoal mb-4" style={{ fontFamily: 'Georgia, serif' }}>
              Pregnancy & Maternal Care
            </h1>
            <p className="text-lg text-charcoal-light max-w-2xl mx-auto">
              Expert guidance for every stage of your pregnancy journey. From prenatal care to postpartum recovery, we are here to support you.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {[
            { title: 'Pregnancy', desc: 'Guidance for a healthy and informed pregnancy journey, from conception to birth.' },
            { title: 'Maternal Care', desc: 'Expert advice for expecting and new mothers on nutrition, exercise, and wellness.' },
            { title: 'New Mothers', desc: 'Support and resources for first-time mothers navigating parenthood.' },
            { title: 'Postpartum Awareness', desc: 'Understanding and managing postpartum changes, recovery, and mental health.' },
          ].map((item, i) => (
            <div key={i} className="bg-blush-50 p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-semibold text-charcoal mb-3">{item.title}</h3>
              <p className="text-charcoal-light">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/articles" className="inline-flex items-center gap-2 px-6 py-3 bg-blush-600 text-white rounded-xl font-medium hover:bg-blush-700 transition-all duration-200 shadow-lg hover:shadow-xl">
            Explore Maternal Care <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}
