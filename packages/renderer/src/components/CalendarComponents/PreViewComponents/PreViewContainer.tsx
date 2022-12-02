import React, { useContext } from "react";
import { PreViewItem } from "./PreViewItem";
import { ModalContext } from '../../../context/ModalContext';
import { Tareas } from "#preload";


const titulos = ["tarea que tengo que hacer", "Pendientes de mañana", "hola", "arriba las chivas", "mañana no hay clases", "Mañana si hay clases"];

interface Props {
    lista_tareas?: Array<Tareas>
}

function PreViewContainer(props: Props) {

    const modalInfo = useContext(ModalContext);
    const preview_list = props.lista_tareas?.slice(0, 3);
    const total_tareas = props.lista_tareas != undefined ? props.lista_tareas?.length : 0;

    const onClickOpenModal = () => {
        modalInfo?.setModalTareasOpen(!modalInfo?.modalTareasOpen);
    }

    return (
        <div onClick={onClickOpenModal} className="flex flex-col h-full">

            {preview_list?.map((value, index) => (
                <PreViewItem key={index} titulo_tarea={value.titulo} />
            ))}

            { total_tareas > 3 && (
            <p className="text-[#232323] text-[8px] text-end">+ {total_tareas - 3} restantes</p>
            )}

        </div>
    );
}


export { PreViewContainer }
