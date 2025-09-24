import { useState } from "react";
import { ButtonComponent } from "./atomic/ButtonComponent";
import { InputComponent } from "./atomic/InputComponent";

export const ModalComponent = ({ showModal, setShowModal, taskList, setTaskList }) => {

    if (!showModal) return null;

    const [filters, setFilters] = useState({
        alta: false,
        media: false,
        baja: false,
        fechaInicio: null,
        fechaFin: null,
        completadas: false
    })

    const handleChangeCompleted = (e) => {

        setFilters({
            ...filters,
            completadas: !filters.completadas
        })
    }

    const handleApplyFilters = () => {
        
        let filteredTasks = [...taskList];

        // Filtrar por completadas.
        if (filters.completadas){
            filteredTasks = filteredTasks.filter(task => task.completada === true);
        }

        setTaskList(filteredTasks);
        setShowModal(false);
    }

  return (
    <div className="modal-background">
        <div className="modal-content">
        
        <div className="modal-header">
            <h2>Filtros</h2>
            <span 
                className="close-button"
                onClick={() => setShowModal(false)}
            >
                &times;
            </span>
        </div>
        
        {/* opciones de filtros */}
        <div className="modal-body">
            <span>Filtrar por Prioridad:</span>

            <div className="filter-options">
                <div>
                    <InputComponent
                        type={"checkbox"}
                        label={"Alta"}
                        name={"alta"}
                    />
                    <span>Alta</span>
                </div>

                <div>
                    <InputComponent
                        type={"checkbox"}
                        label={"Media"}
                        name={"media"}
                    />
                    <span>Media</span>
                </div>

                <div>
                    <InputComponent
                        type={"checkbox"}
                        label={"Baja"}
                        name={"baja"}
                    />
                    <span>Baja</span>
                </div>
            </div>

            <span>Filtrar por rango de fechas:</span>
            
            <div className="date-filters">
               
                <InputComponent
                    type={"date"}
                    name={"fechaInicio"}
                    style={{
                        flex: 1
                    }}
                />

                <InputComponent
                    type={"date"}
                    name={"fechaFin"}
                    style={{
                        flex: 1
                    }}
                />
            </div>

            <span>Filtrar por completadas:</span>
            <div className="completed-filter">
                <InputComponent
                    type={"checkbox"}
                    label={"Completadas"}
                    name={"completadas"}
                    onChange={handleChangeCompleted}
                    checked={filters.completadas}

                />
                <span>Completadas</span>
            </div>

            {/* Boton para aplicar filtros */}
            <ButtonComponent
                label={"Aplicar Filtros"}
                onClick={handleApplyFilters}
            />

            {/* Resetear filtros */}
            <ButtonComponent
                label={"Resetear Filtros"}
                style={{
                    backgroundColor: "#f44336",
                }}
            />

        </div>

        </div>
    </div>
  )
}
