function ReactIcon({ width = 40, height = 40, color = "#61dafb", ...props }) {
  return (
    <svg width={width} height={height} viewBox="0 0 40 40" fill="none" {...props}>
      <rect width="40" height="40" rx="8" fill={color} opacity="0.1"/>
      <circle cx="20" cy="20" r="3" fill={color}/>
      <ellipse cx="20" cy="20" rx="10" ry="4" stroke={color} strokeWidth="1.5" fill="none"/>
      <ellipse cx="20" cy="20" rx="10" ry="4" stroke={color} strokeWidth="1.5" fill="none" transform="rotate(60 20 20)"/>
      <ellipse cx="20" cy="20" rx="10" ry="4" stroke={color} strokeWidth="1.5" fill="none" transform="rotate(120 20 20)"/>
    </svg>
  )
}

export default ReactIcon
