import React from "react";
import { Tareas } from '#preload';

interface Props {
    tarea_data: Tareas
}

function TareaItem({tarea_data}: Props){
    return (
        <div className="flex flex-row text-center items-center text-sm text-white">
            <p className="w-48 h-7 m-2 bg-emerald-800 rounded-lg">{tarea_data.titulo}</p>
            <p className="w-24 h-7 m-2 bg-emerald-800 rounded-lg px-2">{tarea_data.estado}</p>
        </div>
    );
}


export { TareaItem }
