import React, { useContext, useState } from "react";
import { useParams } from 'react-router-dom';
import { DBContext } from '../../../context/DbContext';
import { Tareas, ModificarDescripcion, ModificarEstado } from '#preload';


interface Props {
    tarea_data: Array<Tareas>
}

function TaskDetailContainer({tarea_data}: Props){
    const dbInfo = useContext(DBContext);
    const [dropList, setDropList] = useState<boolean>(false);

    const listaEstado = ["No Iniciado", "En Proceso", "Terminado"];

    // obtenemos el index de la tarea para extraerla del array
    const { index } = useParams();
    const numero_tarea = index != undefined ? parseInt(index) : 0
    let data = tarea_data[numero_tarea]
    const [description, setDescription] = useState<string>(data.descripcion);

    // calcular los dias restantes
    const dia_actual = new Date().getDate();
    const dia_vencimiento = new Date(data.fecha_vencimiento).getDate();
    const dias_restantes = dia_vencimiento - dia_actual;

    // seteamos los items que se mostraran en la lista de asignados
    const lista_personas = dropList ? data.personas : data.personas.slice(0, 4);
    const onDropListChange = () => {
        setDropList(!dropList);
    }

    // agreagmos el titulo de la tarea al contexto
    //dbInfo?.setTituloTarea(data.titulo);
    //

    const onClickModifyDescription = async () => {
        await ModificarDescripcion(data, description);

    }

    const textareaHandleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setDescription(event.target.value);
    }

    const estadoHandleChange = async (event: React.ChangeEvent<HTMLSelectElement>) => {
        await ModificarEstado(data, event.target.value);
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
                <p><span className="font-bold">Estado de la Tarea:</span>
                <select onChange={estadoHandleChange} name="estado" className="w-32 order-4 bg-white border-2 border-[#d6d6d6] rounded-md text-[#7a7a7a]" defaultValue={data.estado}>
                    { listaEstado.map((value, index) => (
                        <option key={index} value={value.toLowerCase()} >{value}</option>
                    ))}
                </select></p>
            </div>
            <div className="flex flex-col justify-center  order-[13] col-span-2 w-1/2">
                <textarea className="w-full h-5/6 bg-white border-2 border-[#d6d6d6] rounded-md text-[#7a7a7a]" defaultValue={ data.descripcion } onChange={textareaHandleChange}/>
                { data.descripcion != description &&
                    <button className="order-[14] bg-[#444444] w-36 h-8 rounded-md text-white" onClick={onClickModifyDescription}>Modificar</button>
                }
            </div>
        </div>
    );
}


export { TaskDetailContainer }
