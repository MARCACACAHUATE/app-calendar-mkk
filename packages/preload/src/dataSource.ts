import { DataSource } from 'typeorm';
import { Tareas } from './models/tareas';
import { Personas } from "./models/personas"

const AppDataSource = new DataSource({
    type: 'sqlite',
    database: "calendarDB.db",
    logging: true,
    entities: [Tareas, Personas],
    migrations: ["src/**/migration/*.ts"]
});

AppDataSource.initialize();

export { AppDataSource }
