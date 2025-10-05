
import { TaskComponent } from "./molecs/TaskComponent"

export const TasksList = ({ tasks, setTasks }) => {

  const handleCompleteTask = (id) => {

    // Primer paso. buscar la tarea que quiero actualizar
    const taskToUpdate = tasks.find(tasks => tasks.id === id);

    // segundo paso. si la encuentro, la actualizo
    if (taskToUpdate) {

      // tercer paso. creo una nueva tarea con la propiedad completada cambiada
      const updatedTask = {
        ...taskToUpdate,
        completada: !taskToUpdate.completada
      }

      // 4to paso. creo un nuevo array de tareas con la tarea actualizada
      const updatedTasks = tasks.map(task => {

        // si la tarea es la que quiero actualizar, devuelvo la tarea actualizada
        if (task.id === id){
          return updatedTask;
        }

        // si no, devuelvo la tarea tal cual
        return task;
      })

      // 5to paso. actualizo el estado y el localStorage
      setTasks(updatedTasks);
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));

    }

  }

  const handleDeleteTask = (id) => {

    const tasksWithoutDeleted = tasks.filter(task => task.id !== id);
    setTasks(tasksWithoutDeleted);
    localStorage.setItem("tasks", JSON.stringify(tasksWithoutDeleted));

  }

  return (
    <ul>
        {tasks.map((task, index) => (
            <TaskComponent
              key={index}
              id={task.id}
              title={task.title}
              descripcion={task.description}
              fechaI={task.fechaInicio}
              fechaF={task.fechaFin}
              prioridad={task.prioridad}
              completada={task.completada}
              handleCompleteTask={handleCompleteTask}
              handleDeleteTask={handleDeleteTask}
            />
        ))}
    </ul>
  )
}
