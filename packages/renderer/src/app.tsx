import React from "react";
import { CalendarContainer } from './components/CalendarComponents/CalendarContainer';
import { NavBarContainer } from './components/NavBarComponents/NavBarContainer';
import { HeaderContainer } from './components/HeaderComponents/HeaderContainer';
import { HeaderExportButton } from './components/HeaderComponents/HeaderExportButton';
import { CalendarProvider } from './context/CalendarContext';

function App(){

    return (
        <div>
            <CalendarProvider>
                <div className="grid grid-cols-[64px_minmax(900px,_1fr)_100px]">
                    <div className="">
                        <NavBarContainer />
                    </div>                
                    <div className="col-start-2 col-span-full">
                        <HeaderContainer />
                        <HeaderExportButton /> 
                        <CalendarContainer />
                    </div>
                </div>
            </CalendarProvider>
        </div>
    );
}


export default App;
