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
        <form onSubmit={onSubmitHandler} className="grid grid-cols-2 gap-2">

            <label className="col-start-1 order-1">Prioridad</label>
            <select onChange={handleChange} name="prioridad" className="w-32 order-3">
                { listaPrioridad.map((value, index)=>(
                    <option key={index} value={value.toLowerCase()}>{value}</option>
                ))}
            </select>

            <label className="order-2">Estado</label>
            <select onChange={handleChange} name="estado" className="w-32 order-4">
                { listaEstado.map((value, index) => (
                    <option key={index} value={value.toLowerCase()}>{value}</option>
                ))}
            </select>

            <label className="order-5">Fecha de Inicio</label>
            <input value={inputValues.fecha_inicio} name="fecha_inicio" onChange={handleChange} className="w-32 order-7" type="datetime-local"/>

            <label className="order-6">Fecha de Vencimiento</label>
            <input value={inputValues.fecha_vencimiento} name="fecha_vencimiento" onChange={handleChange} className="w-32 order-8" type="datetime-local"/>

            <div className="flex flex-row justify-between order-9 col-span-2">
                <label>Titulo: </label>
                <input name="titulo" value={inputValues.titulo} onChange={handleChange} className="w-3/4" type="text" />

            </div>

            <div className="flex flex-row justify-between order-10 col-span-2">
                <label className="">Asignado a</label>
                <input name="persona" value={inputValues.persona} onChange={handleChange} className="w-48" type="text" />
                <input className="bg-gray-400 rounded-lg pl-1 pr-1" type="submit" value="Add" onClick={AddAsignadoNuevo} />
            </div>
            <textarea value={inputValues.lista_personas} name="lista_personas" readOnly={true} className="mt-3 order-12 col-span-2"/>

            <label  className="order-13 col-span-2">Descripcion</label>
            <textarea name="descripcion" value={inputValues.descripcion} onChange={handleChange} className="order-[14] col-span-2"/>

            <input className="order-[15]" type="submit" value="Guardar"/>
            <input className="order-[16]" type="button" value="Cancelar" onClick={onCloseModal}/>

        </form>
    );
}


export { TaskCreationForm }
