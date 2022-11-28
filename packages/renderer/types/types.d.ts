import { Tareas, CreateTarea } from "#preload"

export interface DateCalendarInfo {
    year: number
    month_name: string 
    daysOfMonth: number
    start_on: number
}

export interface CalendarInfo {
    calendar: Array<DateCalendarInfo>
    week_days_name: Array<string>
    actualDay: number
    actualMonth: number,
}


export interface ModalInfo {
    isOpen: boolean
    setIsOpen: any
    modalTareasOpen: boolean
    setModalTareasOpen: any
    modalExportOpen: boolean
    setModalExportOpen: any
}

export interface DBInfo {
    tareasList: Array<Tareas>
    setTareasList: any
    CreateTarea: any
}

export interface TareaPendiente {
    titulo: string
    prioridad: string 
    estado: string
    fecha_inicio: string
    fecha_vencimiento: string
    asignado: Array<string>
    descripcion: string
}
