import { useEffect, useState } from "react"
import { FormComponent } from "./components/FormComponent"
import { TasksList } from "./components/TasksList";
import { ButtonComponent } from "./components/atomic/ButtonComponent";
import { TitleComponent } from "./components/atomic/TitleComponent";
import { ModalComponent } from "./components/ModalComponent";

export const App = () => {

  const [tasks, setTasks] = useState([
  ]);

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    
    const taskFromStorage = localStorage.getItem("tasks");

    if (taskFromStorage){
      const parsedTasks = JSON.parse(taskFromStorage);
      setTasks(parsedTasks);
    }

  }, [])
  

  return (
    <>
      <main>

        <TitleComponent
          value={"TODO LIST C&S"}
          style={{
            textAlign: "center",
            fontSize: "2rem",
            letterSpacing: "1px",
            fontWeight: "bold",
          }}
        />

        <FormComponent
          setTasks={setTasks}
          tasks={tasks}
        />

        <hr/>

        <div className="filter-tasks">
          <ButtonComponent
            label={"Filtros"}
            onClick={() => setShowModal(true)}
          />

          <div className="priority-filters">
            {/* Prioridades */}
            <div className="priority-content high-priority">
              <span>Alta</span>
            </div>

            <div className="priority-content medium-priority">
              <span>Media</span>
            </div>

            <div className="priority-content low-priority">
              <span>Baja</span>
            </div>
          </div>

        </div>

        <TasksList tasks={tasks} setTasks={setTasks} />
        
      </main>

      <ModalComponent 
        showModal={showModal}
        setShowModal={setShowModal}
        setTaskList={setTasks}
        taskList={tasks}
      />
    </>
  )
}
