import { useState } from "react"
import { ButtonComponent } from "../atomic/ButtonComponent"
import { PComponent } from "../atomic/PComponent"
import { TitleComponent } from "../atomic/TitleComponent"

export const TaskComponent = ({ title, descripcion, fechaI, fechaF, prioridad, completada }) => {

    const [showOptions, setShowOptions] = useState(false);

  return (
    <li className={`task-item`}
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
            
            <div>
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

            <div className="actions-buttons">

                <div className="options-menu">
                    <ButtonComponent
                        label={"..."}
                        onClick={() => setShowOptions(!showOptions)}
                        style={{
                            backgroundColor: 'transparent',
                            fontSize: '20px',
                            transform: showOptions ? 'rotate(90deg)' : 'rotate(0deg)',
                            transition: 'transform 0.3s ease',
                        }}
                    />

                    {
                        showOptions && (
                            <div className="options-dropdown">

                                <ButtonComponent
                                    label={completada ? "Desmarcar" : "Completar"}
                                    onClick={() => {}}
                                    style={{
                                        backgroundColor: 'transparent',
                                        fontSize: '14px',
                                        padding: '5px 10px',
                                    }}
                                />

                                <ButtonComponent
                                    label={"Editar"}
                                    onClick={() => {}}
                                    style={{
                                        backgroundColor: 'transparent',
                                        fontSize: '14px',
                                        padding: '5px 10px',
                                    }}
                                />

                                <ButtonComponent
                                    label={"Eliminar"}
                                    onClick={() => {}}
                                    style={{
                                        backgroundColor: 'transparent',
                                        fontSize: '14px',
                                        padding: '5px 10px',
                                        color: 'red',
                                    }}
                                />
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    </li>
  )
}
