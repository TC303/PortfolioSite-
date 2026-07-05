import React, { useState } from 'react'

const FORMSPREE_URL = 'https://formspree.io/f/xkolyrkp'

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(formData),
      })
      if (res.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <section id="contact" className="py-28 bg-void border-t border-amber-900/15">
      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <span className="section-label mb-3">// section_03</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#ddd0b8] tracking-tight">
            contact<span className="phosphor">.</span>
          </h2>
          <p className="text-xs text-[#5a5040] mt-3 tracking-wide">
            &gt; open_to_work — let's build something.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="terminal-card p-8 space-y-6">
          <div>
            <label htmlFor="name" className="label-terminal">&gt; name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="john_doe"
              className="input-terminal"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="label-terminal">&gt; email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="john@example.com"
              className="input-terminal"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="label-terminal">&gt; message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              placeholder="tell me about your project..."
              className="input-terminal resize-none"
              required
            />
          </div>

          <button
            type="submit"
            disabled={status === 'sending' || status === 'success'}
            className="btn-phosphor-fill w-full text-center disabled:opacity-50"
          >
            {status === 'sending' ? '[sending...]' : '[send_message]'}
          </button>

          {status === 'success' && (
            <p className="text-xs text-amber-400 tracking-wide">&gt; message_sent — I'll be in touch.</p>
          )}
          {status === 'error' && (
            <p className="text-xs text-red-400 tracking-wide">&gt; error — please try again or email directly.</p>
          )}
        </form>
      </div>
    </section>
  )
}

export default Contact
