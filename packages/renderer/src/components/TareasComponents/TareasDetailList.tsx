import React from "react";
import { Link } from "react-router-dom";
import { TareaItem } from "../TareasComponents/TareaItem";
import { Tareas } from "#preload";


interface Props {
    tareas_list: Array<Tareas>
}

function TareasDetailList(props: Props) {
    return (
        <ul>
        { props.tareas_list.length > 0
        ? props.tareas_list.map((tarea, index)=>(
                <li key={index}>
                    <Link to={`/task/${index}`}>
                        <TareaItem key={index} tarea_data={tarea} />
                    </Link>
                </li>
            ))
        : <h1 className="text-xl text-center h-32 mt-4">
            No Hay tareas pendienets pe causa
          </h1>
        }
        </ul>
    );
}

export { TareasDetailList }
