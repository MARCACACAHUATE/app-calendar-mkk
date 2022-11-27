import React, { useContext } from "react";
import { ModalContext } from '../../context/ModalContext';

function HeaderExportButton(){

    const modalInfo = useContext(ModalContext);

    const onOpenModalHandler = () => {
        modalInfo?.setModalExportOpen(!modalInfo.modalExportOpen);
    }


    return (
        <div className="border-b-2 border-b-[#aaaaaa]">
            <button className="text-sm bg-[#ebebeb] h-6 w-28 mx-4" onClick={onOpenModalHandler}>Export</button>
        </div>
    );
}

export { HeaderExportButton }
