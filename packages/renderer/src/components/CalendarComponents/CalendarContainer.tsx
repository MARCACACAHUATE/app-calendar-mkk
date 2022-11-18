import React, {useState} from "react";
import { MonthNav } from './MonthNav';
import { CellContainer } from './CellContainer';
import { DaysContainer } from './DaysContainer';

function CalendarContainer(){
    const [monthIndex, setMonthIndex] = useState<number>(0);
    
    return (
       <div className="grid justify-items-center border-2 border-gray-400 rounded-md w-11/12 m-4">
        <MonthNav setMonthIndex={setMonthIndex}
                  monthIndex={monthIndex}
        />
        <DaysContainer />
        <CellContainer monthIndex={monthIndex}/>
       </div> 
    )
}

export { CalendarContainer };
