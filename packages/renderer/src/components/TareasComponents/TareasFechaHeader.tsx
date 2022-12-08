import React, { useContext } from "react";
import { ModalContext } from '../../context/ModalContext';
import { DateCalendarInfo } from '../../../types/types';

interface Props {
    fecha: string
    meses_list: Array<DateCalendarInfo>
}

function TareasFechaHeader(props: Props){

    const modalInfo = useContext(ModalContext);

    const onClickCloseModal = () => {
        modalInfo?.setModalTareasOpen(false);
    }

    const fecha = props.fecha.split("-");
    const mes = props.meses_list[parseInt(fecha[1]) - 1]
    const numero_dia = fecha[2].slice(0, 2);

    return (
        <div className="flex flex-row justify-between font-bold">
            <h2>Fecha: {`${numero_dia} de ${mes.month_name} del ${fecha[0]}`}</h2>
            <button onClick={onClickCloseModal}></button>
        </div>
    );
}

export { TareasFechaHeader }
