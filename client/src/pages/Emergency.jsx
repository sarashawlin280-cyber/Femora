import { Heart, Phone, MapPin, AlertCircle } from 'lucide-react'
import { emergencyInfo } from '../data/mockData'

export default function Emergency() {
  return (
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Heart className="w-12 h-12 text-blush-600 fill-blush-600 mx-auto mb-4" />
          <h1 className="text-3xl sm:text-4xl font-bold text-charcoal mb-4" style={{ fontFamily: 'Georgia, serif' }}>
            Emergency Information
          </h1>
          <p className="text-charcoal-light max-w-2xl mx-auto">
            If you are experiencing a medical emergency, please call your local emergency services immediately. Below is important information for non-emergency support and resources.
          </p>
        </div>

        <div className="bg-lavender-50 p-6 rounded-2xl border border-lavender-200 mb-12 flex items-start gap-4">
          <AlertCircle className="w-6 h-6 text-lavender-600 mt-1 flex-shrink-0" />
          <p className="text-charcoal-light">{emergencyInfo.guidance}</p>
        </div>

        <h2 className="text-2xl font-bold text-charcoal mb-6 text-center" style={{ fontFamily: 'Georgia, serif' }}>
          Helpline Numbers
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {emergencyInfo.helplines.map((helpline, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-blush-100 text-center">
              <Phone className="w-8 h-8 text-blush-600 mx-auto mb-3" />
              <h3 className="text-sm font-medium text-charcoal mb-1">{helpline.name}</h3>
              <p className="text-xl font-bold text-blush-600">{helpline.number}</p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-charcoal mb-6 text-center" style={{ fontFamily: 'Georgia, serif' }}>
          Nearby Hospitals
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {emergencyInfo.hospitals.map((hospital, i) => (
            <div key={i} className="bg-blush-50 p-6 rounded-2xl border border-blush-100">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blush-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-charcoal mb-1">{hospital.name}</h3>
                  <p className="text-sm text-charcoal-light mb-1">{hospital.address}</p>
                  <p className="text-sm font-medium text-blush-600">{hospital.phone}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
