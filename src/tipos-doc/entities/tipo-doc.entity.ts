import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('TiposDoc')
export class TiposDoc {
  @PrimaryGeneratedColumn()
  idTipoDoc: number;

  @Column({ unique: true })
  nombreTipoDoc: string;
}
