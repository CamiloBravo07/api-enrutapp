import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('Marcas')
export class Marca {
  @PrimaryGeneratedColumn()
  idMarca: number;

  @Column({ unique: true })
  nombreMarca: string;
}