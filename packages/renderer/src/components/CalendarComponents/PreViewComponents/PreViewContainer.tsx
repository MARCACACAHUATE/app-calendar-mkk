import React, { useContext } from "react";
import { ModalContext } from '../../../context/ModalContext';


interface Props {
    titulo_tarea: string
}

function limitar_caracteres(elemento: string, max_chars: number): string{
    if(elemento.length > max_chars){
        return `${elemento.substring(0, max_chars)}...`;
    }
    return elemento;
}

function PreViewContainer(props: Props) {

    const modalInfo = useContext(ModalContext);

    const onClickOpenModal = () => {
        modalInfo?.setModalTareasOpen(!modalInfo?.modalTareasOpen);
    }


    return (
        <button onClick={onClickOpenModal}  className="bg-teal-500 rounded-lg py-[2px] px-[5px] my-[1px]">
            <p className="text-white text-xs">{ limitar_caracteres(props.titulo_tarea, 12) }</p>
        </button>
    );
}


export { PreViewContainer }
