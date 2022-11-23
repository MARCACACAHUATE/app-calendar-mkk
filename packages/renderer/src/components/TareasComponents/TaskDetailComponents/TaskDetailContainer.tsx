import React, { useContext } from "react";
import { useParams } from 'react-router-dom';
import { ModalContext } from '../../../context/ModalContext';


function TaskDetailContainer(){
    const { tasKHeader } = useParams();
    const modalInfo = useContext(ModalContext);

    const onClickHandler = () => {
        modalInfo?.setIsOpen(false);
    }

    return (
        <div className="flex flex-col">
            <button onClick={onClickHandler}>X</button>
            <p>{ tasKHeader }</p>
            <span>Fecha de Inicio: </span>
            <span>Fecha de Vencimiento: </span>
            <span>Asignado a: </span>
            <span>Dias Restantes: </span>
            <span>Nivel de Prioridad: </span>
            <span>Estado de la Tarea: </span>
        </div>
    );
}


export { TaskDetailContainer }
