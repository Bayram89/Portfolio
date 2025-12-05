function ApiIcon({ width = 40, height = 40, color = "#8b5cf6", ...props }) {
  return (
    <svg width={width} height={height} viewBox="0 0 40 40" fill="none" {...props}>
      <rect width="40" height="40" rx="8" fill={color} opacity="0.1"/>
      <path d="M15 13h10v3H15zm0 5h10v3H15zm0 5h7v3h-7z" fill={color}/>
    </svg>
  )
}

export default ApiIcon
