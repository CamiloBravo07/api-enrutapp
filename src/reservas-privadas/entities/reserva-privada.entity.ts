import {
  Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn,
} from 'typeorm';
import { Usuario } from '../../usuarios/entities/usuario.entity';
import { Ruta } from '../../rutas/entities/ruta.entity';
import { Vehiculo } from '../../vehiculos/entities/vehiculo.entity';
import { Conductor } from '../../conductores/entities/conductor.entity';
import { MetodoPago } from '../../metodo-pago/entities/metodo-pago.entity';

@Entity('ReservasPrivadas')
export class ReservaPrivada {
  @PrimaryGeneratedColumn()
  idReserva: number;

  @ManyToOne(() => Usuario, { eager: true })
  @JoinColumn({ name: 'idUsuario' })
  usuario: Usuario;

  @ManyToOne(() => Ruta, { eager: true })
  @JoinColumn({ name: 'idRuta' })
  ruta: Ruta;

  @ManyToOne(() => Vehiculo, { eager: true })
  @JoinColumn({ name: 'idVehiculo' })
  vehiculo: Vehiculo;

  @ManyToOne(() => Conductor, { eager: true })
  @JoinColumn({ name: 'idConductor' })
  conductor: Conductor;

  @Column({ type: 'date', nullable: true })
  fecha: string;

  @Column({ type: 'time', nullable: true })
  horaSalida: string;

  @Column({ type: 'int', nullable: true })
  cantidadPersonas: number;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  precioTotal: number;

  @ManyToOne(() => MetodoPago, { nullable: true, eager: true })
  @JoinColumn({ name: 'idMetodoPago' })
  metodoPago: MetodoPago;

  @Column({ nullable: true })
  estadoReserva: string;

  @Column({ type: 'datetime', nullable: true })
  fechaReserva: Date;
}