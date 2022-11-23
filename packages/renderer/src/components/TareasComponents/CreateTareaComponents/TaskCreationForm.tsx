import React, { useContext } from "react";
import { ModalContext } from '../../../context/ModalContext';

function TaskCreationForm(){

    const modalInfo = useContext(ModalContext);

    const onClickHandler = () =>{
        modalInfo?.setIsOpen(false);
    }

    const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log("Tarea Creada");
    }


    return (
        <form onSubmit={onSubmitHandler} className="grid grid-cols-2 gap-2">

            <label className="col-start-1 order-1">Prioridad</label>
            <select name="prioridad" className="w-32 order-3">
                <option value="bajo">Bajo</option>
                <option value="mediano">Mediano</option>
                <option value="alto">Alto</option>
            </select>

            <label className="order-2">Estado</label>
            <select name="prioridad" className="w-32 order-4">
                <option value="no iniciado">No Iniciado</option>
                <option value="en proceso">En Proceso</option>
                <option value="terminado">Terminado</option>
            </select>

            <label className="order-5">Fecha de Inicio</label>
            <input className="w-32 order-7" type="datetime-local"/>

            <label className="order-6">Fecha de Vencimiento</label>
            <input className="w-32 order-8" type="datetime-local"/>

            <label className="order-9">Asignado a</label>
            <input className="w-32 order-10" type="text" />
            <textarea readOnly={true} className="mt-3 order-11 col-span-2"/>

            <label className="order-12 col-span-2">Descripcion</label>
            <textarea className="order-[13] col-span-2"/>

            <input className="order-[14]" type="submit" value="Guardar"/>
            <input className="order-[15]" type="button" value="Cancelar" onClick={onClickHandler}/>

        </form>
    );
}


export { TaskCreationForm }
