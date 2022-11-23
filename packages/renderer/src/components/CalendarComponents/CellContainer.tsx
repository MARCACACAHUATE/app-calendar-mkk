import React, { useContext } from "react";
import { CalendarContext } from '../../context/CalendarContext';
import { CellDay } from './CellDay';

interface Props {
    monthIndex: number
}

function CellContainer({monthIndex}: Props){
    
    const calendarInfo = useContext(CalendarContext);


    const days = calendarInfo?.calendar.map(({daysOfMonth}) =>{
        return [...Array(daysOfMonth).keys()];
    });

    return (
        <div className="grid grid-cols-7 gap-1 justify-items-center p2 w-full">

            {days[monthIndex].map((index)=>(
                <div key={index} className={index === 0 ? `col-start-${calendarInfo?.calendar[monthIndex].start_on + 1}` : ``}>
                    <CellDay number_day={days[monthIndex][index] + 1}
                            today={index + 1 == calendarInfo?.actualDay && monthIndex == calendarInfo.actualMonth}/>
                </div>
            ))}

        </div>
    );
}

export { CellContainer }



