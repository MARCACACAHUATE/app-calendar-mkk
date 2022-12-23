/**
 * @module preload
 */
import "reflect-metadata"

// Services
export { CreateCalendar } from './genDate';
export { GetTareas,
         CreateTarea, 
         GetTareasFilter,
         ModificarDescripcion 
} from './services/TareasServices';
export { CreatePersona } from "./services/PersonasServices";

// Models
export { Tareas } from './models/tareas';
export { Personas } from "./models/personas";
