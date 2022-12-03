import React, { useContext } from "react";
import { ModalContext } from '../../context/ModalContext';
import { CalendarContext } from '../../context/CalendarContext';


interface Props {
    fecha_celda: string 
}

function BotonCrear(props: Props){

    const modalInfo = useContext(ModalContext);
    const calendarInfo = useContext(CalendarContext);

    const onClickHandler = () =>{
        modalInfo?.setIsOpen(!modalInfo?.isOpen);
        calendarInfo?.setDateSelected(props.fecha_celda);
    };

    return (
        <div className="grid justify-items-end">
            <button onClick={onClickHandler}>+</button>
        </div> 
    );
}

export { BotonCrear }
