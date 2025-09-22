

export const ButtonComponent = ({ onClick, label, type }) => {
  return (
    <button 
      onClick={onClick}
      type={type}
    >
      {label}
    </button>
  )
}
