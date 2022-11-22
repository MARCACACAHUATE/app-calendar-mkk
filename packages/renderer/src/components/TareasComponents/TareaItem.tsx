import React from "react";

interface Props {
    titulo: string
}

function TareaItem({titulo}: Props){
    return (
        <div className="flex flex-row">
            <p className="w-48 h-7 m-2 bg-emerald-800 rounded-lg">{titulo}</p>
            <p className="w-24 h-7 m-2 bg-emerald-800 rounded-lg">Terminado</p>
        </div>
    );
}


export { TareaItem }
