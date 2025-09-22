import { PComponent } from "../atomic/PComponent"
import { TitleComponent } from "../atomic/TitleComponent"

export const TaskComponent = ({ title, descripcion, fechaI, fechaF, prioridad, completada }) => {
  return (
    <li>
        <TitleComponent
            value={title}
        />
        <PComponent
            value={descripcion}
        />
        <PComponent
            value={`Fecha de inicio: ${fechaI}`}
        />
        <PComponent
            value={`Fecha de fin: ${fechaF}`}
        />
        <PComponent
            value={`Prioridad: ${prioridad}`}
        />
        <PComponent
            value={`Completada: ${completada ? "Si" : "No"}`}
        />
    </li>
  )
}
