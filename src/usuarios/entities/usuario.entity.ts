import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Roles } from '../../roles/entities/rol.entity';
import { TiposDoc } from '../../tipos-doc/entities/tipo-doc.entity';

@Entity('Usuarios')
export class Usuario {
  @PrimaryGeneratedColumn()
  idUsuario: number;

  @ManyToOne(() => Roles, { eager: true })
  @JoinColumn({ name: 'idRol' })
  rol: Roles;

  @ManyToOne(() => TiposDoc, { eager: true })
  @JoinColumn({ name: 'tipoDoc' })
  tipoDoc: TiposDoc;

  @Column({ unique: true })
  numDocumento: string;

  @Column()
  nombre: string;

  @Column({ nullable: true })
  telefono: string;

  @Column({ unique: true })
  correo: string;

  @Column()
  contrasena: string;

  @Column({ nullable: true })
  direccion: string;

  @Column({ nullable: true })
  ciudad: string;

  @Column({ default: true })
  estado: boolean;
}
