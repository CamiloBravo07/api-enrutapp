import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('Eps')
export class Eps {
  @PrimaryGeneratedColumn()
  idEps: number;

  @Column({ unique: true })
  nombreEps: string;
}