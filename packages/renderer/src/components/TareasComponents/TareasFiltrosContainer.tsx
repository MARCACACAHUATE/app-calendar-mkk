import React from "react";
import { FiltrosItems } from './FiltrosItems';

function TareasFiltrosContainer(){
    return(
        <div className="flex-none w-1/2 p-2">
            <h2 className="text-center">Filtros</h2>
            <FiltrosItems />
        </div>
    );
}


export { TareasFiltrosContainer }
