import ButtonAdd from "../atomos/BotonAgregar";
import TextInput from "../atomos/EntradaTarea";
import { useState, useEffect } from "react";
import CheckTarea from "../atomos/checkTarea";
import ButtonDelete from "../atomos/BotonesEliminar"

const Coso = () => {
    const [tareas, setTareas] = useState([]);

    useEffect(() => {
        const tareasGuardadas = JSON.parse(window.localStorage.getItem("tareas"));
        tareasGuardadas && setTareas(tareasGuardadas);
    }
    , []);

    const guardarLocal = () => {
        window.localStorage.setItem("tareas", JSON.stringify(tareas));
    }

    const addT = () => {
        const tareaInput = document.getElementById("tareaInput");
        const tarea = tareaInput.value.trim();
        tarea === "" ? alert("No puedes agregar una tarea vacía") : setTareas([...tareas, tarea]);
        tareaInput.value = "";
        guardarLocal();
    }

    const eliminarTodo = () => {
        setTareas([]);
        guardarLocal();
    }

    const eliminarSeleccionados = () => {
        const tareasNuevas = tareas.filter((tarea, index) => {
            const check = document.getElementById(index);
            return check.checked === false;
        });
        for(let i = 0; i < tareas.length; i++){
            const check = document.getElementById(i);
            check.checked = false;
        }
        setTareas(tareasNuevas);
        guardarLocal();
    }


    const onChange2 = () => {
        guardarLocal();
    }

    return (
        <div className="cajita">
            <TextInput />
            <ButtonAdd addTask={addT} />
            <div>
                {tareas.map((tarea, index) => (
                    <div key={index}>
                        {tarea}
                        <CheckTarea idTask={index} onChange1={onChange2}/>
                    </div>
                ))}
            </div>
            <div>
                <ButtonDelete eliminar={eliminarSeleccionados} texto="Eliminar Seleccionados"/>
                <ButtonDelete eliminar={eliminarTodo} texto="Eliminar Todo"/>
            </div>
        </div>
    );
}

export default Coso;