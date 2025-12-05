function MaterialUiIcon({ width = 40, height = 40, color = "#007FFF", ...props }) {
  return (
    <svg width={width} height={height} viewBox="0 0 40 40" fill="none" {...props}>
      <rect width="40" height="40" rx="8" fill={color} opacity="0.1"/>
      <path d="M12 14l8-4.5 8 4.5v9l-8 4.5-8-4.5v-9z" fill={color}/>
      <path d="M20 14v9" stroke="white" strokeWidth="1.5"/>
    </svg>
  )
}

export default MaterialUiIcon
