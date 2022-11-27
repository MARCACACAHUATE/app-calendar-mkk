import React from "react";
import * as ReactDOM from 'react-dom'
import '../TareasComponents/ModalContainer.css';

function ModalExport(props:any){
    return ReactDOM.createPortal(
        <div className="ModalBackground">
            {props.children}
        </div>,
        document.getElementById('modal-export')
    );
}


export { ModalExport }
