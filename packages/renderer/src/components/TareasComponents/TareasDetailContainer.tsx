import React from "react";
import { TareaDetailListContainer } from './TareaDetailListContainer';
import { TareasFechaHeader } from './TareasFechaHeader';
import { TareasFiltrosContainer } from './TareasFiltrosContainer';

function TareasDetailContainer(){
    return (
            <div className="bg-white h-[38] w-[40rem] rounded-lg p-4 text-[#444444]">
                <TareasFechaHeader />
                <div className="flex flex-row w-full">
                    <TareaDetailListContainer />
                    <TareasFiltrosContainer />
                </div>
            </div>
    );
}


export { TareasDetailContainer }
