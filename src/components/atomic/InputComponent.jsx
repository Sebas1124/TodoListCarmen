

export const InputComponent = ({ placeholder, type, value, onChange, name, style }) => {
  return (
    <>
      <input 
        type={type}
        placeholder={placeholder}
        value={value}
        style={style}
        onChange={onChange}
        name={name}
      />
    </>
  )
}
