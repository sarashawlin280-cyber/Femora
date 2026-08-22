import { Link } from 'react-router-dom'
import { Heart, ShieldCheck, Users, BookOpen, Sparkles } from 'lucide-react'

export default function About() {
  return (
    <div className="min-h-screen bg-blush-50/40">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-blush-100 text-blush-700 rounded-full text-sm font-medium mb-8">
            <Sparkles className="w-4 h-4" />
            Welcome to Femora
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-charcoal mb-6 bg-gradient-to-r from-blush-500 to-blush-600 bg-clip-text text-transparent" style={{ fontFamily: 'Georgia, serif' }}>
            About Femora
          </h1>
          <p className="text-lg text-charcoal-light max-w-3xl mx-auto leading-relaxed">
            A safe and trusted space for women to learn, care for themselves, and access reliable information about menstrual health, pregnancy, mental wellness, nutrition, and a healthy lifestyle.
          </p>
        </div>

        <div className="mb-16">
          <div className="bg-white rounded-2xl shadow-sm border border-blush-100/80 p-8 md:p-10">
            <h2 className="text-3xl font-bold text-charcoal mb-6" style={{ fontFamily: 'Georgia, serif' }}>
              Our Mission
            </h2>
            <div className="space-y-4 text-charcoal-light leading-relaxed">
              <p>
                Femora was created with a simple yet powerful mission: to provide women and adolescent girls with reliable, easy-to-understand, and medically verified health information. We believe that every woman deserves access to resources that help her make informed decisions about her body and wellbeing.
              </p>
              <p>
                Our platform covers a wide range of topics including menstrual health, pregnancy and maternal care, mental wellness, nutrition, fitness, and healthy lifestyle practices. We strive to make this information accessible, supportive, and empowering.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-charcoal text-center mb-10" style={{ fontFamily: 'Georgia, serif' }}>
            What We Offer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl border border-blush-100/60 p-6 hover:border-blush-200 hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-blush-100 text-blush-600 rounded-lg flex items-center justify-center mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-charcoal mb-2">Reliable Information</h3>
              <p className="text-sm text-charcoal-light">Evidence-based content reviewed by healthcare professionals.</p>
            </div>
            <div className="bg-white rounded-xl border border-blush-100/60 p-6 hover:border-blush-200 hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-blush-100 text-blush-600 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-charcoal mb-2">Women-Centered Design</h3>
              <p className="text-sm text-charcoal-light">Resources designed specifically for women's unique health needs.</p>
            </div>
            <div className="bg-white rounded-xl border border-blush-100/60 p-6 hover:border-blush-200 hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-blush-100 text-blush-600 rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-charcoal mb-2">Easy to Understand</h3>
              <p className="text-sm text-charcoal-light">Clear, jargon-free explanations for every topic.</p>
            </div>
            <div className="bg-white rounded-xl border border-blush-100/60 p-6 hover:border-blush-200 hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-blush-100 text-blush-600 rounded-lg flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-charcoal mb-2">Always Accessible</h3>
              <p className="text-sm text-charcoal-light">24/7 access to resources whenever you need them.</p>
            </div>
          </div>
        </div>

        <div className="bg-charcoal text-white rounded-2xl p-8 md:p-10 mb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-2xl md:text-3xl font-bold mb-1">100%</div>
              <div className="text-sm text-white/80">Verified Content</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold mb-1">24/7</div>
              <div className="text-sm text-white/80">Access</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold mb-1">50+</div>
              <div className="text-sm text-white/80">Topics</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold mb-1">10k+</div>
              <div className="text-sm text-white/80">Readers</div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blush-500 to-blush-600 text-white rounded-xl font-medium hover:from-blush-600 hover:to-blush-700 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Explore Femora
            <Heart className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  )
}
