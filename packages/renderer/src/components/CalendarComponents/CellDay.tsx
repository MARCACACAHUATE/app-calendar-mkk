import React, { useContext } from "react";
import { DBContext } from '../../context/DbContext';
import { BotonCrear } from './BotonCrear';
import { PreViewContainer } from './PreViewComponents/PreViewContainer';

interface Props {
    number_month: number
    number_day: number
    today: boolean
}


function CellDay(props: Props) {

    const dbInfo = useContext(DBContext);

    const today_mark = `text-center bg-black text-white rounded-md`
    const tareas_list = dbInfo?.tareasList.filter((value) => {
        const dia_vencimiento = new Date(value.fecha_vencimiento).getDate();
        const mes_vencimiento = new Date(value.fecha_vencimiento).getMonth() + 1;

        return dia_vencimiento == props.number_day && mes_vencimiento == props.number_month;
    })
    console.log("index del mes -> " + props.number_month);

    return (
        <div className="box-border h-36 w-32 p-1 rounded-md flex flex-col justify-between border-2 border-gray-200" >
            <BotonCrear/>
            <PreViewContainer lista_tareas={tareas_list != undefined ? tareas_list : []}/>
            <h3 className={props.today ? today_mark : "text-center"}>{props.number_day}</h3>
        </div>
    );
}

export { CellDay };
