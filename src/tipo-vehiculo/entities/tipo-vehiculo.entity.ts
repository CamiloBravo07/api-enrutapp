import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('TipoVehiculo')
export class TipoVehiculo {
  @PrimaryGeneratedColumn()
  idTipoVehiculo: number;

  @Column({ unique: true })
  nombreTipoVehiculo: string;
}