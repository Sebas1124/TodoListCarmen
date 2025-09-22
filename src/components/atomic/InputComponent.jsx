

export const InputComponent = ({ placeholder, type, value, onChange, name }) => {
  return (
    <input 
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      name={name}
    />
  )
}
