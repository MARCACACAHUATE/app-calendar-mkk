import React, { useState, useEffect } from "react";
import { Route, Routes, Link } from 'react-router-dom'
import { GetTareasFilter, Tareas } from '#preload';
import { TaskDetailContainer } from './TaskDetailComponents/TaskDetailContainer';
import { TareasDetailList } from "../TareasComponents/TareasDetailList";


interface Props {
    fecha_cell: string
}

function TareaDetailListContainer(props: Props){

    const [tareasList, setTareasList] = useState<Array<Tareas>>([])
    const fecha = props.fecha_cell.slice(0, 10) 
    
    useEffect(()=>{
        GetTareasFilter(fecha).then(value=> setTareasList(value));
    }, [])

    return (
        <div className="flex-none w-1/2 border-0 border-r border-[#aaaaaa]">
            <h1 className="text-center">Tareas Pendientes</h1>

            <Routes>
                <Route path="/" element={ <TareasDetailList tareas_list={tareasList} /> } />
                <Route path="/task/:index" element={<TaskDetailContainer tarea_data={tareasList} />} />
            </Routes>
        </div>
    );
}

export { TareaDetailListContainer }
