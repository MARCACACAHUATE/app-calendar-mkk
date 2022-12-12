import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { TareaItem } from "../TareasComponents/TareaItem";
import { TareasFiltrosContainer } from "../TareasComponents/TareasFiltrosContainer";
import { DBContext } from "../../context/DbContext";
import { Tareas } from "#preload";


interface Props {
    tareas_list: Array<Tareas>
}

function TareasDetailList(props: Props) {

    // seteamos los filtros para las listas
    const dbInfo = useContext(DBContext);
    const filtro = dbInfo?.filtro;
    let lista_filtrada = filtro != "todos" 
                         ? props.tareas_list.filter((value) => value.estado == filtro)
                         : props.tareas_list;


    return (
        <div className="flex flex-row flex-none">
            <div className="border-0 border-r border-[#aaaaaa]">
            <h1 className="text-center">Tareas Pendientes</h1>
            <ul>
            { lista_filtrada.length > 0
            ? lista_filtrada.map((tarea, index)=>(
                    <li key={index}>
                        <Link to={`/task/${index}`}>
                            <TareaItem key={index} tarea_data={tarea} />
                        </Link>
                    </li>
                ))
            : <h1 className="text-xl text-center h-32 mt-4">
                No Hay tareas pendientes pe causa
              </h1>
            }
            </ul>
            </div>
            <TareasFiltrosContainer />
        </div>
    );
}

export { TareasDetailList }
