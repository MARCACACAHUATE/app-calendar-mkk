import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import { ModalContext } from '../../context/ModalContext';
import { DBContext } from "../../context/DbContext";
import { DateCalendarInfo } from '../../../types/types';

interface Props {
    fecha: string
    meses_list: Array<DateCalendarInfo>
}

function TareasFechaHeader(props: Props){

    const modalInfo = useContext(ModalContext);
    const dbInfo = useContext(DBContext);

    const onClickCloseModal = () => {
        modalInfo?.setModalTareasOpen(false);
        dbInfo?.setTituloTarea("");
    }

    const fecha = props.fecha.split("-");
    const mes = props.meses_list[parseInt(fecha[1]) - 1]
    const numero_dia = fecha[2].slice(0, 2);

    return (
        <div className="flex flex-row justify-between font-bold">
            <div className="flex flex-row">
                <Link to="/"><p className="text-xl mx-2"></p></Link>
                <h2>Fecha: {`${numero_dia} de ${mes.month_name} del ${fecha[0]}`}</h2>
            </div>
            <Link to="/"><button onClick={onClickCloseModal}></button></Link>
        </div>
    );
}

export { TareasFechaHeader }
