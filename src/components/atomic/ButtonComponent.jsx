

export const ButtonComponent = ({ onClick, label, type, style }) => {
  return (
    <button 
      onClick={onClick}
      type={type}
      style={style}
    >
      {label}
    </button>
  )
}
