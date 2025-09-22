import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Turno } from './entities/turno.entity';
import { TurnosService } from './turnos.service';
import { TurnosController } from './turnos.controller';
import { ConductoresModule } from '../conductores/conductores.module';
import { VehiculosModule } from '../vehiculos/vehiculos.module';
import { RutasModule } from '../rutas/rutas.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Turno]),
    ConductoresModule,
    VehiculosModule,
    RutasModule,
  ],
  controllers: [TurnosController],
  providers: [TurnosService],
  exports: [TurnosService],
})
export class TurnosModule {}
