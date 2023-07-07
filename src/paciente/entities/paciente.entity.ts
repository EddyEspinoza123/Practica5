import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Paciente {
    @PrimaryGeneratedColumn('uuid')
    id:string;
    
    // @Column('varchar',{unique:true})
    // identificacion:string;

    @Column('varchar',{
        unique:true
    })
    nombre:string;

    // @Column('text', {nullable:true})
    // direccion:string;

}

