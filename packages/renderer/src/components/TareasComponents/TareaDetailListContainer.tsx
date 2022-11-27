import React, { useState } from "react";
import { Route, Routes, Link } from 'react-router-dom'
import { TareaItem } from './TareaItem';
import { TaskDetailContainer } from './TaskDetailComponents/TaskDetailContainer';


const titulos = ["Tarea 1", "Comprar chicharones", "8 kilos de jitomate"];

function TareaDetailListContainer(){

    const [ mostrarLista, setMostrarLista ] = useState(true);

    return (
        <div className="flex-none w-1/2 border-0 border-r border-[#aaaaaa]">
            <h1 className="text-center">Tareas Pendientes</h1>
            <ul>
            {
                titulos.map((tituloHeader, index)=>(
                    <li key={index}><Link to={`/task/${tituloHeader.replaceAll(" ", "_")}`}><TareaItem key={index} titulo={tituloHeader} /></Link></li>
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
