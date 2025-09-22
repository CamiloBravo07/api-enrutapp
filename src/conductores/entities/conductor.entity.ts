import {
  Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn,
} from 'typeorm';
import { Usuario } from '../../usuarios/entities/usuario.entity';
import { Arl } from '../../arl/entities/arl.entity';
import { Eps } from '../../eps/entities/eps.entity';

@Entity('Conductores')
export class Conductor {
  @PrimaryGeneratedColumn()
  idConductor: number;

  @ManyToOne(() => Usuario, { eager: true })
  @JoinColumn({ name: 'idUsuario' })
  usuario: Usuario;

  @Column({ unique: true })
  licencia: string;

  @Column({ nullable: true })
  categoriaLicencia: string;

  @Column({ nullable: true, type: 'date' })
  fechaVencimientoLicencia: string;

  @ManyToOne(() => Arl, { nullable: true, eager: true })
  @JoinColumn({ name: 'idArl' })
  arl: Arl;

  @ManyToOne(() => Eps, { nullable: true, eager: true })
  @JoinColumn({ name: 'idEps' })
  eps: Eps;

  @Column({ nullable: true })
  fondoPensiones: string;

  @Column({ default: true })
  estado: boolean;
}