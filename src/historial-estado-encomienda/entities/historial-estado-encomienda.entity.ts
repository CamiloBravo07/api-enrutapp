import {
  Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn,
} from 'typeorm';
import { Encomienda } from '../../encomiendas/entities/encomienda.entity';
import { EstadoEncomienda } from '../../estados-encomienda/entities/estado-encomienda.entity';

@Entity('HistorialEstadoEncomienda')
export class HistorialEstadoEncomienda {
  @PrimaryGeneratedColumn()
  idHistorial: number;

  @ManyToOne(() => Encomienda, { onDelete: 'CASCADE', eager: true })
  @JoinColumn({ name: 'idEncomienda' })
  encomienda: Encomienda;

  @ManyToOne(() => EstadoEncomienda, { eager: true })
  @JoinColumn({ name: 'idEstadoEncomienda' })
  estadoEncomienda: EstadoEncomienda;

  @Column({ type: 'datetime', nullable: true })
  fechaHoraCambio: Date;

  @Column({ nullable: true })
  ubicacionActual: string;

  @Column({ nullable: true, type: 'text' })
  observaciones: string;
}