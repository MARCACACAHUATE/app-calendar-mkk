import React, { useEffect, useState, createContext } from "react";
import { GetTareas, Tareas, CreateTarea } from '#preload';
import { DBInfo } from '../../types/types';

const DBContext = createContext<DBInfo | null>(null);

function DBProvider(props: any){

    const [tareasList, setTareasList ]= useState<Array<Tareas>>([]);
    const [filtro, setFiltros] = useState<string>('todos');

    useEffect(()=>{ 
        GetTareas().then((value)=>{ setTareasList(value)})
    }, []);

    return (
        <DBContext.Provider value={{
                tareasList,
                setTareasList,
                CreateTarea,
                filtro, 
                setFiltros
            }}>
            {props.children}
        </DBContext.Provider>
    );

}

export { DBProvider, DBContext } 
