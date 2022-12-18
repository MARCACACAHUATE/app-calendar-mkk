import { Column, PrimaryGeneratedColumn, BaseEntity, Entity } from "typeorm";


@Entity("personas")
export class Personas extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number

    @Column("text")
    name: string

    @Column("text")
    email: string

}
