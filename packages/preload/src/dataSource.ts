import { DataSource } from 'typeorm';
import { Tareas } from './models/tareas';

export const AppDataSource = new DataSource({
    type: 'sqlite',
    database: "calendarDB.db",
    logging: true,
    synchronize: true,
    entities: [Tareas]
});
