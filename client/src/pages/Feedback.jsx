import { useState } from 'react'
import { Heart, Send } from 'lucide-react'
import toast from 'react-hot-toast'

const categories = ['General Feedback', 'Website Bug', 'Feature Request', 'Content Suggestion', 'Other']

export default function Feedback() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [category, setCategory] = useState('General Feedback')
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name || !email || !message) {
      toast.error('Please fill in all required fields')
      return
    }
    toast.success('Thank you for your feedback! We appreciate it.')
    setName('')
    setEmail('')
    setCategory('General Feedback')
    setMessage('')
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-blush-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-lg w-full">
        <div className="text-center mb-8">
          <Heart className="w-12 h-12 text-blush-600 fill-blush-600 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-charcoal mb-2" style={{ fontFamily: 'Georgia, serif' }}>
            We Value Your Feedback
          </h2>
          <p className="text-charcoal-light">
            Your feedback helps us improve Femora for everyone.
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-sm border border-blush-100">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-2">
                Name *
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-blush-200 focus:border-blush-500 focus:ring-2 focus:ring-blush-200 outline-none transition-all"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-2">
                Email *
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-blush-200 focus:border-blush-500 focus:ring-2 focus:ring-blush-200 outline-none transition-all"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label htmlFor="category" className="block text-sm font-medium text-charcoal mb-2">
                Feedback Category
              </label>
              <select
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-blush-200 focus:border-blush-500 focus:ring-2 focus:ring-blush-200 outline-none transition-all bg-white"
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-2">
                Message *
              </label>
              <textarea
                id="message"
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-blush-200 focus:border-blush-500 focus:ring-2 focus:ring-blush-200 outline-none transition-all resize-none"
                placeholder="Tell us what you think..."
              />
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 py-3 px-6 bg-blush-600 text-white rounded-xl font-medium hover:bg-blush-700 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <Send className="w-4 h-4" />
              Submit Feedback
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
