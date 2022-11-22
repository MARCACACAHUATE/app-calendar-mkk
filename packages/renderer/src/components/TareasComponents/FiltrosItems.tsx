import React from "react";



function FiltrosItems(){
    return (
        <div className="flex flex-row">
            <p>Estado</p>
            <select name="select">
              <option value="value1">No Iniciado</option>
              <option value="value2">En Proceso</option>
              <option value="value3">Termiando</option>
            </select>
        </div>
    );
}

export { FiltrosItems }
