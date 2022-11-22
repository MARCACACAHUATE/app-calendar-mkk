import React from "react";
import { BrowserRouter } from "react-router-dom";
import { CalendarContainer } from './components/CalendarComponents/CalendarContainer';
import { NavBarContainer } from './components/NavBarComponents/NavBarContainer';
import { HeaderContainer } from './components/HeaderComponents/HeaderContainer';
import { HeaderExportButton } from './components/HeaderComponents/HeaderExportButton';
import { CalendarProvider } from './context/CalendarContext';
import { ModalContainer } from './components/TareasComponents/ModalContainer';
import { TareasDetailContainer } from './components/TareasComponents/TareasDetailContainer';

function App(){

    return (
        <BrowserRouter>
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
                <ModalContainer>
                        <TareasDetailContainer />
                </ModalContainer>
            </CalendarProvider>
        </div>
        </BrowserRouter>
    );
}


export default App;
