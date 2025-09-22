import {
  Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn,
} from 'typeorm';
import { Usuario } from '../../usuarios/entities/usuario.entity';
import { Turno } from '../../turnos/entities/turno.entity';
import { MetodoPago } from '../../metodo-pago/entities/metodo-pago.entity';

@Entity('Pasajes')
export class Pasaje {
  @PrimaryGeneratedColumn()
  idPasaje: number;

  @ManyToOne(() => Usuario, { eager: true })
  @JoinColumn({ name: 'idUsuario' })
  usuario: Usuario;

  @ManyToOne(() => Turno, { eager: true })
  @JoinColumn({ name: 'idTurno' })
  turno: Turno;

  @Column({ type: 'datetime', nullable: true })
  fechaCompra: Date;

  @ManyToOne(() => MetodoPago, { nullable: true, eager: true })
  @JoinColumn({ name: 'idMetodoPago' })
  metodoPago: MetodoPago;

  @Column({ nullable: true })
  estado: string;
}
