import React from "react";



function FiltrosItems(){
    return (
        <div className="flex flex-row justify-between">
            <p>Estado</p>
            <select name="select" className="w-48 bg-white border-2 border-[#d6d6d6] rounded-md text-[#7a7a7a] font-nerd">
              <option value="value1">No Iniciado</option>
              <option value="value2">En Proceso</option>
              <option value="value3">Termiando</option>
            </select>
        </div>
    );
}

export { FiltrosItems }
