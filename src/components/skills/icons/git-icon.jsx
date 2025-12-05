function GitIcon({ width = 40, height = 40, color = "#f05032", ...props }) {
  return (
    <svg width={width} height={height} viewBox="0 0 40 40" fill="none" {...props}>
      <rect width="40" height="40" rx="8" fill={color} opacity="0.1"/>
      <circle cx="15" cy="20" r="3" fill={color}/>
      <circle cx="25" cy="20" r="3" fill={color}/>
      <path d="M15 20h10" stroke={color} strokeWidth="2"/>
    </svg>
  )
}

export default GitIcon
