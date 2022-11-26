import React, { useContext, useState } from "react";
import { ModalContext } from '../../../context/ModalContext';
import { TareaPendiente } from '../../../../types/types';

interface TareaPendienteForm extends TareaPendiente {
    persona: string
    lista_personas: string
}

const tareas:Array<TareaPendiente> = [];

function TaskCreationForm(){
    const listaPrioridad = ["Bajo", "Mediano", "Alto"];
    const listaEstado = ["No Iniciado", "En Proceso", "Terminado"];

    const [ inputValues, setInputValues ] = useState<TareaPendienteForm>({
        titulo: '',
        prioridad: listaPrioridad[0].toLowerCase(),
        estado: listaEstado[0].toLowerCase(),
        fecha_inicio: '',
        fecha_vencimiento: '',
        asignado: [],
        descripcion: '',
        persona: '',
        lista_personas: ''
    });

    // Contexto para abrir/cerrar el modal
    const modalInfo = useContext(ModalContext);

    // Cerrar el modal
    const onCloseModal = () =>{
        modalInfo?.setIsOpen(false);
    }

    // Agregando personas a la lista de asignados
    const AddAsignadoNuevo = (event: any) =>{
        event.preventDefault();
        inputValues.asignado.push(inputValues.persona);
        console.log(inputValues.asignado);
        inputValues.lista_personas += `${inputValues.persona} \n`; 
        inputValues.persona = '';
    }

    // Guarda los datos la tarea
    const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        tareas.push(inputValues)
        console.log(tareas);
    }

    // Maneja los datos del formulario
    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setInputValues({
            ...inputValues,
            [event.target.name]: event.target.value
        })
        console.log(inputValues);
    }


    return (
        <form onSubmit={onSubmitHandler} className="grid grid-cols-2 gap-2 font-nerd font-bold">

            <label className="col-start-1 order-1 font-nerd font-bold">Prioridad</label>
            <select onChange={handleChange} name="prioridad" className="w-32 order-3 bg-white border-2 border-[#d6d6d6] rounded-md text-[#7a7a7a] font-nerd">
                { listaPrioridad.map((value, index)=>(
                    <option key={index} value={value.toLowerCase()}>{value}</option>
                ))}
            </select>

            <label className="order-2">Estado</label>
            <select onChange={handleChange} name="estado" className="w-32 order-4 bg-white border-2 border-[#d6d6d6] rounded-md text-[#7a7a7a]">
                { listaEstado.map((value, index) => (
                    <option key={index} value={value.toLowerCase()}>{value}</option>
                ))}
            </select>

            <label className="order-5">Fecha de Inicio</label>
            <input value={inputValues.fecha_inicio} name="fecha_inicio" onChange={handleChange} className="w-32 order-7 bg-white border-2 border-[#d6d6d6] rounded-md text-[#7a7a7a]" type="datetime-local"/>

            <label className="order-6">Fecha de Vencimiento</label>
            <input value={inputValues.fecha_vencimiento} name="fecha_vencimiento" onChange={handleChange} className="w-32 order-8 bg-white border-2 border-[#d6d6d6] rounded-md text-[#7a7a7a]" type="datetime-local"/>

            <div className="flex flex-row justify-between order-9 col-span-2">
                <label>Titulo: </label>
                <input name="titulo" value={inputValues.titulo} onChange={handleChange} className="w-3/4 bg-white border-2 border-[#d6d6d6] rounded-md text-[#7a7a7a]" type="text" />

            </div>

            <div className="flex flex-row justify-between order-10 col-span-2">
                <label className="">Asignado a</label>
                <input name="persona" value={inputValues.persona} onChange={handleChange} className="w-48 bg-white border-2 border-[#d6d6d6] rounded-md text-[#7a7a7a]" type="text" />
                <input className="bg-[#444444] rounded-lg pl-1 pr-1 text-white text-sm" type="submit" value="Add" onClick={AddAsignadoNuevo} />
            </div>
            <textarea value={inputValues.lista_personas} name="lista_personas" readOnly={true} className="mt-3 order-11 col-span-2 bg-white border-2 border-[#d6d6d6] rounded-md text-[#7a7a7a]"/>

            <label  className="order-12 col-span-2">Descripcion de la tarea</label>
            <textarea name="descripcion" value={inputValues.descripcion} onChange={handleChange} className="order-[13] col-span-2 bg-white border-2 border-[#d6d6d6] rounded-md text-[#7a7a7a]"/>

            <input className="order-[14] bg-[#444444] w-36 h-8 rounded-md text-white" type="submit" value="Guardar"/>
            <input className="order-[15] bg-[#ebebeb] w-36 h-8 rounded-md text-[#606060]" type="button" value="Cancelar" onClick={onCloseModal}/>

        </form>
    );
}


export { TaskCreationForm }
