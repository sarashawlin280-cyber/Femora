import { Link } from 'react-router-dom'
import { Heart, Shield } from 'lucide-react'

export default function Privacy() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blush-100 rounded-full mb-6">
            <Shield className="w-8 h-8 text-blush-600" />
          </div>
          <h1 className="text-4xl font-bold text-charcoal mb-4" style={{ fontFamily: 'Georgia, serif' }}>
            Privacy Policy
          </h1>
          <p className="text-charcoal-light">Last updated: August 2026</p>
        </div>

        <div className="prose prose-blush max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-charcoal mb-4" style={{ fontFamily: 'Georgia, serif' }}>Introduction</h2>
            <p className="text-charcoal-light leading-relaxed">
              At Femora, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information when you use our platform.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-charcoal mb-4" style={{ fontFamily: 'Georgia, serif' }}>Information We Collect</h2>
            <p className="text-charcoal-light leading-relaxed">
              We collect information you provide directly to us, such as your name, email address, and any health-related data you choose to enter into our cycle tracker or other features. We also collect usage data to improve our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-charcoal mb-4" style={{ fontFamily: 'Georgia, serif' }}>How We Use Your Information</h2>
            <p className="text-charcoal-light leading-relaxed">
              We use your information to provide and improve our services, personalize your experience, and communicate with you about updates and features. We do not sell your personal data to third parties.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-charcoal mb-4" style={{ fontFamily: 'Georgia, serif' }}>Data Security</h2>
            <p className="text-charcoal-light leading-relaxed">
              We implement industry-standard security measures to protect your data. All sensitive information is encrypted using secure protocols.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-charcoal mb-4" style={{ fontFamily: 'Georgia, serif' }}>Your Rights</h2>
            <p className="text-charcoal-light leading-relaxed">
              You have the right to access, correct, or delete your personal information at any time. You can also opt out of communications from us.
            </p>
          </section>

          <div className="text-center mt-12">
            <Link to="/" className="inline-flex items-center gap-2 px-6 py-3 bg-blush-600 text-white rounded-xl font-medium hover:bg-blush-700 transition-all duration-200">
              <Heart className="w-4 h-4" />
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
