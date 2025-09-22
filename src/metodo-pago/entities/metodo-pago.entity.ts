import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('MetodoPago')
export class MetodoPago {
  @PrimaryGeneratedColumn()
  idMetodoPago: number;

  @Column({ unique: true })
  nombreMetodo: string;
}