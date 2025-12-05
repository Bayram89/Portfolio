function NodeIcon({ width = 40, height = 40, color = "#68a063", ...props }) {
  return (
    <svg width={width} height={height} viewBox="0 0 40 40" fill="none" {...props}>
      <rect width="40" height="40" rx="8" fill={color} opacity="0.1"/>
      <path d="M20 12l-8 4.5v9L20 30l8-4.5v-9L20 12z" fill={color}/>
    </svg>
  )
}

export default NodeIcon
