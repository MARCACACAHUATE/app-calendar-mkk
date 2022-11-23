import React from "react";
import { AppIU } from './AppIU';
import { ModalProvider } from './context/ModalContext';

function App() {
    return (
        <ModalProvider>
            <AppIU />
        </ModalProvider>
    );
}


export { App }
