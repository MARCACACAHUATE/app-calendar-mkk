import React from "react";
import { TareaDetailListContainer } from './TareaDetailListContainer';
import { TareasFechaHeader } from './TareasFechaHeader';
import { TareasFiltrosContainer } from './TareasFiltrosContainer';

function TareasDetailContainer(){
    return (
            <div className="h-96 w-[40rem] bg-red-900 rounded-lg">
                <TareasFechaHeader />
                <div className="flex flex-row">
                    <TareaDetailListContainer />
                    <TareasFiltrosContainer />
                </div>
            </div>
    );
}


export { TareasDetailContainer }
