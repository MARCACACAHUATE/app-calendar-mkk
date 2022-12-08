import React, { useState, useEffect } from "react";
import { Route, Routes, Link } from 'react-router-dom'
import { GetTareasFilter, Tareas } from '#preload';
import { TareaItem } from './TareaItem';
import { TaskDetailContainer } from './TaskDetailComponents/TaskDetailContainer';

interface Props {
    fecha: string
}

function TareaDetailListContainer(props: Props){

    const [tareasList, setTareasList] = useState<Array<Tareas>>([])
    console.log(props.fecha.slice(0, 10));
    
    useEffect(()=>{
        GetTareasFilter(props.fecha.slice(0, 10)).then(value=> setTareasList(value));
    }, [])

    return (
        <div className="flex-none w-1/2 border-0 border-r border-[#aaaaaa]">
            <h1 className="text-center">Tareas Pendientes</h1>
            <ul>
            {
                tareasList.map((tarea, index)=>(
                    <li key={index}><Link to={`/task/${tarea.titulo.replaceAll(" ", "_")}`}><TareaItem key={index} titulo={tarea.titulo} /></Link></li>
                ))
            }
            </ul>

            <Routes>
                <Route path="/task/:tasKHeader" element={<TaskDetailContainer />} />
            </Routes>
        </div>
    );
}

export { TareaDetailListContainer }
