import React, { useContext } from "react";
import { BotonCrear } from './BotonCrear';
import { PreViewContainer } from './PreViewComponents/PreViewContainer';

interface Props {
    number_day: number
    today: boolean
}

const titulos = ["tarea que tengo que hacer", "Pendientes de mañana", "hola"];

function CellDay(props: Props) {


    const today_mark = `text-center bg-black text-white rounded-md`


    return (
        <div className="box-border h-32 w-32 p-1 rounded-md flex flex-col justify-between border-2 border-gray-200" >
            <BotonCrear/>
            { titulos.map((value, index) => (
                <PreViewContainer key={index} titulo_tarea={value}/>
            ))}
            <h3 className={props.today ? today_mark : "text-center"}>{props.number_day}</h3>
        </div>
    );
}

export { CellDay };
