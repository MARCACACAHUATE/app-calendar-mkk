import React, { useEffect, useState, createContext } from "react";
import { GetTareas, Tareas, CreateTarea } from '#preload';
import { DBInfo } from '../../types/types';

const DBContext = createContext<DBInfo | null>(null);

function DBProvider(props: any){

    const [tareasList, setTareasList ]= useState<Array<Tareas>>([]);

    useEffect(()=>{ 
        GetTareas().then((value)=>{ setTareasList(value)})
    }, []);

    return (
        <DBContext.Provider value={{
                tareasList,
                setTareasList,
                CreateTarea
            }}>
            {props.children}
        </DBContext.Provider>
    );

}

export { DBProvider, DBContext } 
