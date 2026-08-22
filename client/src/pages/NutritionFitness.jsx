import { Apple, Dumbbell, Salad } from 'lucide-react'

const DIET_PLAN = [
  { meal: 'Breakfast', time: '7:00 AM', items: 'Oatmeal with berries, Greek yogurt, and almonds' },
  { meal: 'Mid-Morning Snack', time: '10:30 AM', items: 'Banana and a handful of almonds' },
  { meal: 'Lunch', time: '1:00 PM', items: 'Quinoa bowl with grilled chicken and spinach salad' },
  { meal: 'Afternoon Snack', time: '4:00 PM', items: 'Greek yogurt with honey' },
  { meal: 'Dinner', time: '7:30 PM', items: 'Grilled salmon, steamed vegetables, and sweet potato' },
  { meal: 'Evening', time: '9:00 PM', items: 'Herbal tea and a small piece of dark chocolate' },
]

const EXERCISES = [
  { name: 'Sun Salutation', desc: 'Improves flexibility, strengthens muscles, and boosts circulation.' },
  { name: 'Cat-Cow Stretch', desc: 'Relieves back tension and improves spinal flexibility.' },
  { name: 'Deep Breathing', desc: 'Reduces stress, calms the mind, and improves oxygen flow.' },
  { name: 'Brisk Walking', desc: 'Strengthens heart, improves mood, and aids weight management.' },
  { name: 'Bodyweight Squats', desc: 'Strengthens legs, glutes, and core muscles.' },
  { name: 'Plank Hold', desc: 'Builds core stability and improves posture.' },
]

export default function NutritionFitness() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-b from-blush-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blush-100 rounded-full mb-6">
              <Apple className="w-8 h-8 text-blush-600" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-charcoal mb-4" style={{ fontFamily: 'Georgia, serif' }}>
              Nutrition & Fitness
            </h1>
            <p className="text-lg text-charcoal-light max-w-2xl mx-auto">
              Healthy eating, lifestyle, fitness, and wellness tips designed specifically for women. Discover how to nourish your body and stay active.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: 'Healthy Eating',
              points: ['Balanced meals with fresh ingredients', 'Include fruits and vegetables daily', 'Choose whole grains over processed foods', 'Limit sugar and refined carbs']
            },
            {
              title: 'Fitness Routines',
              points: ['Combine cardio, strength, and flexibility', 'Aim for at least 30 minutes daily', 'Include warm-up and cool-down', 'Listen to your body and rest when needed']
            },
            {
              title: 'Lifestyle Tips',
              points: ['Maintain a consistent sleep schedule', 'Stay hydrated throughout the day', 'Practice mindfulness or meditation', 'Take breaks and manage screen time']
            },
            {
              title: 'Self-Care',
              points: ['Set aside time for yourself daily', 'Engage in hobbies you enjoy', 'Connect with loved ones', 'Practice gratitude and positive thinking']
            },
            {
              title: 'Weight Management',
              points: ['Focus on sustainable habits, not quick fixes', 'Eat mindfully and watch portion sizes', 'Combine diet with regular movement', 'Avoid extreme diets or restrictions']
            },
            {
              title: 'Hydration & Wellness',
              points: ['Drink at least 8 glasses of water daily', 'Start your day with a glass of water', 'Limit caffeine and sugary drinks', 'Monitor your water intake actively']
            },
          ].map((item, i) => (
            <div key={i} className="bg-blush-50 p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300">
              <h3 className="text-lg font-semibold text-charcoal mb-4">{item.title}</h3>
              <ul className="space-y-2">
                {item.points.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-charcoal-light">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blush-500 flex-shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <section>
          <div className="flex items-center gap-3 mb-8">
            <Salad className="w-8 h-8 text-blush-600" />
            <h2 className="text-3xl font-bold text-charcoal" style={{ fontFamily: 'Georgia, serif' }}>
              Simple Diet Chart
            </h2>
          </div>
          <div className="bg-blush-50 rounded-2xl overflow-hidden">
            <div className="grid grid-cols-3 bg-blush-100 px-6 py-3">
              <span className="text-sm font-semibold text-charcoal">Meal</span>
              <span className="text-sm font-semibold text-charcoal">Time</span>
              <span className="text-sm font-semibold text-charcoal">Suggested Items</span>
            </div>
            {DIET_PLAN.map((item, i) => (
              <div key={i} className="grid grid-cols-3 px-6 py-4 border-t border-blush-100 hover:bg-white transition-colors">
                <span className="text-sm font-medium text-charcoal">{item.meal}</span>
                <span className="text-sm text-charcoal-light">{item.time}</span>
                <span className="text-sm text-charcoal-light">{item.items}</span>
              </div>
            ))}
          </div>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-8">
            <Dumbbell className="w-8 h-8 text-blush-600" />
            <h2 className="text-3xl font-bold text-charcoal" style={{ fontFamily: 'Georgia, serif' }}>
              Yoga & Exercises
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {EXERCISES.map((ex, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-blush-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <h3 className="text-lg font-semibold text-charcoal mb-2">{ex.name}</h3>
                <p className="text-sm text-charcoal-light">{ex.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
