import React from "react";
import { BotonCrear } from './BotonCrear';

interface Props {
    number_day: number
}

function CellDay(props: Props) {
    return (
        <div className="box-border h-32 w-32 p-1 rounded-md flex flex-col justify-between border-2 border-gray-200" >
            <BotonCrear/>
            <h3 className="text-center">{props.number_day}</h3>
        </div>
    );
}

export { CellDay };
