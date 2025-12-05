function JavascriptIcon({ width = 40, height = 40, color = "#f7df1e", ...props }) {
  return (
    <svg width={width} height={height} viewBox="0 0 40 40" fill="none" {...props}>
      <rect width="40" height="40" rx="8" fill={color} opacity="0.2"/>
      <rect x="12" y="12" width="16" height="16" rx="2" fill={color}/>
    </svg>
  )
}

export default JavascriptIcon
