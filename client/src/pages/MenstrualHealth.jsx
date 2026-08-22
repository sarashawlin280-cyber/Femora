import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Heart,
  ArrowRight,
  BookOpen,
  Droplets,
  Activity,
  ShieldCheck,
  Calendar,
  Clock,
  Moon,
  Sun,
  Cloud,
  BatteryLow,
  Headphones,
  CloudRain,
  Shirt,
  HelpCircle,
  XCircle,
  CheckCircle,
  AlertCircle,
  FileText,
  Pill,
} from 'lucide-react'
import { articles } from '../data/mockData'

const menstrualArticles = articles.filter(a => a.category === 'Menstrual Health')

const exploreTopics = [
  {
    title: 'Understanding Your Period',
    desc: 'Learn what menstruation is, what happens during a period, and what can be considered normal.',
    icon: BookOpen,
    color: 'blush',
    anchor: 'know-your-period',
  },
  {
    title: 'Menstrual Hygiene',
    desc: 'Learn about healthy period-care habits and how to stay comfortable and hygienic.',
    icon: ShieldCheck,
    color: 'lavender',
    anchor: null,
  },
  {
    title: 'Period Pain & Cramps',
    desc: 'Understand why cramps happen and learn about general ways to manage period discomfort safely.',
    icon: Activity,
    color: 'peach',
    anchor: 'common-symptoms',
  },
  {
    title: 'Menstrual Symptoms',
    desc: 'Learn about common symptoms such as bloating, headaches, fatigue, mood changes, and breast tenderness.',
    icon: Cloud,
    color: 'blush',
    anchor: 'common-symptoms',
  },
  {
    title: 'Irregular Periods',
    desc: 'Understand some common reasons periods may change and when significant changes should be discussed with a healthcare professional.',
    icon: Clock,
    color: 'lavender',
    anchor: 'when-to-seek-help',
  },
  {
    title: 'Heavy Periods',
    desc: 'Learn what unusually heavy bleeding can look like and when it may need professional attention.',
    icon: Droplets,
    color: 'peach',
    anchor: 'when-to-seek-help',
  },
  {
    title: 'PMS & PMDD',
    desc: 'Learn about premenstrual symptoms and how more severe symptoms can affect daily life.',
    icon: Moon,
    color: 'blush',
    anchor: 'common-symptoms',
  },
  {
    title: 'Menstrual Health & Nutrition',
    desc: 'Explore how balanced nutrition, hydration, sleep, and overall wellbeing can support menstrual health.',
    icon: CloudRain,
    color: 'lavender',
    anchor: null,
  },
  {
    title: 'Period Products',
    desc: 'Learn about different menstrual products and factors to consider when choosing what works for you.',
    icon: Shirt,
    color: 'peach',
    anchor: null,
  },
  {
    title: 'Menstrual Myths & Facts',
    desc: 'Separate common menstrual myths from evidence-based information.',
    icon: HelpCircle,
    color: 'blush',
    anchor: 'myths-vs-facts',
  },
]

const knowYourPeriodItems = [
  {
    q: 'What is menstruation?',
    a: 'Menstruation is the regular discharge of blood and tissue from the uterine lining through the vagina. It is a normal, healthy part of the menstrual cycle and usually occurs in cycles of 21 to 35 days.',
  },
  {
    q: 'Why does menstrual bleeding happen?',
    a: 'Each month, the uterus prepares for a possible pregnancy. If pregnancy does not occur, hormone levels drop, causing the uterine lining to break down and shed as menstrual blood.',
  },
  {
    q: 'What can a typical period look like?',
    a: 'A typical period lasts 2 to 7 days. Flow may be heavier on the first few days and then lighter. The color can range from bright red to dark brown, and small clots can be normal.',
  },
  {
    q: 'Why can periods vary from person to person?',
    a: 'Every body is different. Cycle length, flow, symptoms, and duration can vary widely from person to person and even from one cycle to another. What matters most is knowing your own normal pattern.',
  },
  {
    q: 'What factors can influence menstrual changes?',
    a: 'Stress, weight changes, diet, exercise, illness, sleep patterns, hormonal contraceptives, and aging can all influence cycle length, flow, and symptoms.',
  },
]

