import React, { useContext } from "react";
import { ModalContext } from '../../context/ModalContext';

function BotonCrear(){

    const modalInfo = useContext(ModalContext);

    const onClickHandler = () =>{
        modalInfo?.setIsOpen(!modalInfo?.isOpen);
        console.log(modalInfo?.isOpen)
    };

    return (
        <div className="grid justify-items-end">
            <button onClick={onClickHandler}>+</button>
        </div> 
    );
}

export { BotonCrear }
