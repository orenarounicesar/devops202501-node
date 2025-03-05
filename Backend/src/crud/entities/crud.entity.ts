import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('datos_personales')
export class Crud {
  @PrimaryGeneratedColumn()
  codigo: number;

  @Column()
  tipo_id: string;

  @Column()
  id: string;

  @Column()
  apellido_1: string;

  @Column()
  apellido_2: string;

  @Column()
  nombre_1: string;

  @Column()
  nombre_2: string;

  @Column()
  sexo: string;

  @Column()
  fecha_de_nacimiento: Date;
}
