import { useState } from "react"
import { TaskComponent } from "./molecs/TaskComponent"

export const TasksList = ({ tasks }) => {
  return (
    <ul>
        {tasks.map((task, index) => (
            <TaskComponent
              key={index}
              title={task.title}
              descripcion={task.description}
              fechaI={task.fechaInicio}
              fechaF={task.fechaFin}
              prioridad={task.prioridad}
              completada={task.completada}
            />
        ))}
    </ul>
  )
}
