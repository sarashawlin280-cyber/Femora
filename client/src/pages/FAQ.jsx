import { useState } from 'react'
import { ChevronRight, Search } from 'lucide-react'
import { faqs } from '../data/mockData'

export default function FAQ() {
  const [openFaq, setOpenFaq] = useState(null)
  const [query, setQuery] = useState('')

  const filtered = faqs.filter((faq) => {
    const q = query.trim().toLowerCase()
    if (!q) return true
    return faq.question.toLowerCase().includes(q) || faq.answer.toLowerCase().includes(q)
  })

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-b from-blush-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold text-charcoal mb-4" style={{ fontFamily: 'Georgia, serif' }}>
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-charcoal-light max-w-2xl mx-auto">
              Find answers to common questions about women's health, wellness, and using Femora.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="relative mb-8">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-blush-400" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type your question..."
            className="w-full pl-12 pr-4 py-3 rounded-xl border border-blush-200 focus:outline-none focus:ring-2 focus:ring-blush-500 bg-white"
          />
        </div>

        <div className="space-y-4">
          {filtered.length === 0 && (
            <p className="text-center text-charcoal-light py-8">No matching questions found.</p>
          )}
          {filtered.map((faq) => (
            <div
              key={faq.id}
              className="bg-blush-50 rounded-2xl overflow-hidden shadow-sm"
            >
              <button
                onClick={() => setOpenFaq(openFaq === faq.id ? null : faq.id)}
                className="w-full px-6 py-4 flex justify-between items-center text-left hover:bg-blush-100 transition-colors"
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
      </div>
    </div>
  )
}
