import React, { useContext } from "react";
import { DBContext } from '../../context/DbContext';
import { CalendarContext } from '../../context/CalendarContext';
import { BotonCrear } from './BotonCrear';
import { PreViewContainer } from './PreViewComponents/PreViewContainer';

interface Props {
    number_month: number
    number_day: number
    today: boolean
}


function CellDay(props: Props) {

    const dbInfo = useContext(DBContext);
    const calendarInfo = useContext(CalendarContext);

    const today_mark = `text-center bg-black text-white rounded-md`
    const tareas_list = dbInfo?.tareasList.filter((value) => {
        const dia_vencimiento = new Date(value.fecha_vencimiento).getDate();
        const mes_vencimiento = new Date(value.fecha_vencimiento).getMonth() + 1;

        return dia_vencimiento == props.number_day && mes_vencimiento == props.number_month;
    })

    // Seteamos la fecha del calendario en el CalendarContext
    const fecha_string = `${calendarInfo?.calendar[0].year}-${props.number_month}-${props.number_day}`
    const fecha_celda = new Date(fecha_string).toISOString().slice(0, -8);    

    return (
        <div className="box-border h-36 w-32 p-1 rounded-md flex flex-col justify-between border-2 border-gray-200" >
            <BotonCrear fecha_celda={fecha_celda}/>
            <PreViewContainer lista_tareas={tareas_list != undefined ? tareas_list : []}
                              fecha_celda={fecha_celda}/>
            <h3 className={props.today ? today_mark : "text-center"}>{props.number_day}</h3>
        </div>
    );
}

export { CellDay };
