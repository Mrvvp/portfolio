import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaWhatsapp, FaDownload } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'
import { fadeUp, stagger } from '../animations'
import './About.css'

const About = () => {
  return (
    <section className="about" id="about">
      <motion.h2
        className="section-title left"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
      >
        About <span>Me</span>
      </motion.h2>

      <motion.div
        className="about-text"
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
      >
        <motion.p variants={fadeUp}>
          I'm a <strong>Full Stack Flutter Developer</strong> with over 2 years of experience building
          scalable mobile and web applications using Flutter, Firebase, Node.js, and MongoDB.
        </motion.p>
        <motion.p variants={fadeUp}>
          I'm passionate about building performant, cross-platform apps with clean architecture
          and smooth UI. I've deployed production-grade apps to both the Google Play Store and
          Apple App Store, and enjoy working on real-time features, maps, payments, and admin
          systems that power full delivery ecosystems.
        </motion.p>
        <motion.div variants={fadeUp} className="about-links">
          <a href="https://mail.google.com/mail/?view=cm&to=marvanvp6@gmail.com" target="_blank" rel="noreferrer" className="about-link-pill">
            <SiGmail color="#EA4335" /> Mail
          </a>
          <a href="https://www.linkedin.com/in/marvanvp/" target="_blank" rel="noreferrer" className="about-link-pill">
            <FaLinkedin color="#0A66C2" /> LinkedIn
          </a>
          <a href="https://github.com/Mrvvp" target="_blank" rel="noreferrer" className="about-link-pill">
            <FaGithub color="#181717" /> GitHub
          </a>
          <a href="https://wa.me/916282471884" target="_blank" rel="noreferrer" className="about-link-pill">
            <FaWhatsapp color="#25D366" /> WhatsApp
          </a>
          <a href="/Marvans_resume.pdf" className="about-link-pill about-link-pill--accent" download>
            <FaDownload /> Download Resume
          </a>
        </motion.div>
      </motion.div>

    </section>
  )
}

export default About
