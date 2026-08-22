import { Link } from 'react-router-dom'
import { Apple, ArrowRight, Salad, Flame, Heart, Sparkles, Dumbbell } from 'lucide-react'

const FOODS = [
  { name: 'Greek Yogurt', cal: 100, protein: 17, carbs: 6, fat: 0.7, benefit: 'Rich in probiotics for gut health and calcium for strong bones.' },
  { name: 'Quinoa', cal: 222, protein: 8, carbs: 39, fat: 3.5, benefit: 'Complete protein with all essential amino acids for muscle repair.' },
  { name: 'Spinach', cal: 23, protein: 2.9, carbs: 3.6, fat: 0.4, benefit: 'High in iron and vitamins A, C, K for healthy blood and skin.' },
  { name: 'Banana', cal: 105, protein: 1.3, carbs: 27, fat: 0.4, benefit: 'Quick energy source with potassium for muscle function.' },
  { name: 'Almonds', cal: 164, protein: 6, carbs: 6, fat: 14, benefit: 'Healthy fats and vitamin E for heart and skin health.' },
  { name: 'Oats', cal: 150, protein: 5, carbs: 27, fat: 2.5, benefit: 'Fiber-rich for digestion and sustained energy throughout the day.' },
]

const DIET_PLAN = [
  { meal: 'Breakfast', time: '7:00 AM', items: 'Oatmeal with berries, Greek yogurt, and almonds' },
  { meal: 'Mid-Morning Snack', time: '10:30 AM', items: 'Banana and a handful of almonds' },
  { meal: 'Lunch', time: '1:00 PM', items: 'Quinoa bowl with grilled chicken and spinach salad' },
  { meal: 'Afternoon Snack', time: '4:00 PM', items: 'Greek yogurt with honey' },
  { meal: 'Dinner', time: '7:30 PM', items: 'Grilled salmon, steamed vegetables, and sweet potato' },
  { meal: 'Evening', time: '9:00 PM', items: 'Herbal tea and a small piece of dark chocolate' },
]

const EXERCISES = [
  { name: 'Sun Salutation', type: 'Yoga', benefit: 'Improves flexibility, strengthens muscles, and boosts circulation.', duration: '10 min' },
  { name: 'Cat-Cow Stretch', type: 'Yoga', benefit: 'Relieves back tension and improves spinal flexibility.', duration: '5 min' },
  { name: 'Deep Breathing', type: 'Yoga', benefit: 'Reduces stress, calms the mind, and improves oxygen flow.', duration: '5 min' },
  { name: 'Brisk Walking', type: 'Cardio', benefit: 'Strengthens heart, improves mood, and aids weight management.', duration: '30 min' },
  { name: 'Bodyweight Squats', type: 'Strength', benefit: 'Strengthens legs, glutes, and core muscles.', duration: '10 min' },
  { name: 'Plank Hold', type: 'Strength', benefit: 'Builds core stability and improves posture.', duration: '5 min' },
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
            { title: 'Healthy Eating', desc: 'Nutritional guidance and diet tips for women\'s health and wellbeing.' },
            { title: 'Fitness Routines', desc: 'Workout plans tailored for women\'s strength, flexibility, and overall health.' },
            { title: 'Lifestyle Tips', desc: 'Simple lifestyle changes for better sleep, energy, and overall wellness.' },
            { title: 'Self-Care', desc: 'Incorporate self-care practices into your daily routine for better mental and physical health.' },
            { title: 'Weight Management', desc: 'Healthy approaches to weight management that respect your body and health.' },
            { title: 'Hydration & Wellness', desc: 'The importance of hydration and simple wellness habits for a healthier life.' },
          ].map((item, i) => (
            <div key={i} className="bg-blush-50 p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300">
              <h3 className="text-lg font-semibold text-charcoal mb-2">{item.title}</h3>
              <p className="text-sm text-charcoal-light">{item.desc}</p>
            </div>
          ))}
        </div>

        <section>
          <div className="flex items-center gap-3 mb-8">
            <Salad className="w-8 h-8 text-blush-600" />
            <h2 className="text-3xl font-bold text-charcoal" style={{ fontFamily: 'Georgia, serif' }}>
              Nutritious Foods Chart
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {FOODS.map((food, i) => (
              <div key={i} className="bg-blush-50 p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold text-charcoal">{food.name}</h3>
                  <div className="flex items-center gap-1 text-blush-600">
                    <Flame className="w-4 h-4" />
                    <span className="text-sm font-medium">{food.cal} kcal</span>
                  </div>
                </div>
                <div className="flex gap-4 mb-4 text-xs text-charcoal-light">
                  <span>Protein: <strong className="text-charcoal">{food.protein}g</strong></span>
                  <span>Carbs: <strong className="text-charcoal">{food.carbs}g</strong></span>
                  <span>Fat: <strong className="text-charcoal">{food.fat}g</strong></span>
                </div>
                <div className="bg-white p-3 rounded-xl">
                  <div className="flex items-start gap-2">
                    <Heart className="w-4 h-4 text-rose-500 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-charcoal-light leading-relaxed">{food.benefit}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-8">
            <Sparkles className="w-8 h-8 text-blush-600" />
            <h2 className="text-3xl font-bold text-charcoal" style={{ fontFamily: 'Georgia, serif' }}>
              Suggested Daily Diet
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
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold text-charcoal">{ex.name}</h3>
                  <span className="text-xs font-medium bg-blush-100 text-blush-700 px-2 py-1 rounded-full">{ex.type}</span>
                </div>
                <p className="text-sm text-charcoal-light mb-4">{ex.benefit}</p>
                <div className="flex items-center gap-1 text-xs text-charcoal-light">
                  <Sparkles className="w-3 h-3 text-blush-500" />
                  <span>{ex.duration}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="text-center">
          <Link to="/articles" className="inline-flex items-center gap-2 px-6 py-3 bg-blush-600 text-white rounded-xl font-medium hover:bg-blush-700 transition-all duration-200 shadow-lg hover:shadow-xl">
            View Tips & Articles <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}