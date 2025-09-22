import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReservaPrivada } from './entities/reserva-privada.entity';
import { ReservasPrivadasService } from './reservas-privadas.service';
import { ReservasPrivadasController } from './reservas-privadas.controller';
import { UsuariosModule } from '../usuarios/usuarios.module';
import { RutasModule } from '../rutas/rutas.module';
import { VehiculosModule } from '../vehiculos/vehiculos.module';
import { ConductoresModule } from '../conductores/conductores.module';
import { MetodoPagoModule } from '../metodo-pago/metodo-pago.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([ReservaPrivada]),
    UsuariosModule, RutasModule, VehiculosModule, ConductoresModule, MetodoPagoModule,
  ],
  controllers: [ReservasPrivadasController],
  providers: [ReservasPrivadasService],
  exports: [ReservasPrivadasService],
})
export class ReservasPrivadasModule {}