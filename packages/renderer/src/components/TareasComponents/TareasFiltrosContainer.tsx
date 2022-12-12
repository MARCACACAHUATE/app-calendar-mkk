import React from "react";
import { FiltrosItems } from './FiltrosItems';

function TareasFiltrosContainer(){
    return(
        <div className="flex-none w-1/2 p-2 border-0 border-l border-[#aaaaaa]">
            <h2 className="text-center">Filtros</h2>
            <FiltrosItems />
        </div>
    );
}


export { TareasFiltrosContainer }
