import {
  Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn,
} from 'typeorm';
import { Pasaje } from '../../pasajes/entities/pasaje.entity';
import { TiposDoc } from '../../tipos-doc/entities/tipo-doc.entity';

@Entity('DetallePasajePasajero')
export class DetallePasajePasajero {
  @PrimaryGeneratedColumn()
  idDetalle: number;

  @ManyToOne(() => Pasaje, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'idPasaje' })
  pasaje: Pasaje;

  @Column()
  nombrePasajero: string;

  @ManyToOne(() => TiposDoc, { eager: true })
  @JoinColumn({ name: 'tipoDocPasajero' })
  tipoDocPasajero: TiposDoc;

  @Column()
  numDocPasajero: string;

  @Column({ type: 'int', nullable: true })
  edadPasajero: number;

  @Column({ nullable: true })
  numeroAsiento: string;
}