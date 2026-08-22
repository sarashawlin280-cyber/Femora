import { Link } from 'react-router-dom'
import { Baby, ArrowRight, Stethoscope, Apple, Heart, ChevronRight } from 'lucide-react'

export default function MaternalCare() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-b from-blush-50 to-white pt-12 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-xl">
              <span className="inline-block px-4 py-1.5 bg-blush-100 text-blush-700 rounded-full text-sm font-semibold tracking-wide mb-6">
                MATERNAL HEALTH
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-charcoal mb-6 leading-tight" style={{ fontFamily: 'Georgia, serif' }}>
                A healthier pregnancy, one step at a time.
              </h1>
              <p className="text-lg text-charcoal-light mb-8 leading-relaxed">
                Expert guidance for every stage of your pregnancy journey. From prenatal care to postpartum recovery, we are here to support you.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/pregnancy"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-blush-600 text-white rounded-xl font-medium hover:bg-blush-700 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  Explore Pregnancy Guide <ChevronRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/articles"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-white text-blush-600 border-2 border-blush-200 rounded-xl font-medium hover:border-blush-300 hover:bg-blush-50 transition-all duration-200"
                >
                  Read Articles
                </Link>
              </div>
            </div>

            <div className="relative flex items-center justify-center">
              <div className="relative w-full max-w-md aspect-square bg-blush-50 rounded-3xl flex items-center justify-center">
                <Baby className="w-32 h-32 text-blush-300" strokeWidth={1} />
                <div className="absolute inset-0 bg-gradient-to-br from-blush-100/60 to-transparent rounded-3xl" />

                <div className="absolute -top-4 -right-4 bg-white px-4 py-3 rounded-2xl shadow-lg border border-blush-100 flex items-center gap-3 animate-bounce">
                  <div className="w-10 h-10 bg-blush-50 rounded-xl flex items-center justify-center">
                    <Stethoscope className="w-5 h-5 text-blush-600" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-charcoal">Prenatal Care</p>
                    <p className="text-xs text-charcoal-light">Stay protected</p>
                  </div>
                </div>

                <div className="absolute top-1/2 -left-6 bg-white px-4 py-3 rounded-2xl shadow-lg border border-blush-100 flex items-center gap-3">
                  <div className="w-10 h-10 bg-blush-50 rounded-xl flex items-center justify-center">
                    <Apple className="w-5 h-5 text-blush-600" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-charcoal">Nutrition</p>
                    <p className="text-xs text-charcoal-light">Eat well, thrive</p>
                  </div>
                </div>

                <div className="absolute -bottom-4 right-8 bg-white px-4 py-3 rounded-2xl shadow-lg border border-blush-100 flex items-center gap-3">
                  <div className="w-10 h-10 bg-blush-50 rounded-xl flex items-center justify-center">
                    <Heart className="w-5 h-5 text-blush-600" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-charcoal">Wellness</p>
                    <p className="text-xs text-charcoal-light">Mind & body</p>
                  </div>
                </div>
              </div>
            </div>
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
