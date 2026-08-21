import { useState } from 'react'
import { Search } from 'lucide-react'
import { articles } from '../data/mockData'

const categories = ['All', 'Menstrual Health', 'Mental Wellness', 'Nutrition & Fitness', 'Pregnancy']

export default function Articles() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredArticles = activeCategory === 'All'
    ? articles
    : articles.filter((a) => a.category === activeCategory || (activeCategory === 'Nutrition & Fitness' && a.category === 'Nutrition & Fitness'))

  return (
    <div className="min-h-screen bg-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-charcoal mb-4" style={{ fontFamily: 'Georgia, serif' }}>
            Health Articles
          </h1>
          <p className="text-charcoal-light max-w-2xl mx-auto">
            Explore our collection of expert-written articles on women's health, wellness, and medical insights.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-blush-600 text-white shadow-lg'
                  : 'bg-blush-50 text-charcoal hover:bg-blush-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((article) => (
            <div
              key={article.id}
              className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-blush-100"
            >
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
                <div className="flex items-center justify-between">
                  <span className="text-xs text-charcoal-light">
                    {new Date(article.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </span>
                  <button className="inline-flex items-center gap-1 text-sm font-medium text-blush-600 hover:text-blush-700 transition-colors">
                    Read More <Search className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredArticles.length === 0 && (
          <div className="text-center py-12">
            <Search className="w-12 h-12 text-blush-300 mx-auto mb-4" />
            <p className="text-charcoal-light">No articles found in this category.</p>
          </div>
        )}
      </div>
    </div>
  )
}
