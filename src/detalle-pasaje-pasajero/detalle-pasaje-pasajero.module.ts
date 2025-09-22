import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DetallePasajePasajero } from './entities/detalle-pasaje-pasajero.entity';
import { DetallePasajePasajeroService } from './detalle-pasaje-pasajero.service';
import { DetallePasajePasajeroController } from './detalle-pasaje-pasajero.controller';
import { PasajesModule } from '../pasajes/pasajes.module';
import { TiposDocModule } from '../tipos-doc/tipos-doc.module';

@Module({
  imports: [TypeOrmModule.forFeature([DetallePasajePasajero]), PasajesModule, TiposDocModule],
  controllers: [DetallePasajePasajeroController],
  providers: [DetallePasajePasajeroService],
  exports: [DetallePasajePasajeroService],
})
export class DetallePasajePasajeroModule {}
