import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('Ubicaciones')
export class Ubicacion {
  @PrimaryGeneratedColumn()
  idUbicacion: number;

  @Column({ nullable: true })
  nombreUbicacion: string;

  @Column({ nullable: true })
  direccion: string;

  @Column({ type: 'decimal', precision: 10, scale: 8, nullable: true })
  latitud: number;

  @Column({ type: 'decimal', precision: 11, scale: 8, nullable: true })
  longitud: number;
}