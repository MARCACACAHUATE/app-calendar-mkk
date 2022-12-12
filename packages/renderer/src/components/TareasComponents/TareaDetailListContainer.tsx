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
        <div className="flex flex-col w-full">

            <Routes>
                <Route path="/" element={ <TareasDetailList tareas_list={tareasList} /> } />
                <Route path="/task/:index" element={<TaskDetailContainer tarea_data={tareasList} />} />
            </Routes>
        </div>
    );
}

export { TareaDetailListContainer }
