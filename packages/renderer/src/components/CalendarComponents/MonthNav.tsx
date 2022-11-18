import React, { useContext, useState } from "react";
//import { BotonNavegacion } from './BotonNavegacion';
import { CalendarContext } from '../../context/CalendarContext';

interface Props {
    setMonthIndex: any,
    monthIndex: number
    }

function MonthNav({setMonthIndex, monthIndex}: Props){

    //const [monthIndex, setMonthIndex] = useState<number>(0);


    const onNextMonthHandler = () =>{
        if(monthIndex < 11 ){
            setMonthIndex(monthIndex + 1);
            console.log("por debajo del 11 " + monthIndex);
            return;
        }
        setMonthIndex(0);
        console.log("Se paso del 11 " + monthIndex);
    }

    const onPreviousMonthHandler = () =>{
        if(monthIndex > 0){
            setMonthIndex(monthIndex - 1);
            console.log("Todabia no baja del 0 " + monthIndex);
            return;
        }
        setMonthIndex(11);
        console.log("Mas abajo del 0 " + monthIndex);
    }
    
    const calendar = useContext(CalendarContext);
    let monthsName;
    let weekdaysName;

    if(calendar != undefined){
        monthsName = calendar.calendar;
        weekdaysName = calendar.week_days_name;
    }

    return (
        <div className="box-border w-full h-7 bg-gray-400 flex justify-between">
            <button  onClick={onPreviousMonthHandler}> - </button>
            <span>{ monthsName[monthIndex].month_name }, {monthsName[0].year}</span>
            <button  onClick={onNextMonthHandler}> + </button>
        </div>
    );
}

export { MonthNav }
