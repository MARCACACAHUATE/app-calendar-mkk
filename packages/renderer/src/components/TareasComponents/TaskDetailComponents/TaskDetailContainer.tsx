import React from "react";
import { useParams } from 'react-router-dom';


function TaskDetailContainer(){
    const { tasKHeader } = useParams();
    return (
        <div>
            <p>Tareas Detail A al verga compa</p>
            <p>{ tasKHeader }</p>
        </div>
    );
}


export { TaskDetailContainer }
