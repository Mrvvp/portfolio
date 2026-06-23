import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { FaGooglePlay, FaAppStore, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { fadeUp } from '../animations'
import onesAndTwos from '../assets/ones.webp'
import lendIt from '../assets/1.png'
import rackt from '../assets/image.png'
import kealthy from '../assets/kealthy.webp'
import bookMyMandap from '../assets/book my mandap.webp'
import './Projects.css'

const projects = [
  {
    title: 'Ones And 2s',
    subtitle: 'Helicopter Bidding Platform',
    description:
      'Cross-platform bidding app for Android and iOS with a real-time bidding system, live status updates, dynamic price tracking, secure authentication, and API communication.',
    playStore: null,
    appStore: null,
    accent: 'linear-gradient(135deg, #10b981, #059669)',
    image: onesAndTwos,
  },
  {
    title: 'Lend It',
    subtitle: 'P2P Product Lending Marketplace',
    description:
      'Canada-based cross-platform marketplace for lending and borrowing products. Features listings, search & filter, booking workflow, in-app messaging, and secure payment handling.',
    playStore: null,
    appStore: null,
    accent: 'linear-gradient(135deg, #06b6d4, #6366f1)',
    image: lendIt,
  },
  {
    title: 'Rackt',
    subtitle: 'Warehouse Management System',
    description:
      'Inventory management app with barcode/QR scanner for product identification, real-time stock updates, and movement logging.',
    playStore: null,
    appStore: null,
    accent: 'linear-gradient(135deg, #f97316, #fb923c)',
    image: rackt,
  },
  {
    title: 'Book My Mandap',
    subtitle: 'Wedding Venue Booking App',
    description:
      'End-to-end mandap and wedding venue booking platform. Browse verified venues, check availability, view galleries, and confirm bookings with secure payments - making wedding planning effortless.',
    playStore: null,
    appStore: null,
    accent: 'linear-gradient(135deg, #ec4899, #f43f5e)',
    image: bookMyMandap,
  },
  {
    title: 'Kealthy',
    subtitle: 'Healthy Food Delivery',
    description:
      'Seamless food ordering experience with real-time tracking, secure Razorpay payments, and live location via Google Maps. OTP login, push notifications, smooth cross-platform performance.',
    playStore: null,
    appStore: null,
    accent: 'linear-gradient(135deg, #6c63ff, #a78bfa)',
    image: kealthy,
  },
]

const ProjectCard = ({ project }) => {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="proj-card">
      <div className="proj-image-wrap">
        {project.image ? (
          <img src={project.image} alt={project.title} className="proj-image" />
        ) : (
          <div className="proj-image-placeholder" style={{ background: project.accent }} />
        )}
      </div>
      <div className="proj-body">
        <div className="proj-titles">
          <h3 className="proj-title">{project.title}</h3>
          <p className="proj-subtitle">{project.subtitle}</p>
        </div>
        <p className={`proj-desc${expanded ? ' expanded' : ''}`}>{project.description}</p>
        <button className="proj-read-more" onClick={() => setExpanded(e => !e)}>
          {expanded ? 'Show less' : 'Read more'}
        </button>
        {(project.playStore || project.appStore) && (
          <div className="proj-links">
            {project.playStore && (
              <a href={project.playStore} target="_blank" rel="noreferrer" className="proj-link">
                <FaGooglePlay /> Play Store
              </a>
            )}
            {project.appStore && (
              <a href={project.appStore} target="_blank" rel="noreferrer" className="proj-link">
                <FaAppStore /> App Store
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

const Projects = () => {
  const containerRef = useRef(null)
  const track = projects

  const scrollCard = (dir) => {
    containerRef.current?.scrollBy({ left: dir * 320, behavior: 'smooth' })
  }

  return (
    <section className="projects" id="projects">
      <div className="projects-header">
        <motion.h2
          className="section-title left"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          Featured <span>Projects</span>
        </motion.h2>
      </div>

      <div className="proj-marquee-wrap">
        <div className="proj-marquee" ref={containerRef}>
          <div className="proj-track">
            {track.map((p, i) => <ProjectCard key={i} project={p} />)}
          </div>
        </div>

        <button className="proj-scroll-btn left" onClick={() => scrollCard(-1)} aria-label="Scroll left">
          <FaChevronLeft />
        </button>
        <button className="proj-scroll-btn right" onClick={() => scrollCard(1)} aria-label="Scroll right">
          <FaChevronRight />
        </button>
      </div>
    </section>
  )
}

export default Projects
