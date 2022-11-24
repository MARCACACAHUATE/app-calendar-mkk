import React from "react";
import * as ReactDOM from 'react-dom'
import '../TareasComponents/ModalContainer.css';

function ModalTareasDetail(props:any){
    return ReactDOM.createPortal(
        <div className="ModalBackground">
            {props.children}
        </div>,
        document.getElementById('modal-tareadetail')
    );
}


export { ModalTareasDetail }
