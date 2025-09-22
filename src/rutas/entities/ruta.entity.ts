import {
  Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn,
} from 'typeorm';
import { Ubicacion } from '../../ubicaciones/entities/ubicacion.entity';

@Entity('Rutas')
export class Ruta {
  @PrimaryGeneratedColumn()
  idRuta: number;

  @ManyToOne(() => Ubicacion, { eager: true })
  @JoinColumn({ name: 'idOrigen' })
  origen: Ubicacion;

  @ManyToOne(() => Ubicacion, { eager: true })
  @JoinColumn({ name: 'idDestino' })
  destino: Ubicacion;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  distancia: number;

  @Column({ nullable: true, length: 100 })
  observaciones: string;

  @Column({ nullable: true, type: 'time' })
  tiempoEstimado: string;

  @Column({ nullable: true, type: 'decimal', precision: 10, scale: 2 })
  precioBase: number;

  @Column({ default: true })
  estado: boolean;
}