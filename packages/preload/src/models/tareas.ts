import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, ManyToMany, JoinTable } from 'typeorm';
import { Personas } from "./personas";

@Entity("tareas")
export class Tareas extends BaseEntity {
    @PrimaryGeneratedColumn()
    Id: number

    @Column("text")
    titulo: string

    @Column("text")
    fecha_inicio: string

    @Column("text")
    fecha_vencimiento: string

    @Column("text")
    prioridad: string

    @Column("text")
    estado: string

    @Column("text")
    descripcion: string 

    @ManyToMany(() => Personas)
    @JoinTable()
    personas: Personas[]
}
