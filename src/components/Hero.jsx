import { motion } from 'framer-motion'
import riverpodSvg from '../assets/riverpod.svg'
import blocSvg from '../assets/bloc.svg'
import { SiFlutter } from 'react-icons/si'
import { FaProjectDiagram, FaLayerGroup } from 'react-icons/fa'
import { fadeUp, stagger, scaleIn } from '../animations'
import profileImg from '../assets/profile.png'
import './Hero.css'

const techStack = [
  { icon: <SiFlutter />,    label: 'Flutter',             color: '#54C5F8' },
  { icon: <img src={riverpodSvg} alt="Riverpod" style={{ width: '1em', height: '1em' }} />, label: 'Riverpod', color: null },
  { icon: <img src={blocSvg} alt="BLoC" style={{ width: '2em', height: '2em' }} />, label: 'BLoC', color: null },
  { icon: <FaLayerGroup />, label: 'Clean Architecture',  color: '#6366f1' },
]

const RINGS = [
  { radius: 200, fill: 'rgba(15,23,42,0.18)', r: 1.8 },
  { radius: 216, fill: 'rgba(15,23,42,0.09)', r: 1.6 },
  { radius: 232, fill: 'rgba(15,23,42,0.10)', r: 1.4 },
]
const SVG_C = 350
const SPACING = 22
const rippleDots = RINGS.flatMap(({ radius, fill, r }, ri) => {
  const count = Math.round((2 * Math.PI * radius) / SPACING)
  return Array.from({ length: count }, (_, i) => {
    const a = (2 * Math.PI * i) / count
    return { x: SVG_C + radius * Math.cos(a), y: SVG_C + radius * Math.sin(a), fill, r, k: `${ri}-${i}` }
  })
})

const floats = [
  { icon: <SiFlutter color="#54C5F8" />,  text: 'Flutter Dev',    cls: 'float-tl', delay: 0.7 },
  { icon: <FaProjectDiagram color="#6366f1" />, text: 'System Design', cls: 'float-tr', delay: 0.85 },
  { icon: '⭐',                            text: '2+ Years',       cls: 'float-bl', delay: 1.0 },
  { icon: '🚀',                            text: '5 Apps Shipped', cls: 'float-br', delay: 1.1 },
]

const Hero = () => {
  return (
    <section className="hero" id="hero">

      <div className="hero-grid">

        {/* ── Left column ── */}
        <motion.div className="hero-left" variants={stagger} initial="hidden" animate="visible">

          <motion.div variants={fadeUp} className="hero-badge">
            <span className="hero-badge-dot" />
            Available for work
          </motion.div>

          <motion.div variants={fadeUp} className="hero-heading">
            <p className="hero-greeting">Hi, I'm</p>
            <h1 className="hero-name">Marvan</h1>
          </motion.div>

          <motion.h2 variants={fadeUp} className="hero-title">
            Full Stack Mobile App Developer
          </motion.h2>

          <motion.p variants={fadeUp} className="hero-description">
            2+ years crafting high-quality cross-platform apps with Flutter -
            delivered and live on both Google Play and the Apple App Store.
          </motion.p>

          <motion.div variants={fadeUp} className="hero-stack">
            {techStack.map(t => (
              <span key={t.label} className="hero-tech-pill">
                <span className="pill-icon" style={{ color: t.color }}>{t.icon}</span>
                {t.label}
              </span>
            ))}
          </motion.div>


        </motion.div>

        {/* ── Right column ── */}
        <motion.div
          className="hero-right"
          variants={scaleIn}
          initial="hidden"
          animate="visible"
        >
          <div className="hero-visual">
            <svg
              aria-hidden="true"
              className="ripple-dots-svg"
              style={{
                position: 'absolute',
                width: 700,
                height: 700,
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                pointerEvents: 'none',
                zIndex: 0,
              }}
            >
              {rippleDots.map(d => (
                <circle key={d.k} cx={d.x} cy={d.y} r={d.r} fill={d.fill} />
              ))}
            </svg>
            <div className="hero-image-ring">
              <img src={profileImg} alt="Marvan V P" />
            </div>

            {floats.map(f => (
              <motion.div
                key={f.cls}
                className={`hero-float ${f.cls}`}
                initial={{ opacity: 0, scale: 0.75 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: f.delay, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="float-emoji">{f.icon}</span>
                <span className="float-text">{f.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default Hero
