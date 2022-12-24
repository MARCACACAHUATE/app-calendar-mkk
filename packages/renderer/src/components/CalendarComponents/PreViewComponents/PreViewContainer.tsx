import React, { useContext } from "react";
import { PreViewItem } from "./PreViewItem";
import { ModalContext } from '../../../context/ModalContext';
import { CalendarContext } from '../../../context/CalendarContext'
import { Tareas } from "#preload";


interface Props {
    lista_tareas?: Array<Tareas>
    fecha_celda: string
}

function PreViewContainer(props: Props) {

    const modalInfo = useContext(ModalContext);
    const calendarInfo = useContext(CalendarContext);

    const preview_list = props.lista_tareas?.slice(0, 3);
    const total_tareas = props.lista_tareas != undefined ? props.lista_tareas?.length : 0;

    const onClickOpenModal = () => {
        modalInfo?.setModalTareasOpen(!modalInfo?.modalTareasOpen);
        calendarInfo?.setDateSelected(props.fecha_celda);
    }
    
    // calcular los dias restantes de cada tarea
    const diasRestantes = (fecha_vencimiento: string) => {
        const dia_actual = new Date().getDate();
        const dia_vencimiento = new Date(fecha_vencimiento).getDate();
        const dias_restantes = dia_vencimiento - dia_actual;
        return dias_restantes;
    }

    return (
        <div onClick={onClickOpenModal} className="flex flex-col h-full">

            {preview_list?.map((value, index) => (
                <PreViewItem key={index} titulo_tarea={value.titulo} dias_restantes={diasRestantes(value.fecha_vencimiento)}/>
            ))}

            { total_tareas > 3 && (
            <p className="text-[#232323] text-[8px] text-end">+ {total_tareas - 3} restantes</p>
            )}

        </div>
    );
}


export { PreViewContainer }
