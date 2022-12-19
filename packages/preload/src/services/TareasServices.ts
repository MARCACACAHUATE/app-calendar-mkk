import { Like } from 'typeorm'
import { AppDataSource } from '../dataSource';
import { Tareas } from '../models/tareas';
import { Personas } from "../models/personas";
import { Create_or_get_persona } from "../services/PersonasServices";


interface TareasData {
    estado: string
    titulo: string
    prioridad: string
    descripcion: string
    fecha_inicio: string
    fecha_vencimiento: string
    asignados: Array<string>
}

export async function GetTareas() {
    const tareasRepository = AppDataSource.getRepository(Tareas);
    const tareas_list = await tareasRepository.find({
        relations:{
            personas: true
        }
    });
    return tareas_list
}

export async function GetTareasFilter(fecha_vencimiento: string){
    const tareasRepository = AppDataSource.getRepository(Tareas);
    const tareas_filter = await tareasRepository.find({
        relations: {
            personas: true
        },
        where:{
        fecha_vencimiento: Like(`${fecha_vencimiento}%`),
        }
    });

    return tareas_filter;
}

export async function CreateTarea(data: TareasData) {
    const tareasRepository = AppDataSource.getRepository(Tareas);

    // Traemos o creamos a las personas asignadas en la DB
    const lista_personas: Personas[] = []

    for(let i = 0; i < data.asignados.length; i++){
        let persona = await Create_or_get_persona(data.asignados[i])
        lista_personas.push(persona)
    }
    
    // creamos la tarea con la relacion a las personas asignadas
    const tarea = new Tareas();
    tarea.estado = data.estado;
    tarea.titulo = data.titulo;
    tarea.prioridad = data.prioridad;
    tarea.descripcion = data.descripcion;
    tarea.fecha_inicio = data.fecha_inicio;
    tarea.fecha_vencimiento = data.fecha_vencimiento;
    tarea.personas = lista_personas;

    await tareasRepository.save(tarea);

    return tarea;
}
