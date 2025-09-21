import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('Roles')
export class Roles {
  @PrimaryGeneratedColumn()
  idRol: number;

  @Column({ unique: true })
  nombreRol: string;

  @Column({ nullable: true })
  descripcion: string;

  @Column({ default: true })
  estado: boolean;

  @Column({ nullable: true })
  permisos: string;
}
