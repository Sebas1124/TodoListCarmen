import { useState } from "react"
import { FormComponent } from "./components/FormComponent"
import { TasksList } from "./components/TasksList";
import { ButtonComponent } from "./components/atomic/ButtonComponent";

export const App = () => {

  const [tasks, setTasks] = useState([]);

  return (
    <>
      <FormComponent
        setTasks={setTasks}
      />
      <hr/>
      <ButtonComponent
        label={"Filtros"}
      />
      <TasksList tasks={tasks}/>
    </>
  )
}
