import { motion } from 'framer-motion'
import { SiNodedotjs, SiReact, SiMongodb, SiGooglemaps, SiGoogleplay, SiAppstore, SiGooglecloud, SiFlutter, SiFirebase, SiDart, SiGit, SiXcode, SiPostman, SiFigma } from 'react-icons/si'
import { FaStar, FaRegStar, FaLayerGroup, FaCreditCard, FaProjectDiagram } from 'react-icons/fa'
import { fadeUp, stagger } from '../animations'
import riverpodSvg from '../assets/riverpod.svg'
import blocSvg from '../assets/bloc.svg'
import './Skills.css'

const skills = [
  { name: 'Flutter',            stars: 5, icon: <SiFlutter />,                                                                  color: '#54C5F8' },
  { name: 'Dart',               stars: 5, icon: <SiDart />,                                                                     color: '#0175C2' },
  { name: 'Riverpod',           stars: 5, icon: <img src={riverpodSvg} alt="Riverpod" style={{ width:'1em', height:'1em' }} />, color: null },
  { name: 'BLoC',               stars: 5, icon: <img src={blocSvg} alt="BLoC" style={{ width:'1.6em', height:'1.6em' }} />,    color: null },
  { name: 'Xcode',              stars: 5, icon: <SiXcode />,                                                                    color: '#147EFB' },
  { name: 'Clean Architecture', stars: 5, icon: <FaLayerGroup />,                                                               color: '#6366f1' },
  { name: 'Firebase',           stars: 5, icon: <SiFirebase />,                                                                 color: '#FFCA28' },
  { name: 'REST APIs',          stars: 5, icon: '🔗',                                                                           color: '#6366f1' },
  { name: 'Play Store',         stars: 5, icon: <SiGoogleplay />,                                                               color: '#01875f' },
  { name: 'App Store',          stars: 5, icon: <SiAppstore />,                                                                 color: '#0D96F6' },
  { name: 'Git',                stars: 4, icon: <SiGit />,                                                                      color: '#F05032' },
  { name: 'Node.js',            stars: 4, icon: <SiNodedotjs />,                                                                color: '#339933' },
  { name: 'React',              stars: 4, icon: <SiReact />,                                                                    color: '#61DAFB' },
  { name: 'MongoDB',            stars: 4, icon: <SiMongodb />,                                                                  color: '#47A248' },
  { name: 'Google Maps',        stars: 4, icon: <SiGooglemaps />,                                                               color: '#4285F4' },
  { name: 'Google Cloud',        stars: 4, icon: <SiGooglecloud />,                                                             color: '#4285F4' },
  { name: 'Product Design',      stars: 4, icon: <SiFigma />,                                                                   color: '#F24E1E' },
  { name: 'Payment Integration', stars: 4, icon: <FaCreditCard />,                                                              color: '#10b981' },
  { name: 'Postman',             stars: 4, icon: <SiPostman />,                                                                 color: '#FF6C37' },
  { name: 'System Design',       stars: 4, icon: <FaProjectDiagram />,                                                          color: '#6366f1' },
]

const Stars = ({ count }) => (
  <div className="skill-stars">
    {Array.from({ length: 5 }, (_, i) =>
      i < count
        ? <FaStar key={i} className="star filled" />
        : <FaRegStar key={i} className="star empty" />
    )}
  </div>
)

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <motion.h2
        className="section-title left"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
      >
        My <span>Skills</span>
      </motion.h2>

      <motion.div
        className="skills-grid"
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-40px' }}
      >
        {skills.map(skill => (
          <motion.div className="skill-card" key={skill.name} variants={fadeUp}>
            <div className="skill-name">
              <span className="skill-icon" style={{ color: skill.color }}>
                {skill.icon}
              </span>
              <span>{skill.name}</span>
            </div>
            <Stars count={skill.stars} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default Skills
