function HtmlIcon({ width = 40, height = 40, color = "#e34f26", ...props }) {
  return (
    <svg width={width} height={height} viewBox="0 0 40 40" fill="none" {...props}>
      <rect width="40" height="40" rx="8" fill={color} opacity="0.1"/>
      <path d="M12 10h16l-1.5 17L20 30l-6.5-3L12 10z" fill={color}/>
    </svg>
  )
}

export default HtmlIcon
