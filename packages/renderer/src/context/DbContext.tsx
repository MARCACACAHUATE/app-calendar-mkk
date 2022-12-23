import React, { useEffect, useState, createContext } from "react";
import { GetTareas, Tareas, CreateTarea } from '#preload';
import { DBInfo } from '../../types/types';

const DBContext = createContext<DBInfo | null>(null);

function DBProvider(props: any){

    const [tareasList, setTareasList ]= useState<Array<Tareas>>([]);
    const [filtro, setFiltros] = useState<string>('todos');
    const [tituloTarea, setTituloTarea] = useState<string>("")

    useEffect(()=>{ 
        GetTareas().then((value)=>{ setTareasList(value)})
    }, []);

    return (
        <DBContext.Provider value={{
                tareasList,
                setTareasList,
                CreateTarea,
                filtro, 
                setFiltros,
                tituloTarea,
                setTituloTarea
            }}>
            {props.children}
        </DBContext.Provider>
    );

}

export { DBProvider, DBContext } 
