import React, { useContext } from "react";
import { ModalContext } from '../../context/ModalContext';


function TareasFechaHeader(){

    const modalInfo = useContext(ModalContext);

    const onClickCloseModal = () => {
        modalInfo?.setModalTareasOpen(false);
    }


    return (
        <div className="flex flex-row justify-between px-4">
            <h2>Fecha: 21 de Noviembre del 2022</h2>
            <button onClick={onClickCloseModal}>X</button>
        </div>
    );
}

export { TareasFechaHeader }
