import { OptionComponent } from "../atomic/OptionComponent"


export const SelectComponent = ({ form, setValue, style }) => {

  const handleChange = (event) => {

    if (event.target.value === "") return;

    setValue({
      ...form,
      prioridad: event.target.value
    });
  }

  return (
    <select
      defaultValue={""}
      onChange={handleChange}
      style={style}
    >
      <OptionComponent value="" label="-- Seleccione una prioridad --" />
      <OptionComponent value="baja" label="Baja" />
      <OptionComponent value="media" label="Media" />
      <OptionComponent value="alta" label="Alta" />
    </select>
  )
}
