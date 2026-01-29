import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Thank you for reaching out! We will get back to you soon.')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <main className="flex-1 max-w-4xl mx-auto px-4 py-12 w-full">
      <h1 className="text-5xl font-bold mb-4 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Contact Us</h1>
      <p className="text-xl text-gray-300 text-center mb-12">
        Have a question? We'd love to hear from you. Get in touch with us today.
      </p>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div>
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-xl mb-6 hover:bg-white/10 hover:border-cyan-400/30 transition-all duration-300">
            <h3 className="text-2xl font-bold mb-4 text-blue-400">📍 Address</h3>
            <p className="text-gray-300">123 Tech Street, San Francisco, CA 94105</p>
          </div>
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-xl mb-6 hover:bg-white/10 hover:border-cyan-400/30 transition-all duration-300">
            <h3 className="text-2xl font-bold mb-4 text-blue-400">📧 Email</h3>
            <p className="text-gray-300">info@accinzia.com</p>
          </div>
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-xl hover:bg-white/10 hover:border-cyan-400/30 transition-all duration-300">
            <h3 className="text-2xl font-bold mb-4 text-blue-400">📞 Phone</h3>
            <p className="text-gray-300">+1 (555) 123-4567</p>
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-xl">
          <div className="mb-6">
            <label className="block text-sm font-semibold text-white mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded text-white focus:outline-none focus:border-blue-400 focus:bg-white/10 transition"
              placeholder="Your name"
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-semibold text-white mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded text-white focus:outline-none focus:border-blue-400 focus:bg-white/10 transition"
              placeholder="Your email"
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-semibold text-white mb-2">Subject</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded text-white focus:outline-none focus:border-blue-400 focus:bg-white/10 transition"
              placeholder="Subject"
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-semibold text-white mb-2">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded text-white focus:outline-none focus:border-blue-400 focus:bg-white/10 transition"
              placeholder="Your message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </main>
  )
}
