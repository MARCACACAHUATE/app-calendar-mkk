import React, { useState } from "react";
import { ExportToExcel } from "#preload";

interface Filtros {
    fecha_inicial: string
    fecha_final: string
}

function ExportForm() {

    const [filtros, setFiltros] = useState<Filtros>({
        fecha_inicial: "",
        fecha_final: ""
    });
    const [dir, setDir] = useState<string>("");
    const [disableButton, setDisableButton] = useState<boolean>(false);

    const createExportHandle = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        ExportToExcel(filtros.fecha_inicial, filtros.fecha_final, dir);
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFiltros({
            ...filtros,
            [event.target.name]: event.target.value 
        });
    }

    const dirHandle = async (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        const path = await window.myApi.selectFolder()
        setDir(path);
    }

    const buttonEnable = "bg-[#444444] w-36 h-8 rounded-md text-white";
    const buttonDisable = "bg-red-800 w-36 h-8 rounded-md text-white"

    return (
        <form onSubmit={createExportHandle} className="grid justify-items-center text-center">
            <label className="">Fecha Inicial</label>
            <input onChange={handleChange} name="fecha_inicial" type="datetime-local" className="text-sm w-56 bg-white border-2 border-[#d6d6d6] rounded-md text-[#7a7a7a] mb-2"/>

            <label>Fecha Final</label>
            <input onChange={handleChange} name="fecha_final" type="datetime-local" className="text-sm w-56 bg-white border-2 border-[#d6d6d6] rounded-md text-[#7a7a7a] mb-2"/>

            <div className="flex flex-row w-full">
                <button className="bg-[#ebebeb] h-6 mr-2 w-10 rounded-md text-[#606060] text-xl" onClick={dirHandle}></button>
                <p className="text-sm w-56 h-6 bg-white border-2 border-[#d6d6d6] rounded-md text-[#7a7a7a] mb-2">{dir}</p>
            </div>
            <input  className={dir != undefined && dir.length > 0 ? buttonEnable : buttonDisable} type="submit" value="Exportar" disabled={dir != undefined && dir.length > 0 ? false : true}/>
        </form>
    );
}


export { ExportForm }
