import React from "react";
import { MonthNav } from './MonthNav';
import { CellContainer } from './CellContainer';
import { DaysContainer } from './DaysContainer';

function CalendarContainer(){
    return (
       <div className="grid justify-items-center border-2 border-gray-400 rounded-md w-11/12 m-4">
        <MonthNav/>
        <DaysContainer />
        <CellContainer />
       </div> 
    )
}

export { CalendarContainer };
