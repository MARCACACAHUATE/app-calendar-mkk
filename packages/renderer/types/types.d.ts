import { Tareas, Personas  } from "#preload"

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
    actualMonth: number
    dateSelected: string 
    setDateSelected: any
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
    filtro: string
    setFiltros: any
    tituloTarea: string
    setTituloTarea: any
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

export interface Colores {
    con_tiempo: string
    algo_tiempo: string
    sin_tiempo: string
}
