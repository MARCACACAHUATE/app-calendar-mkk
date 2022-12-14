import React, { createContext, useState } from "react";
import { CreateCalendar } from '#preload';
import { CalendarInfo } from '../../types/types'

const CalendarContext = createContext<CalendarInfo | null>(null);

function CalendarProvider(props: any){

    // Estado del dia seleccionado en el calendario
    const [dateSelected, setDateSelected] = useState<string>('string');

    // Genera la info para renderizar el calendario principal
    const {calendar, week_days_name} = CreateCalendar(2022, 'es');

    // Dia y Mes actual
    const actualDay = new Date().getDate();
    const actualMonth = new Date().getMonth();


    return(
        <CalendarContext.Provider value={{
                calendar,
                week_days_name,
                actualDay,
                actualMonth,
                dateSelected,
                setDateSelected
            }}>
            {props.children}
        </CalendarContext.Provider>
    );
}


export { CalendarContext, CalendarProvider }