const symptomItems = [
  {
    id: 'cramps',
    title: 'Cramps',
    icon: Activity,
    color: 'blush',
    explanation: 'Cramps are caused by the uterus contracting to help shed its lining. They are common, especially in the first few days of a period. Gentle movement, heat, and rest often help. If pain is severe or interferes with daily life, consider speaking with a healthcare provider.',
  },
  {
    id: 'bloating',
    title: 'Bloating',
    icon: Cloud,
    color: 'lavender',
    explanation: 'Bloating before or during a period is common and is often linked to hormonal changes. Eating smaller meals, staying active, and reducing salty foods can help reduce discomfort.',
  },
  {
    id: 'headache',
    title: 'Headache',
    icon: Headphones,
    color: 'peach',
    explanation: 'Hormonal shifts, especially the drop in estrogen before menstruation, can trigger headaches. Staying hydrated, resting in a quiet space, and managing stress may help. Seek advice if headaches are frequent or severe.',
  },
  {
    id: 'fatigue',
    title: 'Fatigue',
    icon: BatteryLow,
    color: 'blush',
    explanation: 'Feeling tired during or before your period is common. Iron loss during bleeding, hormonal changes, and disrupted sleep can all contribute. Rest and balanced nutrition help.',
  },
  {
    id: 'mood',
    title: 'Mood Changes',
    icon: Sun,
    color: 'lavender',
    explanation: 'Hormonal fluctuations can affect neurotransmitters in the brain, leading to mood swings, irritability, or low mood. Regular exercise, sleep, and stress management can support emotional balance.',
  },
  {
    id: 'breast',
    title: 'Breast Tenderness',
    icon: ShieldCheck,
    color: 'peach',
    explanation: 'Breast tenderness before or during a period is common and usually related to rising estrogen and progesterone levels. A supportive bra and gentle movement often help.',
  },
  {
    id: 'acne',
    title: 'Acne',
    icon: Pill,
    color: 'blush',
    explanation: 'Hormonal changes, especially increased androgens, can stimulate oil production and lead to breakouts. Gentle skincare, staying hydrated, and a balanced diet may help manage flare-ups.',
  },
]

const myths = [
  {
    myth: 'Period blood is dirty blood.',
    fact: 'Menstrual blood is a mixture of blood and tissue shed from the uterine lining. It is a normal part of the menstrual process and is not dirty or toxic.',
  },
  {
    myth: 'Everyone has a 28-day cycle.',
    fact: 'Cycle length can naturally vary between people and can also vary from one cycle to another. A normal cycle ranges from 21 to 35 days.',
  },
  {
    myth: 'You cannot get pregnant during your period.',
    fact: 'While less likely, pregnancy can still occur, especially in people with shorter or irregular cycles. Sperm can survive for several days inside the body.',
  },
  {
    myth: 'You should not exercise during your period.',
    fact: 'Exercise is safe and often helpful during menstruation. Light activity such as walking, yoga, or swimming can reduce cramps and improve mood.',
  },
  {
    myth: 'PMS is all in your head.',
    fact: 'PMS is a real, medically recognized set of symptoms linked to hormonal changes. Physical, emotional, and behavioral symptoms are all common and valid.',
  },
]

const concernItems = [
  'Very heavy bleeding or soaking through pads/tampons every hour',
  'Severe or unusual pain that does not improve with typical self-care',
  'Major changes in your usual period length or pattern',
  'Bleeding between periods or after menopause',
  'Periods stopping unexpectedly without a clear reason',
  'Symptoms that interfere significantly with daily activities',
]

const colorMap = {
  blush: {
    bg: 'bg-blush-100',
    text: 'text-blush-700',
    border: 'border-blush-100',
    hoverBorder: 'hover:border-blush-200',
    iconBg: 'bg-blush-100',
    iconText: 'text-blush-600',
    light: 'bg-blush-50',
  },
  lavender: {
    bg: 'bg-lavender-100',
    text: 'text-lavender-700',
    border: 'border-lavender-100',
    hoverBorder: 'hover:border-lavender-200',
    iconBg: 'bg-lavender-100',
    iconText: 'text-lavender-600',
    light: 'bg-lavender-50',
  },
  peach: {
    bg: 'bg-peach-100',
    text: 'text-peach-700',
    border: 'border-peach-100',
    hoverBorder: 'hover:border-peach-200',
    iconBg: 'bg-peach-100',
    iconText: 'text-peach-600',
    light: 'bg-peach-50',
  },
}

