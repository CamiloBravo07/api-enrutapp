import {
  Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn,
} from 'typeorm';
import { ReservaPrivada } from '../../reservas-privadas/entities/reserva-privada.entity';
import { TiposDoc } from '../../tipos-doc/entities/tipo-doc.entity';

@Entity('DetalleReservaPrivadaPasajero')
export class DetalleReservaPrivadaPasajero {
  @PrimaryGeneratedColumn()
  idDetalle: number;

  @ManyToOne(() => ReservaPrivada, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'idReserva' })
  reserva: ReservaPrivada;

  @Column()
  nombrePasajero: string;

  @ManyToOne(() => TiposDoc, { eager: true, nullable: true })
  @JoinColumn({ name: 'idTipoDoc' })
  tipoDoc: TiposDoc;

  @Column()
  numDocPasajero: string;

  @Column({ type: 'int', nullable: true })
  edadPasajero: number;
}