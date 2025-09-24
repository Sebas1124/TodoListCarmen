import { PComponent } from "../atomic/PComponent"
import { TitleComponent } from "../atomic/TitleComponent"

export const TaskComponent = ({ title, descripcion, fechaI, fechaF, prioridad, completada }) => {
  return (
    <li className="task-item"
        style={{
            textDecoration: completada ? "line-through" : "none",
            backgroundColor: prioridad === "alta" ? "#e7646471" : 
                             prioridad === "media" ? "#dcca80af" : "#ccffcc85",
        }}
    >
        <TitleComponent
            value={title}
        />
        <div className="task-details">
            {/* Descripcion*/}
            <PComponent
                value={descripcion}
            />
            {/* Fechas de inicio y fin */}
            
            <div className="date-details">
                <PComponent
                    value={`${fechaI}`}
                />
                <span>-</span>
                <PComponent
                    value={`${fechaF}`}
                />
            </div>
        </div>
    </li>
  )
}