export default function MenstrualHealth() {
  const [selectedSymptom, setSelectedSymptom] = useState(null)

  const activeSymptom = symptomItems.find(s => s.id === selectedSymptom) || null

  return (
    <div className="min-h-screen bg-white">
      <section className="relative overflow-hidden bg-gradient-to-b from-blush-50 to-white">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blush-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
        <div className="absolute top-40 right-10 w-72 h-72 bg-lavender-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-peach-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '2s' }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <span className="inline-block px-4 py-1.5 bg-blush-100 text-blush-700 rounded-full text-sm font-medium">
                MENSTRUAL HEALTH
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-charcoal leading-tight" style={{ fontFamily: 'Georgia, serif' }}>
                Everything You Need to Know About Menstrual Health
              </h1>
              <p className="text-lg text-charcoal-light max-w-xl leading-relaxed">
                Learn about your period, menstrual hygiene, common symptoms, menstrual health concerns, and the changes your body can experience.
              </p>
            </div>
            <div className="relative hidden lg:flex items-center justify-center">
              <div className="relative w-full aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-blush-100 to-lavender-100 rounded-full opacity-60" />
                <div className="absolute inset-8 bg-gradient-to-tr from-blush-50 to-white rounded-full opacity-80" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Heart className="w-32 h-32 text-blush-400 fill-blush-300" />
                </div>
                <div className="absolute top-10 right-10 w-16 h-16 bg-blush-200 rounded-full flex items-center justify-center animate-bounce">
                  <Droplets className="w-8 h-8 text-blush-600" />
                </div>
                <div className="absolute bottom-10 left-10 w-12 h-12 bg-lavender-200 rounded-full flex items-center justify-center animate-bounce" style={{ animationDelay: '0.5s' }}>
                  <Activity className="w-6 h-6 text-lavender-600" />
                </div>
                <div className="absolute top-1/2 right-4 w-10 h-10 bg-peach-200 rounded-full flex items-center justify-center animate-bounce" style={{ animationDelay: '1s' }}>
                  <ShieldCheck className="w-5 h-5 text-peach-600" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white" id="explore">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-4" style={{ fontFamily: 'Georgia, serif' }}>
              Explore Menstrual Health
            </h2>
            <p className="text-lg text-charcoal-light max-w-2xl mx-auto">
              Build your understanding of your period, symptoms, hygiene, and overall menstrual wellbeing.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {exploreTopics.map((topic, i) => {
              const Icon = topic.icon
              const colors = colorMap[topic.color]
              const isWide = i === 0 || i === 5 || i === 9
              return (
                <div
                  key={i}
                  className={`group relative bg-gradient-to-br ${colors.light} to-white rounded-3xl p-8 border ${colors.border} ${colors.hoverBorder} hover:shadow-lg transition-all duration-300 ${isWide ? 'sm:col-span-2 lg:col-span-1' : ''}`}
                >
                  <div className={`w-14 h-14 ${colors.iconBg} ${colors.iconText} rounded-2xl flex items-center justify-center mb-6`}>
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-semibold text-charcoal mb-3" style={{ fontFamily: 'Georgia, serif' }}>
                    {topic.title}
                  </h3>
                  <p className="text-charcoal-light mb-4 leading-relaxed text-sm">
                    {topic.desc}
                  </p>
                  {topic.anchor ? (
                    <a href={`#${topic.anchor}`} className="inline-flex items-center gap-2 text-sm font-medium text-blush-600 group-hover:text-blush-700 transition-colors">
                      Learn More <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-2 text-sm font-medium text-blush-600 group-hover:text-blush-700 transition-colors">
                      Learn More <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-blush-50/40" id="know-your-period">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-4" style={{ fontFamily: 'Georgia, serif' }}>
              Know Your Period
            </h2>
            <p className="text-lg text-charcoal-light max-w-2xl mx-auto">
              Understanding what happens during menstruation can help you recognize your own normal pattern.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {knowYourPeriodItems.map((item, i) => (
              <div key={i} className="bg-white rounded-3xl p-8 shadow-sm border border-blush-100 hover:shadow-md transition-all duration-300">
                <h3 className="text-lg font-semibold text-charcoal mb-3" style={{ fontFamily: 'Georgia, serif' }}>
                  {item.q}
                </h3>
                <p className="text-charcoal-light leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white" id="common-symptoms">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-4" style={{ fontFamily: 'Georgia, serif' }}>
              Common Period Symptoms
            </h2>
            <p className="text-lg text-charcoal-light max-w-2xl mx-auto">
              Many symptoms are common before and during menstruation. Select a symptom to learn more.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 mb-8">
            {symptomItems.map((symptom) => {
              const Icon = symptom.icon
              const colors = colorMap[symptom.color]
              const isSelected = selectedSymptom === symptom.id
              return (
                <button
                  key={symptom.id}
                  onClick={() => setSelectedSymptom(isSelected ? null : symptom.id)}
                  className={`flex flex-col items-center gap-3 p-6 rounded-2xl border-2 transition-all duration-300 ${
                    isSelected
                      ? `${colors.border} ${colors.bg} shadow-lg scale-105`
                      : 'border-blush-100 bg-white hover:border-blush-200 hover:shadow-md'
                  }`}
                >
                  <Icon className={`w-6 h-6 ${isSelected ? colors.iconText : 'text-charcoal-light'}`} />
                  <span className={`text-sm font-medium ${isSelected ? colors.text : 'text-charcoal'}`}>
                    {symptom.title}
                  </span>
                </button>
              )
            })}
          </div>

          {activeSymptom && (
            <div className={`${colorMap[activeSymptom.color].bg} rounded-3xl p-8 sm:p-10 border ${colorMap[activeSymptom.color].border} animate-fade-in`}>
              <div className="flex items-start gap-4">
                <activeSymptom.icon className={`w-8 h-8 ${colorMap[activeSymptom.color].iconText} flex-shrink-0 mt-1`} />
                <div>
                  <h4 className="text-xl font-semibold text-charcoal mb-2" style={{ fontFamily: 'Georgia, serif' }}>
                    {activeSymptom.title}
                  </h4>
                  <p className="text-charcoal-light leading-relaxed">{activeSymptom.explanation}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-blush-50/40 to-white" id="myths-vs-facts">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-4" style={{ fontFamily: 'Georgia, serif' }}>
              Period Myths vs Facts
            </h2>
            <p className="text-lg text-charcoal-light max-w-2xl mx-auto">
              Separate myth from reality with evidence-based information about menstrual health.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {myths.map((item, i) => (
              <div key={i} className="bg-white rounded-3xl p-8 shadow-sm border border-blush-100 hover:shadow-md transition-all duration-300">
                <div className="flex items-start gap-3 mb-4">
                  <XCircle className="w-6 h-6 text-blush-500 flex-shrink-0 mt-1" />
                  <h3 className="font-semibold text-charcoal text-lg" style={{ fontFamily: 'Georgia, serif' }}>
                    MYTH
                  </h3>
                </div>
                <p className="text-charcoal-light mb-6 leading-relaxed">{item.myth}</p>

                <div className="flex items-start gap-3 mb-4">
                  <CheckCircle className="w-6 h-6 text-lavender-500 flex-shrink-0 mt-1" />
                  <h3 className="font-semibold text-charcoal text-lg" style={{ fontFamily: 'Georgia, serif' }}>
                    FACT
                  </h3>
                </div>
                <p className="text-charcoal-light leading-relaxed">{item.fact}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white" id="when-to-seek-help">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12">
            <div className="flex items-start gap-4 mb-8">
              <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                <AlertCircle className="w-6 h-6 text-blush-300" />
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-2" style={{ fontFamily: 'Georgia, serif' }}>
                  When Should You Talk to a Doctor?
                </h2>
                <p className="text-slate-300 max-w-2xl">
                  Most menstrual changes are normal, but some signs deserve professional attention. If you experience any of the following, consider scheduling an appointment with a gynecologist or healthcare provider.
                </p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {concernItems.map((item, i) => (
                <div key={i} className="flex items-start gap-3 bg-white/5 rounded-xl p-4">
                  <span className="w-6 h-6 rounded-full bg-blush-500 text-white flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <span className="text-slate-200 text-sm leading-relaxed">{item}</span>
                </div>
              ))}
            </div>


          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-blush-50/40 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-4" style={{ fontFamily: 'Georgia, serif' }}>
              Menstrual Health Resources
            </h2>
            <p className="text-lg text-charcoal-light max-w-2xl mx-auto">
              Expert-written guides to help you understand your body better.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {menstrualArticles.map((article) => (
              <div
                key={article.id}
                className="group bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-blush-100"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <span className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-medium text-blush-700 rounded-full">
                    {article.category}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-charcoal mb-2 group-hover:text-blush-600 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-sm text-charcoal-light mb-4 line-clamp-2 leading-relaxed">
                    {article.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-charcoal-light">
                      {new Date(article.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-4" style={{ fontFamily: 'Georgia, serif' }}>
            Knowledge Helps You Understand Your Body
          </h2>
          <p className="text-lg text-charcoal-light max-w-2xl mx-auto mb-8">
            Learn about your menstrual health, recognize changes, and make informed decisions about your wellbeing.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/faq" className="inline-flex items-center gap-2 px-6 py-3 bg-blush-600 text-white rounded-xl font-medium hover:bg-blush-700 transition-all duration-200 shadow-lg hover:shadow-xl">
              Visit FAQ <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
