import { Brain, Heart, Moon, Sparkles, Users, BookOpen, Phone, ArrowRight, ChevronRight, Sun, Cloud, CloudRain, Smile, Frown, Meh } from 'lucide-react'

export default function MentalWellness() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-b from-lavender-50 via-white to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-28">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-lavender-100 rounded-full mb-8">
              <Brain className="w-10 h-10 text-lavender-600" strokeWidth={1.2} />
            </div>
            <h1 className="text-5xl sm:text-6xl font-bold text-charcoal mb-8 leading-[1.1]" style={{ fontFamily: 'Georgia, serif' }}>
              Mental Wellness
            </h1>
            <p className="text-xl text-charcoal-light leading-relaxed mb-10">
              Your mind deserves the same care as your body. Explore resources, coping strategies, and gentle support for your emotional wellbeing.
            </p>
            <span className="inline-flex items-center gap-2 px-8 py-4 bg-lavender-600 text-white rounded-2xl font-medium shadow-lg shadow-lavender-200/50 cursor-default">
              Explore Resources <ChevronRight className="w-5 h-5" />
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-charcoal mb-6" style={{ fontFamily: 'Georgia, serif' }}>
            How are you feeling today?
          </h2>
          <p className="text-charcoal-light max-w-2xl mx-auto text-lg">
            Take a quiet moment to check in with yourself. There is no wrong answer.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 mb-12">
          {[
            { icon: Smile, label: 'Great', color: 'text-emerald-600', bg: 'bg-emerald-50' },
            { icon: Sun, label: 'Good', color: 'text-amber-600', bg: 'bg-amber-50' },
            { icon: Meh, label: 'Okay', color: 'text-blue-600', bg: 'bg-blue-50' },
            { icon: Cloud, label: 'Low', color: 'text-indigo-600', bg: 'bg-indigo-50' },
            { icon: CloudRain, label: 'Struggling', color: 'text-rose-600', bg: 'bg-rose-50' },
          ].map((mood) => (
            <span
              key={mood.label}
              className={`inline-flex flex-col items-center gap-3 px-8 py-6 rounded-3xl border border-lavender-100 ${mood.bg} cursor-default hover:-translate-y-1 transition-transform duration-300 min-w-[120px]`}
            >
              <mood.icon className="w-8 h-8" strokeWidth={1.5} />
              <span className="text-sm font-medium text-charcoal">{mood.label}</span>
            </span>
          ))}
        </div>

        <p className="text-center text-sm text-charcoal-light">
          This is a personal check-in. Your answers are not stored or shared.
        </p>
      </div>

      <div className="bg-gradient-to-b from-white via-lavender-50/50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold text-charcoal mb-6" style={{ fontFamily: 'Georgia, serif' }}>
              Wellness Topics
            </h2>
            <p className="text-charcoal-light max-w-2xl mx-auto text-lg">
              Gentle guidance for the areas of mental health that matter most to women.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Heart,
                title: 'Stress & Anxiety',
                desc: 'Breathing exercises, mindfulness, and small daily practices to calm a busy mind.',
              },
              {
                icon: Moon,
                title: 'Sleep & Rest',
                desc: 'Better sleep habits, relaxation techniques, and understanding your circadian rhythm.',
              },
              {
                icon: Users,
                title: 'Relationships',
                desc: 'Healthy boundaries, communication, and nurturing connections that uplift you.',
              },
              {
                icon: Sparkles,
                title: 'Self-Compassion',
                desc: 'Learning to speak to yourself with kindness and embrace imperfection.',
              },
            ].map((topic) => (
              <div
                key={topic.title}
                className="bg-white rounded-[2rem] p-8 shadow-sm border border-lavender-100 hover:-translate-y-1 hover:shadow-lg hover:shadow-lavender-100/60 transition-all duration-300 flex flex-col"
              >
                <div className="w-14 h-14 rounded-full bg-lavender-100 flex items-center justify-center mb-6">
                  <topic.icon className="w-7 h-7 text-lavender-600" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-bold text-charcoal mb-3" style={{ fontFamily: 'Georgia, serif' }}>{topic.title}</h3>
                <p className="text-charcoal-light leading-relaxed flex-1">{topic.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-charcoal mb-6" style={{ fontFamily: 'Georgia, serif' }}>
            Daily Self-Care
          </h2>
          <p className="text-charcoal-light max-w-2xl mx-auto text-lg">
            Small, intentional acts of care that compound into lasting wellbeing.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: 'Morning Ritual',
              desc: 'Start your day with 5 minutes of deep breathing or gentle stretching before reaching for your phone.',
            },
            {
              title: 'Digital Detox',
              desc: 'Set a boundary by turning off notifications for one hour before bed to protect your peace.',
            },
            {
              title: 'Gratitude Moment',
              desc: 'Write down one small thing you are grateful for. It shifts your focus to what is good.',
            },
            {
              title: 'Movement Break',
              desc: 'A 10-minute walk outside can clear your mind and lift your mood more than you expect.',
            },
            {
              title: 'Connect',
              desc: 'Send a kind message to someone you care about. Connection is a powerful remedy.',
            },
            {
              title: 'Rest Without Guilt',
              desc: 'Give yourself permission to pause. Rest is not a reward for productivity.',
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-lavender-50/60 rounded-[2rem] p-8 border border-lavender-100 hover:-translate-y-1 hover:shadow-md hover:shadow-lavender-100/50 transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-charcoal mb-3" style={{ fontFamily: 'Georgia, serif' }}>{item.title}</h3>
              <p className="text-charcoal-light leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-b from-lavender-50/60 via-white to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold text-charcoal mb-6" style={{ fontFamily: 'Georgia, serif' }}>
              Resources & Support
            </h2>
            <p className="text-charcoal-light max-w-2xl mx-auto text-lg">
              Professional help is always available. You do not have to navigate everything alone.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Phone,
                title: 'Crisis Helpline',
                desc: '24/7 confidential support for anyone experiencing emotional distress or mental health crises.',
                contact: '988',
              },
              {
                icon: BookOpen,
                title: 'Therapy Finder',
                desc: 'Connect with licensed therapists and counselors who understand women\'s mental health needs.',
                contact: 'Find support',
              },
              {
                icon: Heart,
                title: 'Support Groups',
                desc: 'Join safe, moderated communities where you can share experiences and find solidarity.',
                contact: 'Learn more',
              },
            ].map((resource) => (
              <div
                key={resource.title}
                className="bg-white rounded-[2rem] p-8 shadow-sm border border-lavender-100 hover:-translate-y-1 hover:shadow-lg hover:shadow-lavender-100/60 transition-all duration-300 flex flex-col"
              >
                <div className="w-14 h-14 rounded-full bg-lavender-100 flex items-center justify-center mb-6">
                  <resource.icon className="w-7 h-7 text-lavender-600" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-bold text-charcoal mb-3" style={{ fontFamily: 'Georgia, serif' }}>{resource.title}</h3>
                <p className="text-charcoal-light leading-relaxed flex-1 mb-4">{resource.desc}</p>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-lavender-600">
                  {resource.contact} <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-charcoal mb-6" style={{ fontFamily: 'Georgia, serif' }}>
            Articles & Guidance
          </h2>
          <p className="text-charcoal-light max-w-2xl mx-auto text-lg">
            Thoughtful reads to help you understand, cope, and grow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: 'Understanding Anxiety in Women',
              category: 'Mental Health',
              readTime: '7 min read',
            },
            {
              title: 'The Power of Small Daily Rituals',
              category: 'Self-Care',
              readTime: '5 min read',
            },
            {
              title: 'How to Set Healthy Boundaries',
              category: 'Relationships',
              readTime: '6 min read',
            },
          ].map((article) => (
            <div
              key={article.title}
              className="bg-white rounded-[2rem] p-8 shadow-sm border border-lavender-100 hover:-translate-y-1 hover:shadow-lg hover:shadow-lavender-100/60 transition-all duration-300 flex flex-col"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="px-3 py-1 bg-lavender-50 text-lavender-700 rounded-full text-xs font-medium">{article.category}</span>
                <span className="text-xs text-charcoal-light">{article.readTime}</span>
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-3 leading-snug" style={{ fontFamily: 'Georgia, serif' }}>{article.title}</h3>
              <div className="mt-auto pt-4">
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-lavender-600">
                  Read article <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-b from-lavender-50/80 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28">
          <div className="bg-white rounded-[2.5rem] p-12 sm:p-16 text-center border border-lavender-100 shadow-sm">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-lavender-100 rounded-full mb-8">
              <Heart className="w-8 h-8 text-lavender-600" strokeWidth={1.5} />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-6" style={{ fontFamily: 'Georgia, serif' }}>
              You are not alone
            </h2>
            <p className="text-charcoal-light max-w-xl mx-auto mb-10 text-lg leading-relaxed">
              Whatever you are going through, support is available. Taking the first step is an act of courage, not weakness.
            </p>
            <span className="inline-flex items-center gap-2 px-10 py-4 bg-lavender-600 text-white rounded-2xl font-medium shadow-lg shadow-lavender-200/50 cursor-default">
              Find Support <ArrowRight className="w-5 h-5" />
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
