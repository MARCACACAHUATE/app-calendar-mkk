import React from "react";
import { BotonCrear } from './BotonCrear';


function CellDay() {
    return (
        <div className="box-border h-32 w-32 p-1 rounded-md flex flex-col justify-between border-2 border-gray-200" >
            <BotonCrear/>
            <h3 className="text-center">Numero del dia</h3>
        </div>
    );
}

export { CellDay };
