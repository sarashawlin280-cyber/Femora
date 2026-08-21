import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Heart, BookOpen, ShieldCheck, Users, Calendar, Activity, Brain, Baby, Sparkles, ChevronRight, ArrowRight, AlertCircle, MessageSquare, Star, HeartPulse, Apple } from 'lucide-react'
import { articles, faqs, emergencyInfo } from '../data/mockData'

export default function Home() {
  const [openFaq, setOpenFaq] = useState(null)

  return (
    <div className="bg-white">
      {/* Hero Section */}
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
                  to="/#categories"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-blush-600 text-white rounded-xl font-medium hover:bg-blush-700 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  Explore Wellness Resources
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/cycle-tracker"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-blush-600 text-white rounded-xl font-medium hover:bg-blush-700 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  Track Your Cycle
                  <Calendar className="w-4 h-4" />
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 px-6 py-3 border-2 border-blush-600 text-blush-600 rounded-xl font-medium hover:bg-blush-50 transition-all duration-200"
                >
                  Learn More
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
                  <Sparkles className="w-8 h-8 text-blush-600" />
                </div>
                <div className="absolute bottom-10 left-10 w-12 h-12 bg-lavender-200 rounded-full flex items-center justify-center animate-bounce" style={{ animationDelay: '0.5s' }}>
                  <Activity className="w-6 h-6 text-lavender-600" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Access / Main Features */}
      <section id="categories" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-4" style={{ fontFamily: 'Georgia, serif' }}>
              Everything You Need for Your Wellness Journey
            </h2>
            <p className="text-charcoal-light max-w-2xl mx-auto">
              Explore our comprehensive resources designed to support every aspect of your health and wellness.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: HeartPulse, title: 'Menstrual Health', desc: 'Learn about periods, menstrual hygiene, symptoms, and reproductive health.', btn: 'Explore', link: '/menstrual-health' },
              { icon: Baby, title: 'Pregnancy & Maternal Care', desc: 'Guidance and educational resources for pregnancy and motherhood.', btn: 'Learn More', link: '/maternal-care' },
              { icon: Brain, title: 'Mental Wellness', desc: 'Resources for emotional well-being, stress, and self-care.', btn: 'Explore', link: '/mental-wellness' },
              { icon: Apple, title: 'Nutrition & Fitness', desc: 'Healthy eating, lifestyle, fitness, and wellness tips.', btn: 'View Tips', link: '/nutrition-fitness' },
              { icon: Calendar, title: 'Cycle Tracker', desc: 'Track and manage your menstrual cycle information easily.', btn: 'Start Tracking', link: '/cycle-tracker' },
              { icon: BookOpen, title: 'Health Articles', desc: 'Browse trusted and easy-to-understand health articles.', btn: 'Read Articles', link: '/articles' },
            ].map((item, i) => (
              <div key={i} className="bg-blush-50 p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blush-100 rounded-full mb-4">
                  <item.icon className="w-6 h-6 text-blush-600" />
                </div>
                <h3 className="text-lg font-semibold text-charcoal mb-2">{item.title}</h3>
                <p className="text-sm text-charcoal-light mb-4">{item.desc}</p>
                <Link
                  to={item.link}
                  className="inline-flex items-center gap-1 text-sm font-medium text-blush-600 hover:text-blush-700 transition-colors"
                >
                  {item.btn} <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted Information / Why Femora */}
      <section className="py-20 bg-blush-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-4" style={{ fontFamily: 'Georgia, serif' }}>
              A Trusted Space for Women's Health & Wellness
            </h2>
            <p className="text-charcoal-light max-w-2xl mx-auto">
              We are committed to providing reliable, accessible, and women-centered health resources that empower you to make informed decisions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: ShieldCheck, title: 'Reliable Information', desc: 'Easy-to-understand educational health resources reviewed by experts.' },
              { icon: Users, title: 'Women-Centered Care', desc: 'Resources designed around women\'s different health and wellness needs.' },
              { icon: BookOpen, title: 'Simple & Accessible', desc: 'A user-friendly platform suitable for everyone, regardless of age or background.' },
              { icon: Sparkles, title: 'Wellness & Awareness', desc: 'Supporting healthy habits, self-care, and informed decisions every day.' },
            ].map((item, i) => (
              <div key={i} className="text-center p-6 bg-white rounded-2xl hover:shadow-lg transition-shadow duration-300">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blush-100 rounded-full mb-4">
                  <item.icon className="w-6 h-6 text-blush-600" />
                </div>
                <h3 className="text-lg font-semibold text-charcoal mb-2">{item.title}</h3>
                <p className="text-sm text-charcoal-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cycle Tracker Preview */}
      <section id="cycle-tracker" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-4" style={{ fontFamily: 'Georgia, serif' }}>
                Understand Your Cycle Better
              </h2>
              <p className="text-charcoal-light mb-8 leading-relaxed">
                Track your menstrual cycle and stay more aware of your body's natural patterns.
              </p>

              <div className="bg-blush-50 p-6 rounded-2xl mb-6">
                <h3 className="text-lg font-semibold text-charcoal mb-4">Current Cycle Overview</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-charcoal-light">Current Cycle Day</p>
                    <p className="text-2xl font-bold text-blush-600">14</p>
                  </div>
                  <div>
                    <p className="text-sm text-charcoal-light">Period Start Date</p>
                    <p className="text-2xl font-bold text-charcoal">Jan 15</p>
                  </div>
                  <div>
                    <p className="text-sm text-charcoal-light">Estimated Next Period</p>
                    <p className="text-2xl font-bold text-charcoal">Feb 12</p>
                  </div>
                  <div>
                    <p className="text-sm text-charcoal-light">Cycle Length</p>
                    <p className="text-2xl font-bold text-charcoal">28 days</p>
                  </div>
                </div>
              </div>

              <Link
                to="/cycle-tracker"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blush-600 text-white rounded-xl font-medium hover:bg-blush-700 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Open Cycle Tracker
                <Calendar className="w-4 h-4" />
              </Link>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-blush-100">
              <h3 className="text-lg font-semibold text-charcoal mb-4 text-center">28-Day Cycle View</h3>
              <div className="grid grid-cols-7 gap-2">
                {Array.from({ length: 28 }).map((_, i) => {
                  let bgColor = 'bg-gray-100'
                  if (i >= 1 && i <= 5) bgColor = 'bg-blush-400'
                  else if (i >= 9 && i <= 15) bgColor = 'bg-lavender-200'
                  else if (i === 13) bgColor = 'bg-lavender-400'
                  return (
                    <div
                      key={i}
                      className={`aspect-square rounded-lg flex items-center justify-center text-xs font-medium ${bgColor}`}
                      title={`Day ${i + 1}`}
                    >
                      {i + 1}
                    </div>
                  )
                })}
              </div>
              <div className="flex flex-wrap gap-4 mt-4 justify-center text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-blush-400 rounded" />
                  <span>Period</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-lavender-200 rounded" />
                  <span>Fertile Window</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-lavender-400 rounded" />
                  <span>Ovulation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mental Wellness */}
      <section className="py-20 bg-lavender-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-4" style={{ fontFamily: 'Georgia, serif' }}>
              Your Mental Wellbeing Matters.
            </h2>
            <p className="text-charcoal-light max-w-2xl mx-auto">
              Mental health is just as important as physical health. Explore resources and support for your emotional wellbeing.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Brain, title: 'Stress & Anxiety', desc: 'Techniques to manage everyday stress and anxiety effectively' },
              { icon: Activity, title: 'Emotional Wellbeing', desc: 'Understanding and nurturing your emotional health' },
              { icon: Sparkles, title: 'Self-Care', desc: 'Simple self-care practices for a balanced life' },
              { icon: Users, title: 'Mental Health Awareness', desc: 'Breaking stigma and understanding mental health conditions' },
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-lavender-100 rounded-full mb-4">
                  <item.icon className="w-6 h-6 text-lavender-600" />
                </div>
                <h3 className="text-lg font-semibold text-charcoal mb-2">{item.title}</h3>
                <p className="text-sm text-charcoal-light mb-4">{item.desc}</p>
                <Link to="/mental-wellness" className="inline-flex items-center gap-1 text-sm font-medium text-lavender-600 hover:text-lavender-700">
                  Explore Mental Wellness <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Maternal Care */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-4" style={{ fontFamily: 'Georgia, serif' }}>
              Support Through Every Stage of Motherhood
            </h2>
            <p className="text-charcoal-light max-w-2xl mx-auto">
              From pregnancy planning to postpartum care, we provide resources to support you through every stage of your motherhood journey.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Baby, title: 'Pregnancy', desc: 'Guidance for a healthy and informed pregnancy journey' },
              { icon: Heart, title: 'Maternal Care', desc: 'Expert advice for expecting and new mothers' },
              { icon: Users, title: 'New Mothers', desc: 'Support and resources for first-time mothers' },
              { icon: ShieldCheck, title: 'Postpartum Awareness', desc: 'Understanding and managing postpartum changes' },
            ].map((item, i) => (
              <div key={i} className="bg-blush-50 p-6 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blush-100 rounded-full mb-4">
                  <item.icon className="w-6 h-6 text-blush-600" />
                </div>
                <h3 className="text-lg font-semibold text-charcoal mb-2">{item.title}</h3>
                <p className="text-sm text-charcoal-light">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/maternal-care"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blush-600 text-white rounded-xl font-medium hover:bg-blush-700 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Explore Maternal Care
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Articles Preview */}
      <section id="articles" className="py-20 bg-blush-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-4" style={{ fontFamily: 'Georgia, serif' }}>
              Latest Health & Wellness Articles
            </h2>
            <p className="text-charcoal-light max-w-2xl mx-auto">
              Stay informed with our latest articles on women's health, wellness, and medical insights.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {articles.slice(0, 3).map((article) => (
              <div key={article.id} className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <span className="inline-block px-3 py-1 text-xs font-medium bg-blush-100 text-blush-700 rounded-full mb-3">
                    {article.category}
                  </span>
                  <h3 className="text-lg font-semibold text-charcoal mb-2">{article.title}</h3>
                  <p className="text-sm text-charcoal-light mb-4 line-clamp-2">{article.description}</p>
                  <Link
                    to={`/articles`}
                    className="inline-flex items-center gap-1 text-sm font-medium text-blush-600 hover:text-blush-700 transition-colors"
                  >
                    Read More <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/articles"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-blush-600 text-blush-600 rounded-xl font-medium hover:bg-blush-50 transition-all duration-200"
            >
              View All Articles
            </Link>
          </div>
        </div>
      </section>

      {/* Emergency Section */}
      <section className="py-20 bg-gradient-to-r from-peach-50 to-lavender-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-4" style={{ fontFamily: 'Georgia, serif' }}>
              Need Important Health Support?
            </h2>
            <p className="text-charcoal-light max-w-2xl mx-auto">
              Access emergency helpline information and important healthcare support resources.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm max-w-3xl mx-auto">
            <div className="flex items-start gap-4 mb-6">
              <AlertCircle className="w-6 h-6 text-lavender-600 mt-1 flex-shrink-0" />
              <p className="text-charcoal-light">{emergencyInfo.guidance}</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              {emergencyInfo.helplines.slice(0, 4).map((helpline, i) => (
                <div key={i} className="p-4 bg-blush-50 rounded-xl">
                  <p className="text-sm font-medium text-charcoal">{helpline.name}</p>
                  <p className="text-lg font-bold text-blush-600">{helpline.number}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/emergency"
                className="inline-flex items-center gap-2 px-6 py-3 bg-lavender-600 text-white rounded-xl font-medium hover:bg-lavender-700 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                View Emergency Information
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/emergency"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-lavender-600 text-lavender-600 rounded-xl font-medium hover:bg-lavender-50 transition-all duration-200"
              >
                Find Nearby Healthcare
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* User Feedback Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-4" style={{ fontFamily: 'Georgia, serif' }}>
              Your Voice Matters
            </h2>
            <p className="text-charcoal-light max-w-2xl mx-auto mb-8">
              We value your feedback! Help us improve Femora by sharing your thoughts, suggestions, and experiences.
            </p>
            <Link
              to="/feedback"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blush-600 text-white rounded-xl font-medium hover:bg-blush-700 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <MessageSquare className="w-4 h-4" />
              Give Feedback
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {[
              { name: 'Sarah M.', text: 'Femora has been incredibly helpful for tracking my cycle and understanding my body better. The articles are so easy to read!', rating: 5 },
              { name: 'Emily R.', text: 'As a new mom, the maternal care resources gave me confidence during pregnancy. Highly recommend this platform.', rating: 5 },
              { name: 'Priya K.', text: 'The mental wellness section is a game-changer. I love the self-care tips and stress management techniques.', rating: 5 },
            ].map((testimonial, i) => (
              <div key={i} className="bg-blush-50 p-6 rounded-2xl shadow-sm">
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: testimonial.rating }).map((_, idx) => (
                    <Star key={idx} className="w-4 h-4 text-blush-500 fill-blush-500" />
                  ))}
                </div>
                <p className="text-sm text-charcoal-light mb-4 italic">"{testimonial.text}"</p>
                <p className="text-sm font-medium text-charcoal">— {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-blush-50/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-4" style={{ fontFamily: 'Georgia, serif' }}>
              Frequently Asked Questions
            </h2>
            <p className="text-charcoal-light">
              Find answers to common questions about women's health and wellness.
            </p>
          </div>

          <div className="space-y-4 mb-8">
            {faqs.slice(0, 5).map((faq) => (
              <div
                key={faq.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === faq.id ? null : faq.id)}
                  className="w-full px-6 py-4 flex justify-between items-center text-left hover:bg-blush-50 transition-colors"
                >
                  <span className="font-medium text-charcoal">{faq.question}</span>
                  <ChevronRight
                    className={`w-5 h-5 text-blush-600 transition-transform duration-300 ${openFaq === faq.id ? 'rotate-180' : ''}`}
                  />
                </button>
                <div
                  className="overflow-hidden transition-all duration-300"
                  style={{ maxHeight: openFaq === faq.id ? '300px' : '0px' }}
                >
                  <p className="px-6 pb-4 text-sm text-charcoal-light">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/feedback"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-blush-600 text-blush-600 rounded-xl font-medium hover:bg-blush-50 transition-all duration-200"
            >
              View All FAQs
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blush-600 to-blush-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4" style={{ fontFamily: 'Georgia, serif' }}>
            Take the First Step Towards Better Wellness
          </h2>
          <p className="text-blush-100 mb-8 max-w-2xl mx-auto">
            Join Femora and explore a supportive space designed to help you learn, grow, and take better care of yourself.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/register"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blush-600 rounded-xl font-medium hover:bg-blush-50 transition-all duration-200 shadow-lg"
            >
              Create Free Account
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/login"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-white text-white rounded-xl font-medium hover:bg-white/10 transition-all duration-200"
            >
              Login
            </Link>
            <Link
              to="/#categories"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-white text-white rounded-xl font-medium hover:bg-white/10 transition-all duration-200"
            >
              Explore Resources
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
