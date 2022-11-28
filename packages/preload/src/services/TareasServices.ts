import { AppDataSource } from '../dataSource';
import { Tareas } from '../models/tareas';

AppDataSource.initialize();

interface TareasData {
    estado: string
    titulo: string
    prioridad: string
    descripcion: string
    fecha_inicio: string
    fecha_vencimiento: string
}

export async function GetTareas() {
    const tareasRepository = AppDataSource.getRepository(Tareas);
    const tareas_list = await tareasRepository.find();
    return tareas_list
}

export function CreateTarea(data: TareasData) {
    const tarea = new Tareas();
    tarea.estado = data.estado;
    tarea.titulo = data.titulo;
    tarea.prioridad = data.prioridad;
    tarea.descripcion = data.descripcion;
    tarea.fecha_inicio = data.fecha_inicio;
    tarea.fecha_vencimiento = data.fecha_vencimiento;
    tarea.save();

    return tarea;
}
