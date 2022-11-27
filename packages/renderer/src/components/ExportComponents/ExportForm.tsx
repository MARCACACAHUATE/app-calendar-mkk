import React from "react";


function ExportForm() {
    return (
        <form className="grid justify-items-center text-center">
            <label className="">Fecha Inicial</label>
            <input name="fecha_inicial" type="datetime-local" className="text-sm w-56 bg-white border-2 border-[#d6d6d6] rounded-md text-[#7a7a7a] mb-2"/>

            <label>Fecha Final</label>
            <input name="fecha_final" type="datetime-local" className="text-sm w-56 bg-white border-2 border-[#d6d6d6] rounded-md text-[#7a7a7a] mb-2"/>

            <input className="order-[14] bg-[#444444] w-36 h-8 rounded-md text-white" type="submit" value="Exportar" />
        </form>
    );
}


export { ExportForm }
