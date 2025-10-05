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

        if (filters.alta || filters.media || filters.baja){
            filteredTasks = filteredTasks.filter(task => {
                if (filters.alta && task.prioridad === "alta") return true;
                if (filters.media && task.prioridad === "media") return true;
                if (filters.baja && task.prioridad === "baja") return true;
                return false;
            })

            // filtrar por si seleccionan alta y media, pero no baja
            if (filters.alta && filters.media && !filters.baja) {
                filteredTasks = filteredTasks.filter(task => task.prioridad !== "baja");
            }

            // filtrar por si seleccionan alta y baja, pero no media
            if (filters.alta && !filters.media && filters.baja) {
                filteredTasks = filteredTasks.filter(task => task.prioridad !== "media");
            }

            // filtrar por si seleccionan media y baja, pero no alta
            if (!filters.alta && filters.media && filters.baja) {
                filteredTasks = filteredTasks.filter(task => task.prioridad !== "alta");
            }

        }

        // filtrar por rango de fechas
        if (filters.fechaInicio){
            filteredTasks = filteredTasks.filter(task => new Date(task.fechaInicio) >= new Date(filters.fechaInicio))
        }

        if (filters.fechaFin){
            filteredTasks = filteredTasks.filter(task => new Date(task.fechaFin) <= new Date(filters.fechaFin))
        }

        setTaskList(filteredTasks);
        setShowModal(false);
    }

    const resetFilters = () => {
        setFilters({
            alta: false,
            media: false,
            baja: false,
            fechaInicio: null,
            fechaFin: null,
            completadas: false
        })

        const tasksFromStorage = localStorage.getItem("tasks");

        if (tasksFromStorage){
            const parsedTasks = JSON.parse(tasksFromStorage);
            setTaskList(parsedTasks);
        }

        setShowModal(false);
    }

    const onChangePriority = (e) => {
        const { name, checked } = e.target;
        setFilters({
            ...filters,
            [name]: checked
        })
    }

    const onChangeDate = (e) => {
        const { name, value } = e.target;
        setFilters({
            ...filters,
            [name]: value
        })
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
                        checked={filters.alta}
                        onChange={onChangePriority}
                    />
                    <span>Alta</span>
                </div>

                <div>
                    <InputComponent
                        type={"checkbox"}
                        label={"Media"}
                        name={"media"}
                        checked={filters.media}
                        onChange={onChangePriority}
                    />
                    <span>Media</span>
                </div>

                <div>
                    <InputComponent
                        type={"checkbox"}
                        label={"Baja"}
                        name={"baja"}
                        checked={filters.baja}
                        onChange={onChangePriority}
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
                    value={filters.fechaInicio}
                    onChange={onChangeDate}

                />

                <InputComponent
                    type={"date"}
                    name={"fechaFin"}
                    style={{
                        flex: 1
                    }}
                    value={filters.fechaFin}
                    onChange={onChangeDate}
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
                onClick={resetFilters}
                style={{
                    backgroundColor: "#f44336",
                }}
            />

        </div>

        </div>
    </div>
  )
}
