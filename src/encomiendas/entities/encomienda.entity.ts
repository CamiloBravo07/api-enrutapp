import {
  Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn,
} from 'typeorm';
import { Usuario } from '../../usuarios/entities/usuario.entity';
import { Ubicacion } from '../../ubicaciones/entities/ubicacion.entity';
import { Turno } from '../../turnos/entities/turno.entity';
import { EstadoEncomienda } from '../../estados-encomienda/entities/estado-encomienda.entity';

@Entity('Encomiendas')
export class Encomienda {
  @PrimaryGeneratedColumn()
  idEncomienda: number;

  @ManyToOne(() => Usuario, { nullable: true, eager: true })
  @JoinColumn({ name: 'idRemitenteUsuario' })
  remitenteUsuario: Usuario;

  @Column({ nullable: true })
  nombreRemitente: string;

  @Column({ nullable: true })
  telefonoRemitente: string;

  @ManyToOne(() => Ubicacion, { nullable: true, eager: true })
  @JoinColumn({ name: 'idOrigen' })
  origen: Ubicacion;

  @ManyToOne(() => Usuario, { nullable: true, eager: true })
  @JoinColumn({ name: 'idDestinatarioUsuario' })
  destinatarioUsuario: Usuario;

  @Column({ nullable: true })
  nombreDestinatario: string;

  @Column({ nullable: true })
  telefonoDestinatario: string;

  @ManyToOne(() => Ubicacion, { nullable: true, eager: true })
  @JoinColumn({ name: 'idDestino' })
  destino: Ubicacion;

  @Column({ nullable: true, type: 'text' })
  descripcion: string;

  @Column({ nullable: true, type: 'decimal', precision: 10, scale: 2 })
  peso: number;

  @Column({ nullable: true })
  dimensiones: string;

  @Column({ nullable: true, type: 'decimal', precision: 10, scale: 2 })
  precioEnvio: number;

  @Column({ nullable: true, unique: true })
  numeroSeguimiento: string;

  @Column({ nullable: true, type: 'datetime' })
  fechaEnvio: Date;

  @Column({ nullable: true, type: 'datetime' })
  fechaEntregaEstimada: Date;

  @ManyToOne(() => Turno, { nullable: true, eager: true })
  @JoinColumn({ name: 'idTurno' })
  turno: Turno;

  @Column({ nullable: true })
  fotoEntrega: string;

  @ManyToOne(() => EstadoEncomienda, { nullable: true, eager: true })
  @JoinColumn({ name: 'estadoEncomienda' })
  estadoEncomienda: EstadoEncomienda;
}