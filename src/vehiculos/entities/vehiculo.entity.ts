import {
  Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn,
} from 'typeorm';
import { TipoVehiculo } from '../../tipo-vehiculo/entities/tipo-vehiculo.entity';
import { Marca } from '../../marcas/entities/marca.entity';

@Entity('Vehiculos')
export class Vehiculo {
  @PrimaryGeneratedColumn()
  idVehiculo: number;

  @ManyToOne(() => TipoVehiculo, { eager: true })
  @JoinColumn({ name: 'idTipoVehiculo' })
  tipoVehiculo: TipoVehiculo;

  @ManyToOne(() => Marca, { eager: true })
  @JoinColumn({ name: 'idMarca' })
  marca: Marca;

  @Column({ unique: true })
  placa: string;

  @Column({ nullable: true })
  linea: string;

  @Column({ nullable: true, length: 4 })
  modelo: string;

  @Column({ nullable: true })
  color: string;

  @Column({ nullable: true, unique: true, length: 17 })
  vin: string;

  @Column({ nullable: true, type: 'int' })
  capacidadPasajeros: number;

  @Column({ nullable: true, type: 'decimal', precision: 10, scale: 2 })
  capacidadCarga: number;

  @Column({ nullable: true, type: 'date' })
  soatVencimiento: string;

  @Column({ nullable: true, type: 'date' })
  tecnomecanicaVencimiento: string;

  @Column({ nullable: true, type: 'date' })
  seguroVencimiento: string;

  @Column({ nullable: true })
  fotoVehiculo: string;

  @Column({ nullable: true })
  estado: string;
}