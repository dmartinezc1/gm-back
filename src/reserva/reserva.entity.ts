import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ReservaEntity {

    @PrimaryGeneratedColumn()
    id:string;

    @Column()
    correo:string;

    @Column()
    fecha: string;

    @Column()
    nombreMascota: string;

    @Column()
    tipo: string;

    @Column()
    procedimiento:string;

    @Column()
    duracion:number;

    @Column()
    estado:string;
}
