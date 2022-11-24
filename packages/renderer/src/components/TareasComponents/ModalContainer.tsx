import React from "react";
import * as ReactDOM from 'react-dom';
import './ModalContainer.css'

function ModalContainer(props: any){
    return ReactDOM.createPortal(
        <div className="ModalBackground">
            {props.children}
        </div>,
        document.getElementById("modal")
    );
}


export { ModalContainer };
