import React, { useContext } from "react";
import { Route, Routes, Link } from 'react-router-dom';
import { CalendarContext } from '../../context/CalendarContext';
import { TareaDetailListContainer } from './TareaDetailListContainer';
import { TareasFechaHeader } from './TareasFechaHeader';
import { TareasFiltrosContainer } from './TareasFiltrosContainer';

function TareasDetailContainer(){
    // Contextos
    const calendarInfo = useContext(CalendarContext);
    
    console.log(calendarInfo?.dateSelected);
    
    return (
            <div className="bg-white w-[40rem] rounded-lg p-4 text-[#444444]">
                <TareasFechaHeader fecha={calendarInfo?.dateSelected ||  ''}
                                   meses_list={calendarInfo?.calendar}/>
                <div className="flex flex-row w-full">
                    <TareaDetailListContainer fecha_cell={calendarInfo?.dateSelected || ''}/>
                    <TareasFiltrosContainer />
                </div>
            </div>
    );
}


export { TareasDetailContainer }
