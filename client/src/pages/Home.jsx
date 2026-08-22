import { Link } from 'react-router-dom'
import { Heart, ArrowRight } from 'lucide-react'

export default function Home() {
  return (
    <div className="bg-white">
      <section className="relative overflow-hidden bg-gradient-to-b from-blush-50 to-white">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blush-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
        <div className="absolute top-40 right-10 w-72 h-72 bg-lavender-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-peach-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '2s' }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-charcoal leading-tight" style={{ fontFamily: 'Georgia, serif' }}>
                Your Health. Your Wellness. Your Femora.
              </h1>
              <p className="text-lg text-charcoal-light max-w-xl leading-relaxed">
                A safe and trusted space for women to learn, care for themselves, and access reliable information about menstrual health, pregnancy, mental wellness, nutrition, and a healthy lifestyle.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/login"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-blush-600 text-white rounded-xl font-medium hover:bg-blush-700 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="relative w-full aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-blush-100 to-lavender-100 rounded-full opacity-60" />
                <div className="absolute inset-8 bg-gradient-to-tr from-blush-50 to-white rounded-full opacity-80" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Heart className="w-32 h-32 text-blush-400 fill-blush-300" />
                </div>
                <div className="absolute top-10 right-10 w-16 h-16 bg-blush-200 rounded-full flex items-center justify-center animate-bounce">
                  <svg className="w-8 h-8 text-blush-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
                </div>
                <div className="absolute bottom-10 left-10 w-12 h-12 bg-lavender-200 rounded-full flex items-center justify-center animate-bounce" style={{ animationDelay: '0.5s' }}>
                  <svg className="w-6 h-6 text-lavender-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-6" style={{ fontFamily: 'Georgia, serif' }}>
            Everything You Need for Your Wellness Journey
          </h2>
          <p className="text-lg text-charcoal-light max-w-2xl mx-auto mb-8">
            Explore our comprehensive resources designed to support every aspect of your health and wellness.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/menstrual-health" className="text-blush-600 hover:text-blush-700 font-medium">Menstrual Health</Link>
            <span className="text-blush-300">|</span>
            <Link to="/maternal-care" className="text-blush-600 hover:text-blush-700 font-medium">Pregnancy & Maternal Care</Link>
            <span className="text-blush-300">|</span>
            <Link to="/mental-wellness" className="text-blush-600 hover:text-blush-700 font-medium">Mental Wellness</Link>
            <span className="text-blush-300">|</span>
            <Link to="/nutrition-fitness" className="text-blush-600 hover:text-blush-700 font-medium">Nutrition & Fitness</Link>
            <span className="text-blush-300">|</span>
            <Link to="/cycle-tracker" className="text-blush-600 hover:text-blush-700 font-medium">Cycle Tracker</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
