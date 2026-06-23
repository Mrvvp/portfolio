import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaPhone, FaGithub, FaLinkedin, FaWhatsapp, FaPaperPlane } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'
import { fadeUp, stagger } from '../animations'
import './Contact.css'

const chips = [
  { icon: <SiGmail />,     label: 'Email',     href: 'https://mail.google.com/mail/?view=cm&to=marvanvp6@gmail.com', color: '#EA4335' },
  { icon: <FaWhatsapp />,  label: 'WhatsApp',  href: 'https://wa.me/916282471884',                                   color: '#25D366' },
  { icon: <FaLinkedin />,  label: 'LinkedIn',  href: 'https://www.linkedin.com/in/marvanvp/',                         color: '#0A66C2' },
  { icon: <FaGithub />,    label: 'GitHub',    href: 'https://github.com/Mrvvp',                                     color: '#181717' },
  { icon: <FaPhone />,     label: '+91 6282471884', href: 'tel:+916282471884',                                       color: '#22c55e' },
]

const FORMSPREE_URL = 'https://formspree.io/f/mgojvooe'

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('sent')
        setForm({ name: '', email: '', message: '' })
        setTimeout(() => setStatus('idle'), 4000)
      } else {
        setStatus('error')
        setTimeout(() => setStatus('idle'), 4000)
      }
    } catch {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 4000)
    }
  }

  return (
    <section className="contact" id="contact">
      <motion.h2
        className="section-title left"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
      >
        Get In <span>Touch</span>
      </motion.h2>

      <div className="contact-wrapper">

        {/* ── Left column ── */}
        <motion.div
          className="contact-left"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          <motion.div variants={fadeUp} className="contact-intro">
            <h3 className="contact-tagline">Let's work <span>together</span></h3>
            <p>
              I'm currently open to new opportunities. Whether you have a project
              in mind, need a Flutter developer, or just want to connect -
              feel free to reach out.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} className="contact-chips">
            {chips.map(chip => (
              <a
                key={chip.label}
                href={chip.href}
                target="_blank"
                rel="noreferrer"
                className="contact-chip"
              >
                <span className="chip-icon" style={{ color: chip.color }}>{chip.icon}</span>
                <span className="chip-label">{chip.label}</span>
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* ── Right column: Form ── */}
        <motion.form
          className="contact-form"
          onSubmit={handleSubmit}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input id="name" type="text" name="name" placeholder="Your name" value={form.name} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input id="email" type="email" name="email" placeholder="your@email.com" value={form.email} onChange={handleChange} required />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" placeholder="Tell me about your project..." rows={5} value={form.message} onChange={handleChange} required />
          </div>
          <button
            type="submit"
            disabled={status === 'sending'}
            className={`btn btn-primary submit-btn${status === 'sent' ? ' sent' : ''}${status === 'error' ? ' error' : ''}`}
          >
            {status === 'sending' && 'Sending...'}
            {status === 'sent'    && '✓ Message Sent!'}
            {status === 'error'   && '✗ Failed, try again'}
            {status === 'idle'    && <><FaPaperPlane /> Send Message</>}
          </button>
        </motion.form>

      </div>
    </section>
  )
}

export default Contact
