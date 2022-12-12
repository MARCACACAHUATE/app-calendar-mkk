import React, { useContext } from "react";
import { DBContext } from "../../context/DbContext";



function FiltrosItems(){
    
    // Seteamos el filtro en el contexto
    const dbInfo = useContext(DBContext);
    const onHandleFiltroChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        dbInfo?.setFiltros(event.target.value)
    }

    return (
        <div className="flex flex-row justify-between">
            <p>Estado</p>
            <select onChange={onHandleFiltroChange} name="select" className="w-48 bg-white border-2 border-[#d6d6d6] rounded-md text-[#7a7a7a] font-nerd">
              <option defaultChecked value="todos">Todos</option>
              <option value="no iniciado">No Iniciado</option>
              <option value="en proceso">En Proceso</option>
              <option value="terminado">Termiando</option>
            </select>
        </div>
    );
}

export { FiltrosItems }
