import React, { useState, createContext } from "react";
import { ModalInfo } from '../../types/types'

const ModalContext = createContext<ModalInfo | null>(null);

function ModalProvider(props: any){

    // Estado para mostrar las ventanas modales
    const [ isOpen, setIsOpen ] = useState<boolean>(false);


    return (
        <ModalContext.Provider value={{
                isOpen,
                setIsOpen
            }}>
            {props.children}
        </ModalContext.Provider>
    );

}


export { ModalContext, ModalProvider };