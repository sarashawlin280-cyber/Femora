import { Link } from 'react-router-dom'
import { Heart, FileText } from 'lucide-react'

export default function Terms() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blush-100 rounded-full mb-6">
            <FileText className="w-8 h-8 text-blush-600" />
          </div>
          <h1 className="text-4xl font-bold text-charcoal mb-4" style={{ fontFamily: 'Georgia, serif' }}>
            Terms & Conditions
          </h1>
          <p className="text-charcoal-light">Last updated: August 2026</p>
        </div>

        <div className="prose prose-blush max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-charcoal mb-4" style={{ fontFamily: 'Georgia, serif' }}>Acceptance of Terms</h2>
            <p className="text-charcoal-light leading-relaxed">
              By accessing or using Femora, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you may not use our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-charcoal mb-4" style={{ fontFamily: 'Georgia, serif' }}>Medical Disclaimer</h2>
            <p className="text-charcoal-light leading-relaxed">
              Femora is an educational health-awareness platform and is not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-charcoal mb-4" style={{ fontFamily: 'Georgia, serif' }}>User Responsibilities</h2>
            <p className="text-charcoal-light leading-relaxed">
              You are responsible for maintaining the confidentiality of your account and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-charcoal mb-4" style={{ fontFamily: 'Georgia, serif' }}>Intellectual Property</h2>
            <p className="text-charcoal-light leading-relaxed">
              All content on Femora, including text, graphics, logos, and software, is the property of Femora and is protected by copyright and other intellectual property laws.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-charcoal mb-4" style={{ fontFamily: 'Georgia, serif' }}>Limitation of Liability</h2>
            <p className="text-charcoal-light leading-relaxed">
              Femora shall not be liable for any indirect, incidental, special, or consequential damages resulting from your use of or inability to use the platform.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-charcoal mb-4" style={{ fontFamily: 'Georgia, serif' }}>Changes to Terms</h2>
            <p className="text-charcoal-light leading-relaxed">
              We reserve the right to modify these terms at any time. We will notify users of any material changes by posting the new Terms on this page.
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
