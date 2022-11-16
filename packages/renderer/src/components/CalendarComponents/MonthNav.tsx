import React from "react";
import { BotonNavegacion } from './BotonNavegacion'


interface Props {
    monthName: string
}

function MonthNav({ monthName }: Props){
    return (
        <div className="box-border w-full h-7 bg-gray-400 flex justify-between">
            <BotonNavegacion botonText="<"/>
            <span>{ monthName }</span>
            <BotonNavegacion botonText=">"/>
        </div>
    );
}

export { MonthNav }
