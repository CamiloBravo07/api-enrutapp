import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('EstadosEncomienda')
export class EstadoEncomienda {
  @PrimaryGeneratedColumn()
  idEstadoEncomienda: number;

  @Column({ unique: true })
  nombreEstado: string;

  @Column({ nullable: true })
  descripcion: string;
}