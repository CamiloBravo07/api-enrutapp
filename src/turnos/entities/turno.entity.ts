import {
  Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn,
} from 'typeorm';
import { Conductor } from '../../conductores/entities/conductor.entity';
import { Vehiculo } from '../../vehiculos/entities/vehiculo.entity';
import { Ruta } from '../../rutas/entities/ruta.entity';

@Entity('Turnos')
export class Turno {
  @PrimaryGeneratedColumn()
  idTurno: number;

  @ManyToOne(() => Conductor, { eager: true })
  @JoinColumn({ name: 'idConductor' })
  conductor: Conductor;

  @ManyToOne(() => Vehiculo, { eager: true })
  @JoinColumn({ name: 'idVehiculo' })
  vehiculo: Vehiculo;

  @ManyToOne(() => Ruta, { eager: true })
  @JoinColumn({ name: 'idRuta' })
  ruta: Ruta;

  @Column({ type: 'date', nullable: true })
  fecha: string;

  @Column({ type: 'time', nullable: true })
  horaSalida: string;

  @Column({ type: 'time', nullable: true })
  horaLlegadaEstimada: string;

  @Column({ type: 'datetime', nullable: true })
  fechaHoraLlegadaReal: Date;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  precioTurno: number;

  @Column({ type: 'int', nullable: true })
  asientosDisponibles: number;

  @Column({ nullable: true })
  estado: string;
}