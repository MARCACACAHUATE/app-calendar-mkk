import React from "react";
import * as ReactDOM from 'react-dom';


function ModalContainer(props: any){
    return ReactDOM.createPortal(
        props.children,
        document.getElementById("modal")
    );
}


export { ModalContainer };
