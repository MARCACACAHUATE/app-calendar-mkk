import React from "react";
import { CalendarContainer } from './components/CalendarComponents/CalendarContainer';
import { CalendarProvider } from './context/CalendarContext';

function App(){

    return (
        <div>
            <CalendarProvider>
                <CalendarContainer />
            </CalendarProvider>
        </div>
    );
}


export default App;
