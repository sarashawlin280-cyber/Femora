import { Navigate, Link } from 'react-router-dom'
import { Heart, FileText, Users, MessageSquare, Activity, Plus, Trash2, Edit3, Settings, BarChart3 } from 'lucide-react'
import { useAuth } from '../context/AuthContext'

export default function AdminDashboard() {
  const { user } = useAuth()

  if (!user || user.role !== 'admin') {
    return <Navigate to="/dashboard" replace />
  }

  const stats = [
    { label: 'Total Users', value: '1,234', icon: Users },
    { label: 'Total Articles', value: '86', icon: FileText },
    { label: 'Total Feedback', value: '42', icon: MessageSquare },
    { label: 'Active Sessions', value: '28', icon: Activity },
  ]

  const recentActivity = [
    { user: 'Jane Doe', action: 'Created account', time: '2 min ago' },
    { user: 'John Smith', action: 'Submitted feedback', time: '15 min ago' },
    { user: 'Alice Johnson', action: 'Read article: Understanding Your Cycle', time: '1 hour ago' },
    { user: 'Bob Williams', action: 'Updated profile', time: '2 hours ago' },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center gap-3 mb-8">
          <Heart className="w-8 h-8 text-blush-600 fill-blush-600" />
          <h1 className="text-3xl font-bold text-charcoal" style={{ fontFamily: 'Georgia, serif' }}>
            Admin Dashboard
          </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-blush-100">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-blush-100 rounded-full">
                  <stat.icon className="w-6 h-6 text-blush-600" />
                </div>
                <span className="text-2xl font-bold text-charcoal">{stat.value}</span>
              </div>
              <p className="text-sm text-charcoal-light">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-blush-100 mb-8">
          <div className="p-6 border-b border-blush-100">
            <h2 className="text-xl font-semibold text-charcoal">Recent Activity</h2>
          </div>
          <div className="divide-y divide-blush-100">
            {recentActivity.map((activity, i) => (
              <div key={i} className="px-6 py-4 flex justify-between items-center hover:bg-blush-50 transition-colors">
                <div>
                  <p className="text-sm font-medium text-charcoal">{activity.user}</p>
                  <p className="text-sm text-charcoal-light">{activity.action}</p>
                </div>
                <span className="text-xs text-charcoal-light">{activity.time}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-blush-100">
            <h3 className="text-lg font-semibold text-charcoal mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <button className="w-full flex items-center gap-3 px-4 py-3 bg-blush-50 rounded-xl hover:bg-blush-100 transition-colors text-left">
                <Plus className="w-5 h-5 text-blush-600" />
                <span className="text-sm font-medium text-charcoal">Add Article</span>
              </button>
              <button className="w-full flex items-center gap-3 px-4 py-3 bg-blush-50 rounded-xl hover:bg-blush-100 transition-colors text-left">
                <Edit3 className="w-5 h-5 text-blush-600" />
                <span className="text-sm font-medium text-charcoal">Edit Article</span>
              </button>
              <button className="w-full flex items-center gap-3 px-4 py-3 bg-blush-50 rounded-xl hover:bg-blush-100 transition-colors text-left">
                <Trash2 className="w-5 h-5 text-blush-600" />
                <span className="text-sm font-medium text-charcoal">Delete Article</span>
              </button>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-blush-100">
            <h3 className="text-lg font-semibold text-charcoal mb-4">Manage Content</h3>
            <div className="space-y-3">
              <Link to="/articles" className="flex items-center gap-3 px-4 py-3 bg-blush-50 rounded-xl hover:bg-blush-100 transition-colors">
                <FileText className="w-5 h-5 text-blush-600" />
                <span className="text-sm font-medium text-charcoal">Articles</span>
              </Link>
              <button className="w-full flex items-center gap-3 px-4 py-3 bg-blush-50 rounded-xl hover:bg-blush-100 transition-colors text-left">
                <MessageSquare className="w-5 h-5 text-blush-600" />
                <span className="text-sm font-medium text-charcoal">Manage FAQs</span>
              </button>
              <button className="w-full flex items-center gap-3 px-4 py-3 bg-blush-50 rounded-xl hover:bg-blush-100 transition-colors text-left">
                <Users className="w-5 h-5 text-blush-600" />
                <span className="text-sm font-medium text-charcoal">Manage Users</span>
              </button>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-blush-100">
            <h3 className="text-lg font-semibold text-charcoal mb-4">System</h3>
            <div className="space-y-3">
              <button className="w-full flex items-center gap-3 px-4 py-3 bg-blush-50 rounded-xl hover:bg-blush-100 transition-colors text-left">
                <BarChart3 className="w-5 h-5 text-blush-600" />
                <span className="text-sm font-medium text-charcoal">View Reports</span>
              </button>
              <button className="w-full flex items-center gap-3 px-4 py-3 bg-blush-50 rounded-xl hover:bg-blush-100 transition-colors text-left">
                <Settings className="w-5 h-5 text-blush-600" />
                <span className="text-sm font-medium text-charcoal">Settings</span>
              </button>
              <Link to="/emergency" className="flex items-center gap-3 px-4 py-3 bg-blush-50 rounded-xl hover:bg-blush-100 transition-colors">
                <Activity className="w-5 h-5 text-blush-600" />
                <span className="text-sm font-medium text-charcoal">Emergency Info</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
