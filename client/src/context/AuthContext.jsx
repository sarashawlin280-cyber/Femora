/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const navigate = useNavigate()

  const login = (email) => {
    const role = email.toLowerCase().includes('admin') ? 'admin' : 'user'
    const name = email.split('@')[0]
    setUser({ name, email, role })
    toast.success(`Welcome back, ${name}!`)
    navigate('/')
  }

  const register = (name, email) => {
    setUser({ name, email, role: 'user' })
    toast.success('Account created successfully!')
    navigate('/')
  }

  const logout = () => {
    setUser(null)
    toast.success('Logged out successfully')
    navigate('/')
  }

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) throw new Error('useAuth must be used within an AuthProvider')
  return context
}
