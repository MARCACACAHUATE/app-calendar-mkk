/**
 * @module preload
 */
import "reflect-metadata";
import { contextBridge, ipcRenderer } from "electron";

// Services
export { CreateCalendar } from './genDate';
export { GetTareas,
         CreateTarea, 
         GetTareasFilter,
         ModificarDescripcion,
         ModificarEstado,
         GetTareasDateRange
} from './services/TareasServices';
export { CreatePersona } from "./services/PersonasServices";
export { ExportToExcel } from "./services/ExportServices";

// Models
export { Tareas } from './models/tareas';
export { Personas } from "./models/personas";

contextBridge.exposeInMainWorld('myApi', {
    selectFolder: () => ipcRenderer.invoke('dialog:openDirectory')
})
