import { Link } from 'react-router-dom'
import { Baby, ArrowRight, Stethoscope, Apple, Heart, ChevronRight, HeartPulse, Sparkles } from 'lucide-react'

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
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-4" style={{ fontFamily: 'Georgia, serif' }}>
            Your Pregnancy Journey
          </h2>
          <p className="text-charcoal-light max-w-2xl mx-auto">
            Follow along as your body and baby grow through each trimester and beyond.
          </p>
        </div>

        <div className="relative">
          <div className="hidden md:flex items-center justify-between mb-8 relative">
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-blush-200 -translate-y-1/2" />
            {[
              { id: 1, label: '1st Trimester', sub: 'Weeks 1-12' },
              { id: 2, label: '2nd Trimester', sub: 'Weeks 13-27' },
              { id: 3, label: '3rd Trimester', sub: 'Weeks 28-40' },
              { id: 4, label: 'Postpartum', sub: 'After birth' },
            ].map((stage) => (
              <button
                key={stage.id}
                className="relative z-10 flex flex-col items-center gap-2 group"
              >
                <div className="w-12 h-12 rounded-full bg-white border-2 border-blush-200 flex items-center justify-center text-blush-600 font-bold shadow-sm group-hover:border-blush-400 transition-colors">
                  {stage.id}
                </div>
                <span className="text-sm font-semibold text-charcoal">{stage.label}</span>
                <span className="text-xs text-charcoal-light">{stage.sub}</span>
              </button>
            ))}
          </div>

          <div className="md:hidden flex flex-col gap-4 mb-8 relative">
            {[
              { id: 1, label: '1st Trimester', sub: 'Weeks 1-12' },
              { id: 2, label: '2nd Trimester', sub: 'Weeks 13-27' },
              { id: 3, label: '3rd Trimester', sub: 'Weeks 28-40' },
              { id: 4, label: 'Postpartum', sub: 'After birth' },
            ].map((stage) => (
              <div key={stage.id} className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blush-50 border-2 border-blush-200 flex items-center justify-center text-blush-600 font-bold shrink-0">
                  {stage.id}
                </div>
                <div>
                  <p className="font-semibold text-charcoal">{stage.label}</p>
                  <p className="text-xs text-charcoal-light">{stage.sub}</p>
                </div>
                <div className="ml-auto w-2 h-2 rounded-full bg-blush-300" />
              </div>
            ))}
            <div className="absolute left-6 top-12 bottom-12 w-0.5 bg-blush-200" />
          </div>

          <div className="bg-blush-50 rounded-3xl p-6 sm:p-8 border border-blush-100">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: '1st Trimester',
                  weeks: 'Weeks 1-12',
                  happening: 'The placenta forms and the baby\'s organs begin to develop.',
                  checkups: 'First prenatal visit, blood tests, ultrasound.',
                  nutrition: 'Folic acid, iron, calcium, and hydration.',
                  changes: 'Morning sickness, fatigue, breast tenderness.',
                  discuss: 'Medications, prenatal vitamins, genetic screening.',
                },
                {
                  title: '2nd Trimester',
                  weeks: 'Weeks 13-27',
                  happening: 'Baby grows stronger; you may start feeling movements.',
                  checkups: 'Anatomy scan, glucose screening, blood pressure checks.',
                  nutrition: 'Increased protein, omega-3s, fiber, and water.',
                  changes: 'Growing belly, energy boost, possible back pain.',
                  discuss: 'Birth plan options, cord blood banking, activity level.',
                },
                {
                  title: '3rd Trimester',
                  weeks: 'Weeks 28-40',
                  happening: 'Baby gains weight and prepares for birth; lungs mature.',
                  checkups: 'Weekly checkups, non-stress tests, Group B Strep test.',
                  nutrition: 'Small frequent meals, iron-rich foods, limit caffeine.',
                  changes: 'Shortness of breath, swelling, Braxton Hicks contractions.',
                  discuss: 'Labor signs, epidural options, breastfeeding plans.',
                },
                {
                  title: 'Postpartum',
                  weeks: 'After birth',
                  happening: 'Your body recovers and adjusts to life with your newborn.',
                  checkups: '6-week postpartum checkup, mental health screening.',
                  nutrition: 'Iron-rich foods, hydration, balanced meals for recovery.',
                  changes: 'Healing from delivery, hormonal shifts, sleep changes.',
                  discuss: 'Contraception, postpartum depression, physical recovery.',
                },
              ].map((stage) => (
                <div key={stage.title} className="bg-white rounded-2xl p-5 shadow-sm border border-blush-100 hover:shadow-md transition-shadow">
                  <div className="mb-4">
                    <h3 className="text-lg font-bold text-charcoal">{stage.title}</h3>
                    <p className="text-xs text-blush-600 font-medium">{stage.weeks}</p>
                  </div>
                  <div className="space-y-3 text-sm">
                    <div>
                      <p className="font-semibold text-charcoal mb-1">What is happening</p>
                      <p className="text-charcoal-light">{stage.happening}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-charcoal mb-1">Important checkups</p>
                      <p className="text-charcoal-light">{stage.checkups}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-charcoal mb-1">Nutrition</p>
                      <p className="text-charcoal-light">{stage.nutrition}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-charcoal mb-1">Common changes</p>
                      <p className="text-charcoal-light">{stage.changes}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-charcoal mb-1">Discuss with your doctor</p>
                      <p className="text-charcoal-light">{stage.discuss}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-4" style={{ fontFamily: 'Georgia, serif' }}>
            Explore Topics
          </h2>
          <p className="text-charcoal-light max-w-2xl mx-auto">
            Find guidance and support for every stage of motherhood.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: Baby,
              title: 'Pregnancy',
              desc: 'Week-by-week guidance, common changes, and important prenatal care information.',
              color: 'text-blush-600',
              bg: 'bg-blush-50',
            },
            {
              icon: HeartPulse,
              title: 'Maternal Care',
              desc: 'Nutrition, physical activity, checkups, and healthy habits during pregnancy.',
              color: 'text-rose-500',
              bg: 'bg-rose-50',
            },
            {
              icon: Heart,
              title: 'New Mothers',
              desc: 'Practical guidance for caring for yourself and your newborn.',
              color: 'text-pink-500',
              bg: 'bg-pink-50',
            },
            {
              icon: Sparkles,
              title: 'Postpartum',
              desc: 'Recovery, emotional wellbeing, nutrition, and changes after childbirth.',
              color: 'text-orange-500',
              bg: 'bg-orange-50',
            },
          ].map((topic) => (
            <div
              key={topic.title}
              className={`${topic.bg} rounded-3xl p-6 border border-blush-100 hover:shadow-lg transition-all duration-300 flex flex-col`}
            >
              <div className={`w-12 h-12 rounded-2xl bg-white flex items-center justify-center mb-4 shadow-sm`}>
                <topic.icon className={`w-6 h-6 ${topic.color}`} />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-2">{topic.title}</h3>
              <p className="text-charcoal-light text-sm leading-relaxed flex-1">{topic.desc}</p>
              <div className="mt-4">
                <span className="text-sm font-semibold text-blush-600 hover:text-blush-700 transition-colors">
                  Learn more →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
