import { useState } from "react";
import { InputComponent } from "./atomic/InputComponent"
import { SelectComponent } from "./molecs/SelectComponent";
import { ButtonComponent } from "./atomic/ButtonComponent";

export const FormComponent = ({ setTasks }) => {

    const [form, setForm] = useState({
        title: "",
        description: "",
        fechaInicio: new Date(),
        fechaFin: "",
        prioridad: "baja",
        completada: false
    });

    const [errorMessage, setErrorMessage] = useState([]);

    const handleChange = (event) => {

        const { name, value } = event.target;

        setForm({
            ...form,
            [name] : value
            // description: "Descripcion algo sjandbkaljsdns"
        })
    }

    const submitForm = (event) => {
        event.preventDefault();

        const { 
            title, 
            description, 
            fechaInicio, 
            fechaFin, 
            prioridad, 
            completada 
        } = form;

        if (title.trim() === ""){

            // buscar "El titulo es obligatorio" en el array errorMessage
            if (!errorMessage.includes("El titulo es obligatorio")) {
                setErrorMessage(prev => [...prev, "El titulo es obligatorio"]);
            }
        }

        if (description.trim() === ""){
            // buscar "La descripcion es obligatoria" en el array errorMessage
            if (!errorMessage.includes("La descripcion es obligatoria")) {
                setErrorMessage(prev => [...prev, "La descripcion es obligatoria"]);
            }
        }

        //TODO: realizar las demas validaciones.
        if (errorMessage.length > 0) return;

        const newTask = {
            title,
            description,
            fechaInicio,
            fechaFin,
            prioridad,
            completada: false
        }

        setTasks(prev => [...prev, newTask]);

        setForm({
            title: "",
            description: "",
            fechaInicio: new Date(),
            fechaFin: "",
            prioridad: "",
            completada: false
        })
    }


  return (
    <form onSubmit={submitForm}>

        <InputComponent
            type={"text"}
            placeholder={"Ingresar titulo"}
            value={form.title}
            name={"title"}
            onChange={handleChange}
        />

        <InputComponent
            type={"text"}
            placeholder={"Ingresar descripcion"}
            value={form.description}
            name={"description"}
            onChange={handleChange}
        />
        <InputComponent
            type={"date"}
            placeholder={"Ingresar fecha de inicio"}
            value={form.fechaInicio}
            name={"fechaInicio"}
            onChange={handleChange}
        />
        <InputComponent
            type={"date"}
            placeholder={"Ingresar fecha de fin"}
            value={form.fechaFin}
            name={"fechaFin"}
            onChange={handleChange}
        />

        <SelectComponent
            form={form}
            setValue={setForm}
        />

        <ButtonComponent
            label={"Guardar"}
            type={"submit"}
        />

        {
            errorMessage && (
                errorMessage.map((error, index) => (
                    <p 
                        key={index} 
                        style={{ color: "red" }}
                    >
                        {error}
                    </p>
                ))
            )   
        }

    </form>
  )
}
