import { Baby, Stethoscope, Apple, Heart, HeartPulse, Sparkles, Droplets, Moon, ArrowRight, ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function MaternalCare() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-b from-blush-50 via-white to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="max-w-xl">
              <span className="inline-block px-5 py-2 bg-white/80 text-blush-700 rounded-full text-sm font-semibold tracking-widest mb-8 border border-blush-100">
                MATERNAL HEALTH
              </span>
              <h1 className="text-5xl sm:text-6xl font-bold text-charcoal mb-8 leading-[1.1]" style={{ fontFamily: 'Georgia, serif' }}>
                A healthier pregnancy, one step at a time.
              </h1>
              <p className="text-xl text-charcoal-light mb-10 leading-relaxed">
                Expert guidance for every stage of your pregnancy journey. From prenatal care to postpartum recovery, we are here to support you.
              </p>
              <div className="flex flex-wrap gap-4">
                <span className="inline-flex items-center gap-2 px-8 py-4 bg-blush-600 text-white rounded-2xl font-medium shadow-lg shadow-blush-200/50 cursor-default">
                  Explore Pregnancy Guide <ChevronRight className="w-5 h-5" />
                </span>
                <span className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blush-600 border border-blush-200 rounded-2xl font-medium cursor-default">
                  Read Articles
                </span>
              </div>
            </div>

            <div className="relative flex items-center justify-center">
              <div className="relative w-full max-w-lg aspect-square bg-gradient-to-br from-blush-50 to-white rounded-[2.5rem] flex items-center justify-center border border-blush-100 shadow-sm">
                <Baby className="w-40 h-40 text-blush-200" strokeWidth={0.8} />

                <div className="absolute -top-6 -right-6 bg-white/95 px-5 py-4 rounded-3xl shadow-lg shadow-blush-100/80 border border-blush-50 flex items-center gap-3 backdrop-blur-sm">
                  <div className="w-11 h-11 bg-blush-50 rounded-2xl flex items-center justify-center">
                    <Stethoscope className="w-5 h-5 text-blush-600" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-charcoal">Prenatal Care</p>
                    <p className="text-xs text-charcoal-light">Stay protected</p>
                  </div>
                </div>

                <div className="absolute top-1/2 -left-8 bg-white/95 px-5 py-4 rounded-3xl shadow-lg shadow-blush-100/80 border border-blush-50 flex items-center gap-3 backdrop-blur-sm">
                  <div className="w-11 h-11 bg-blush-50 rounded-2xl flex items-center justify-center">
                    <Apple className="w-5 h-5 text-blush-600" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-charcoal">Nutrition</p>
                    <p className="text-xs text-charcoal-light">Eat well, thrive</p>
                  </div>
                </div>

                <div className="absolute -bottom-6 right-6 bg-white/95 px-5 py-4 rounded-3xl shadow-lg shadow-blush-100/80 border border-blush-50 flex items-center gap-3 backdrop-blur-sm">
                  <div className="w-11 h-11 bg-blush-50 rounded-2xl flex items-center justify-center">
                    <Heart className="w-5 h-5 text-blush-600" strokeWidth={1.5} />
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-charcoal mb-6" style={{ fontFamily: 'Georgia, serif' }}>
            Your Pregnancy Journey
          </h2>
          <p className="text-charcoal-light max-w-2xl mx-auto text-lg">
            Follow along as your body and baby grow through each trimester and beyond.
          </p>
        </div>

        <div className="relative mb-16">
          <div className="hidden md:flex items-center justify-between mb-10 relative">
            <div className="absolute top-1/2 left-0 right-0 h-px bg-blush-200 -translate-y-1/2" />
            {[
              { id: 1, label: '1st Trimester', sub: 'Weeks 1-12' },
              { id: 2, label: '2nd Trimester', sub: 'Weeks 13-27' },
              { id: 3, label: '3rd Trimester', sub: 'Weeks 28-40' },
              { id: 4, label: 'Postpartum', sub: 'After birth' },
            ].map((stage) => (
              <div
                key={stage.id}
                className="relative z-10 flex flex-col items-center gap-3"
              >
                <div className="w-14 h-14 rounded-full bg-white border border-blush-200 flex items-center justify-center text-blush-600 font-bold shadow-sm">
                  {stage.id}
                </div>
                <span className="text-sm font-semibold text-charcoal">{stage.label}</span>
                <span className="text-xs text-charcoal-light">{stage.sub}</span>
              </div>
            ))}
          </div>

          <div className="md:hidden flex flex-col gap-6 mb-10 relative">
            {[
              { id: 1, label: '1st Trimester', sub: 'Weeks 1-12' },
              { id: 2, label: '2nd Trimester', sub: 'Weeks 13-27' },
              { id: 3, label: '3rd Trimester', sub: 'Weeks 28-40' },
              { id: 4, label: 'Postpartum', sub: 'After birth' },
            ].map((stage) => (
              <div key={stage.id} className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-full bg-blush-50 border border-blush-200 flex items-center justify-center text-blush-600 font-bold shrink-0">
                  {stage.id}
                </div>
                <div>
                  <p className="font-semibold text-charcoal">{stage.label}</p>
                  <p className="text-xs text-charcoal-light">{stage.sub}</p>
                </div>
                <div className="ml-auto w-2 h-2 rounded-full bg-blush-300" />
              </div>
            ))}
            <div className="absolute left-7 top-16 bottom-16 w-px bg-blush-200" />
          </div>

          <div className="bg-gradient-to-b from-blush-50/80 to-white rounded-[2rem] p-8 sm:p-10 border border-blush-100">
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
                <div key={stage.title} className="bg-white rounded-3xl p-6 shadow-sm border border-blush-100 hover:-translate-y-1 hover:shadow-lg hover:shadow-blush-100/60 transition-all duration-300">
                  <div className="mb-5">
                    <h3 className="text-xl font-bold text-charcoal" style={{ fontFamily: 'Georgia, serif' }}>{stage.title}</h3>
                    <p className="text-xs text-blush-600 font-medium mt-1">{stage.weeks}</p>
                  </div>
                  <div className="space-y-4 text-sm">
                    <div>
                      <p className="font-semibold text-charcoal mb-1.5">What is happening</p>
                      <p className="text-charcoal-light leading-relaxed">{stage.happening}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-charcoal mb-1.5">Important checkups</p>
                      <p className="text-charcoal-light leading-relaxed">{stage.checkups}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-charcoal mb-1.5">Nutrition</p>
                      <p className="text-charcoal-light leading-relaxed">{stage.nutrition}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-charcoal mb-1.5">Common changes</p>
                      <p className="text-charcoal-light leading-relaxed">{stage.changes}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-charcoal mb-1.5">Discuss with your doctor</p>
                      <p className="text-charcoal-light leading-relaxed">{stage.discuss}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-b from-white via-blush-50/40 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold text-charcoal mb-6" style={{ fontFamily: 'Georgia, serif' }}>
              Explore Topics
            </h2>
            <p className="text-charcoal-light max-w-2xl mx-auto text-lg">
              Find guidance and support for every stage of motherhood.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Baby,
                title: 'Pregnancy',
                desc: 'Week-by-week guidance, common changes, and important prenatal care information.',
                color: 'text-blush-600',
                bg: 'bg-blush-50/80',
              },
              {
                icon: HeartPulse,
                title: 'Maternal Care',
                desc: 'Nutrition, physical activity, checkups, and healthy habits during pregnancy.',
                color: 'text-rose-500',
                bg: 'bg-rose-50/80',
              },
              {
                icon: Heart,
                title: 'New Mothers',
                desc: 'Practical guidance for caring for yourself and your newborn.',
                color: 'text-pink-500',
                bg: 'bg-pink-50/80',
              },
              {
                icon: Sparkles,
                title: 'Postpartum',
                desc: 'Recovery, emotional wellbeing, nutrition, and changes after childbirth.',
                color: 'text-orange-500',
                bg: 'bg-orange-50/80',
              },
            ].map((topic) => (
              <div
                key={topic.title}
                className={`${topic.bg} rounded-[2rem] p-8 border border-blush-100 hover:-translate-y-1 hover:shadow-xl hover:shadow-blush-100/60 transition-all duration-300 flex flex-col`}
              >
                <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center mb-6 shadow-sm">
                  <topic.icon className={`w-7 h-7 ${topic.color}`} strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-bold text-charcoal mb-3" style={{ fontFamily: 'Georgia, serif' }}>{topic.title}</h3>
                <p className="text-charcoal-light leading-relaxed flex-1">{topic.desc}</p>
                <div className="mt-6">
                  <span className="text-sm font-semibold text-blush-600">
                    Learn more →
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-b from-white to-blush-50/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold text-charcoal mb-6" style={{ fontFamily: 'Georgia, serif' }}>
              Healthy Pregnancy Essentials
            </h2>
            <p className="text-charcoal-light max-w-2xl mx-auto text-lg">
              Small, consistent habits that make a big difference for you and your baby.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Apple,
                title: 'Nutrition',
                desc: 'Eat a balanced diet rich in folate, iron, calcium, and protein to support your baby\'s growth.',
              },
              {
                icon: Droplets,
                title: 'Hydration',
                desc: 'Drink plenty of water throughout the day to support amniotic fluid and overall health.',
              },
              {
                icon: Moon,
                title: 'Rest & Sleep',
                desc: 'Aim for 7-9 hours of quality sleep and listen to your body\'s need for extra rest.',
              },
              {
                icon: Stethoscope,
                title: 'Prenatal Checkups',
                desc: 'Attend regular appointments to monitor your health and your baby\'s development.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-[2rem] p-8 shadow-sm border border-blush-100 hover:-translate-y-1 hover:shadow-lg hover:shadow-blush-100/60 transition-all duration-300 flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 rounded-full bg-blush-50 flex items-center justify-center mb-6">
                  <item.icon className="w-8 h-8 text-blush-600" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-charcoal mb-3" style={{ fontFamily: 'Georgia, serif' }}>{item.title}</h3>
                <p className="text-charcoal-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-charcoal mb-6" style={{ fontFamily: 'Georgia, serif' }}>
            New Mothers
          </h2>
          <p className="text-charcoal-light max-w-2xl mx-auto text-lg">
            Practical guidance for caring for yourself and your newborn during the early weeks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: 'Physical Recovery',
              desc: 'Healing after vaginal or C-section delivery, managing pain, and knowing when to rest.',
            },
            {
              title: 'Emotional Wellbeing',
              desc: 'Understanding baby blues, recognizing postpartum depression, and finding support.',
            },
            {
              title: 'Newborn Care Basics',
              desc: 'Feeding, sleep routines, diapering, and bonding with your baby in the first weeks.',
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-[2rem] p-8 shadow-sm border border-blush-100 hover:-translate-y-1 hover:shadow-lg hover:shadow-blush-100/60 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-blush-50 flex items-center justify-center mb-6">
                <Heart className="w-5 h-5 text-blush-600" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-3" style={{ fontFamily: 'Georgia, serif' }}>{item.title}</h3>
              <p className="text-charcoal-light leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-b from-blush-50/60 via-white to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold text-charcoal mb-6" style={{ fontFamily: 'Georgia, serif' }}>
              Articles & Resources
            </h2>
            <p className="text-charcoal-light max-w-2xl mx-auto text-lg">
              Expert-written content to support your health journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Understanding Your Menstrual Cycle',
                category: 'Menstrual Health',
                readTime: '8 min read',
              },
              {
                title: 'Nutrition During Pregnancy',
                category: 'Pregnancy',
                readTime: '6 min read',
              },
              {
                title: 'Breaking the Silence: Women and Mental Health',
                category: 'Mental Health',
                readTime: '7 min read',
              },
            ].map((article) => (
              <div
                key={article.title}
                className="bg-white rounded-[2rem] p-8 shadow-sm border border-blush-100 hover:-translate-y-1 hover:shadow-lg hover:shadow-blush-100/60 transition-all duration-300 flex flex-col"
              >
                <div className="flex items-center gap-3 mb-5">
                  <span className="px-3 py-1 bg-blush-50 text-blush-700 rounded-full text-xs font-medium">{article.category}</span>
                  <span className="text-xs text-charcoal-light">{article.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-charcoal mb-3 leading-snug" style={{ fontFamily: 'Georgia, serif' }}>{article.title}</h3>
                <div className="mt-auto pt-4">
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-blush-600">
                    Read article <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28">
        <div className="bg-gradient-to-br from-blush-50 to-white rounded-[2.5rem] p-12 sm:p-16 text-center border border-blush-100">
          <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-6" style={{ fontFamily: 'Georgia, serif' }}>
            Start your wellness journey today
          </h2>
          <p className="text-charcoal-light max-w-xl mx-auto mb-10 text-lg">
            Join thousands of women who trust Femora for reliable health information and support.
          </p>
          <span className="inline-flex items-center gap-2 px-10 py-4 bg-blush-600 text-white rounded-2xl font-medium shadow-lg shadow-blush-200/50 cursor-default">
            Get Started <ArrowRight className="w-5 h-5" />
          </span>
        </div>
      </div>
    </div>
  )
}
