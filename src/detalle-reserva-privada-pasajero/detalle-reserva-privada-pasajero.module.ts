import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DetalleReservaPrivadaPasajero } from './entities/detalle-reserva-privada-pasajero.entity';
import { DetalleReservaPrivadaPasajeroService } from './detalle-reserva-privada-pasajero.service';
import { DetalleReservaPrivadaPasajeroController } from './detalle-reserva-privada-pasajero.controller';
import { ReservasPrivadasModule } from '../reservas-privadas/reservas-privadas.module';
import { TiposDocModule } from '../tipos-doc/tipos-doc.module';

@Module({
  imports: [TypeOrmModule.forFeature([DetalleReservaPrivadaPasajero]), ReservasPrivadasModule, TiposDocModule],
  controllers: [DetalleReservaPrivadaPasajeroController],
  providers: [DetalleReservaPrivadaPasajeroService],
  exports: [DetalleReservaPrivadaPasajeroService],
})
export class DetalleReservaPrivadaPasajeroModule {}
