import { Link } from 'react-router-dom'
import { Apple, ArrowRight } from 'lucide-react'

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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
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

        <div className="text-center">
          <Link to="/articles" className="inline-flex items-center gap-2 px-6 py-3 bg-blush-600 text-white rounded-xl font-medium hover:bg-blush-700 transition-all duration-200 shadow-lg hover:shadow-xl">
            View Tips & Articles <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}
