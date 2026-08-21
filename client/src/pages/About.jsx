import { Link } from 'react-router-dom'
import { Heart, ShieldCheck, Users, BookOpen, Sparkles } from 'lucide-react'

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blush-100 rounded-full mb-6">
            <Heart className="w-8 h-8 text-blush-600" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-charcoal mb-4" style={{ fontFamily: 'Georgia, serif' }}>
            About Femora
          </h1>
          <p className="text-lg text-charcoal-light max-w-2xl mx-auto">
            A safe and trusted space for women to learn, care for themselves, and access reliable information about menstrual health, pregnancy, mental wellness, nutrition, and a healthy lifestyle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-bold text-charcoal mb-4" style={{ fontFamily: 'Georgia, serif' }}>
              Our Mission
            </h2>
            <p className="text-charcoal-light leading-relaxed mb-4">
              Femora was created with a simple yet powerful mission: to provide women and adolescent girls with reliable, easy-to-understand, and medically verified health information. We believe that every woman deserves access to resources that help her make informed decisions about her body and wellbeing.
            </p>
            <p className="text-charcoal-light leading-relaxed">
              Our platform covers a wide range of topics including menstrual health, pregnancy and maternal care, mental wellness, nutrition, fitness, and healthy lifestyle practices. We strive to make this information accessible, supportive, and empowering.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-charcoal mb-4" style={{ fontFamily: 'Georgia, serif' }}>
              What We Offer
            </h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <ShieldCheck className="w-6 h-6 text-blush-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-charcoal">Reliable Information</h3>
                  <p className="text-sm text-charcoal-light">Evidence-based content reviewed by healthcare professionals.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Users className="w-6 h-6 text-blush-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-charcoal">Women-Centered Design</h3>
                  <p className="text-sm text-charcoal-light">Resources designed specifically for women's unique health needs.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <BookOpen className="w-6 h-6 text-blush-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-charcoal">Easy to Understand</h3>
                  <p className="text-sm text-charcoal-light">Clear, jargon-free explanations for every topic.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Sparkles className="w-6 h-6 text-blush-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-charcoal">Always Accessible</h3>
                  <p className="text-sm text-charcoal-light">24/7 access to resources whenever you need them.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blush-600 text-white rounded-xl font-medium hover:bg-blush-700 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Explore Femora
            <Heart className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}
