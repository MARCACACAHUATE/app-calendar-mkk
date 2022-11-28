import React, { useContext } from "react";
import { BrowserRouter } from "react-router-dom";
import { CalendarContainer } from './components/CalendarComponents/CalendarContainer';
import { NavBarContainer } from './components/NavBarComponents/NavBarContainer';
import { HeaderContainer } from './components/HeaderComponents/HeaderContainer';
import { HeaderExportButton } from './components/HeaderComponents/HeaderExportButton';
import { CalendarProvider } from './context/CalendarContext';
import { ModalContext } from './context/ModalContext';
import { ModalContainer } from './components/TareasComponents/ModalContainer';
import { ModalTareasDetail } from './components/ModalesComponents/ModalTareasDetail';
import { ModalExport } from './components/ModalesComponents/ModalExport';
import { TareasDetailContainer } from './components/TareasComponents/TareasDetailContainer';
import { CreateTareaContainer } from './components/TareasComponents/CreateTareaComponents/CreateTareaContainer';
import { ExportContainer } from './components/ExportComponents/ExportContainer';
import { DBProvider } from './context/DbContext';


function AppIU(){

    const modalInfo = useContext(ModalContext);

    return (
        <BrowserRouter>
        <div>
            <DBProvider>
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
                { !!modalInfo?.isOpen &&
                <ModalContainer>
                        <CreateTareaContainer />
                </ModalContainer>
                }

                { !!modalInfo?.modalTareasOpen &&
                <ModalTareasDetail>
                    <TareasDetailContainer />
                </ModalTareasDetail>
                }

                { !!modalInfo?.modalExportOpen &&
                <ModalExport>
                    <ExportContainer />
                </ModalExport>
                }
            </CalendarProvider>
            </DBProvider>
        </div>
        </BrowserRouter>
    );
}


export { AppIU };
