import React, { useState } from 'react'
import { motion } from 'framer-motion'

export default function Signup() {
  const [form, setForm] = useState({ name: '', email: '', password: '' })
  const [errors, setErrors] = useState({})
  const [success, setSuccess] = useState(false)

  const validate = () => {
    const e = {}
    if (!form.name) e.name = 'Name is required'
    if (!form.email || !/^\S+@\S+\.\S+$/.test(form.email)) e.email = 'Valid email is required'
    if (!form.password || form.password.length < 6) e.password = 'Password must be at least 6 characters'
    return e
  }

  const handleSubmit = (ev) => {
    ev.preventDefault()
    const e = validate()
    if (Object.keys(e).length) {
      setErrors(e)
      return
    }
    setErrors({})
    // simulate signup
    setSuccess(true)
    setForm({ name: '', email: '', password: '' })
    setTimeout(() => setSuccess(false), 3000)
  }

  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>
      <motion.form onSubmit={handleSubmit} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-md bg-white dark:bg-[#112540] p-6 rounded shadow">
        <label className="block">
          <span className="text-sm">Name</span>
          <input value={form.name} onChange={(e) => setForm({...form, name: e.target.value})} type="text" className="mt-1 block w-full rounded border-gray-200 dark:border-[#233760]" />
          {errors.name && <div className="text-red-500 text-sm mt-1">{errors.name}</div>}
        </label>

        <label className="block mt-4">
          <span className="text-sm">Email</span>
          <input value={form.email} onChange={(e) => setForm({...form, email: e.target.value})} type="email" className="mt-1 block w-full rounded border-gray-200 dark:border-[#233760]" />
          {errors.email && <div className="text-red-500 text-sm mt-1">{errors.email}</div>}
        </label>

        <label className="block mt-4">
          <span className="text-sm">Password</span>
          <input value={form.password} onChange={(e) => setForm({...form, password: e.target.value})} type="password" className="mt-1 block w-full rounded border-gray-200 dark:border-[#233760]" />
          {errors.password && <div className="text-red-500 text-sm mt-1">{errors.password}</div>}
        </label>

        <div className="mt-6 flex items-center gap-3">
          <button className="px-4 py-2 bg-coral-500 text-white rounded" type="submit">Create account</button>
          {success && <div className="text-green-500">Account created! Check your email.</div>}
        </div>
      </motion.form>
    </section>
  )
}
