import React, { useContext } from "react";
import { ExportForm } from './ExportForm';
import { ModalContext } from '../../context/ModalContext';


function ExportContainer() {

    const modalInfo = useContext(ModalContext);

    const onClickCloseModal = () => {
        modalInfo?.setModalExportOpen(false);
    }

    return (
        <div className="bg-[#f7f6f6] w-96 rounded-lg p-5 fixed grid justify-center">
            <button onClick={onClickCloseModal} className="absolute right-3 top-1"></button> 
            <h2 className="text-center font-bold m-2">Exportar Tareas</h2>
            <ExportForm />
        </div>
    );
}


export { ExportContainer }
