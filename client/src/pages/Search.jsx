import { useState } from 'react'
import { Heart, Search as SearchIcon, X } from 'lucide-react'
import { articles } from '../data/mockData'

export default function Search() {
  const [query, setQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = ['All', 'Menstrual Health', 'Mental Wellness', 'Nutrition & Fitness', 'Pregnancy']

  const filteredArticles = articles.filter((article) => {
    const matchesQuery = query === '' ||
      article.title.toLowerCase().includes(query.toLowerCase()) ||
      article.description.toLowerCase().includes(query.toLowerCase()) ||
      article.category.toLowerCase().includes(query.toLowerCase())

    const matchesCategory = selectedCategory === 'All' ||
      article.category === selectedCategory ||
      (selectedCategory === 'Nutrition & Fitness' && article.category === 'Nutrition & Fitness')

    return matchesQuery && matchesCategory
  })

  return (
    <div className="min-h-screen bg-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <Heart className="w-10 h-10 text-blush-600 fill-blush-600 mx-auto mb-4" />
          <h1 className="text-3xl sm:text-4xl font-bold text-charcoal mb-4" style={{ fontFamily: 'Georgia, serif' }}>
            Search
          </h1>
          <p className="text-charcoal-light max-w-2xl mx-auto">
            Find articles, resources, and information on women's health topics.
          </p>
        </div>

        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative">
            <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-blush-400" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search articles, topics, or keywords..."
              className="w-full pl-12 pr-10 py-4 rounded-2xl border border-blush-200 focus:border-blush-500 focus:ring-2 focus:ring-blush-200 outline-none transition-all text-charcoal"
            />
            {query && (
              <button
                onClick={() => setQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-blush-400 hover:text-blush-600"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                selectedCategory === cat
                  ? 'bg-blush-600 text-white shadow-lg'
                  : 'bg-blush-50 text-charcoal hover:bg-blush-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {filteredArticles.length > 0 ? (
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
                  <span className="text-xs text-charcoal-light">
                    {new Date(article.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <SearchIcon className="w-12 h-12 text-blush-300 mx-auto mb-4" />
            <p className="text-lg font-medium text-charcoal mb-2">No results found</p>
            <p className="text-sm text-charcoal-light">
              Try adjusting your search terms or filters to find what you're looking for.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
