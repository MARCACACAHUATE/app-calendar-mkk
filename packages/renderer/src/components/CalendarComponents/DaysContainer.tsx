import React from "react";

function DaysContainer(){
    return (
        <div className="align-middle box-border w-full h-5 grid grid-cols-7 gap-1 justify-items-center p2">
            <h5>Domingo</h5>
            <h5>Lunes</h5>
            <h5>Martes</h5>
            <h5>Miercoles</h5>
            <h5>Jueves</h5>
            <h5>Viernes</h5>
            <h5>Sabado</h5>
        </div>
    );
}

export { DaysContainer }
