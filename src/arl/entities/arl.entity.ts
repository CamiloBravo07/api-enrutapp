import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('Arl')
export class Arl {
  @PrimaryGeneratedColumn()
  idArl: number;

  @Column({ unique: true })
  nombreArl: string;
}