const RippleDots = () => {
  const cx = 760
  const cy = 420
  const ringSpacing = 52
  const dotSpacing = 25
  const numRings = 13
  const dotR = 1.6
  const fill = 'rgba(15,23,42,0.09)'

  const dots = [{ x: cx, y: cy, k: 'c' }]

  for (let ring = 1; ring <= numRings; ring++) {
    const radius = ring * ringSpacing
    const count = Math.max(8, Math.round((2 * Math.PI * radius) / dotSpacing))
    for (let i = 0; i < count; i++) {
      const angle = (2 * Math.PI * i) / count
      dots.push({
        x: cx + radius * Math.cos(angle),
        y: cy + radius * Math.sin(angle),
        k: `${ring}-${i}`,
      })
    }
  }

  return (
    <svg
      aria-hidden="true"
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    >
      {dots.map(d => (
        <circle key={d.k} cx={d.x} cy={d.y} r={dotR} fill={fill} />
      ))}
    </svg>
  )
}

export default RippleDots
