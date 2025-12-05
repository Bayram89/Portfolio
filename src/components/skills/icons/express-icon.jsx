function ExpressIcon({ width = 40, height = 40, color = "#000000", ...props }) {
  return (
    <svg width={width} height={height} viewBox="0 0 40 40" fill="none" {...props}>
      <rect width="40" height="40" rx="8" fill={color} opacity="0.1"/>
      <path d="M12 18h16M14 22l12-8M14 14l12 8" stroke={color} strokeWidth="2"/>
    </svg>
  )
}

export default ExpressIcon
