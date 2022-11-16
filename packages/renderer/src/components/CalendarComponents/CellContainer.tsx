import React from "react";
import { CellDay } from './CellDay';


function CellContainer(){
    return (
        <div className="grid grid-cols-7 gap-1 justify-items-center p2 w-full">
            <CellDay />
            <CellDay />
            <CellDay />
            <CellDay />
            <CellDay />
            <CellDay />
            <CellDay />
            <CellDay />
        </div>
    );
}

export { CellContainer }
