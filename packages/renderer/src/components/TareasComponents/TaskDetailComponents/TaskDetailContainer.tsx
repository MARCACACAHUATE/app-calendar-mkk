import React, { useContext, useState } from "react";
import { useParams, Link } from 'react-router-dom';
import { ModalContext } from '../../../context/ModalContext';
import { Tareas } from '#preload';


interface Props {
    tarea_data: Array<Tareas>
}

function TaskDetailContainer({tarea_data}: Props){
    const modalInfo = useContext(ModalContext);
    const [dropList, setDropList] = useState<boolean>(false);

    // obtenemos el index de la tarea para extraerla del array
    const { index } = useParams();
    const numero_tarea = index != undefined ? parseInt(index) : 0
    const data = tarea_data[numero_tarea]

    // calcular los dias restantes
    const dia_actual = new Date().getDate();
    const dia_vencimiento = new Date(data.fecha_vencimiento).getDate();
    const dias_restantes = dia_vencimiento - dia_actual;

    // seteamos los items que se mostraran en la lista de asignados
    const lista_personas = dropList ? data.personas : data.personas.slice(0, 4);
    const onDropListChange = () => {
        setDropList(!dropList);
    }

    return (
        <div className="flex flex-row text-sm">
            <div className="w-1/2">
                <h1 className="text-xl">{ data.titulo }</h1>
                <p><span className="font-bold">Fecha de Inicio:</span> { data.fecha_inicio.slice(0, 10) }</p>
                <p><span className="font-bold">Fecha de Vencimiento:</span> { data.fecha_vencimiento.slice(0, 10) }</p>
                <p><span className="font-bold">Asignado a:</span></p>
                <ul>
                { 
                    lista_personas.map((persona, index) => (
                        <li key={index}>- {persona.email}</li>
                    ))
                }
                </ul>

                { !dropList && (
                <p className="text-[10px] -mb-2 text-center w-full">
                    {data.personas.length - lista_personas.length} personas restantes
                </p>)
                }
                <button onClick={onDropListChange} className="text-lg w-full">
                    {dropList ? "" : ""}
                </button>
                <p><span className="font-bold">Dias Restantes:</span> { dias_restantes } dias</p>
                <p><span className="font-bold">Nivel de Prioridad:</span> { data.prioridad }</p>
                <p><span className="font-bold">Estado de la Tarea:</span> { data.estado }</p>
            </div>
            <textarea className="w-1/2 order-[13] col-span-2 bg-white border-2 border-[#d6d6d6] rounded-md text-[#7a7a7a]" defaultValue={ data.descripcion } />
        </div>
    );
}


export { TaskDetailContainer }
