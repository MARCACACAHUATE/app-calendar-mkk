import React, { createContext } from "react";
import { CreateCalendar } from '#preload';
import { CalendarInfo } from '../../types/types'

const CalendarContext = createContext<CalendarInfo | null>(null);

function CalendarProvider(props){

    const {calendar, week_days_name} = CreateCalendar();

    return(
        <CalendarContext.Provider value={{
                calendar,
                week_days_name
            }}>
            {props.children}
        </CalendarContext.Provider>
    );
}


export { CalendarContext, CalendarProvider }
