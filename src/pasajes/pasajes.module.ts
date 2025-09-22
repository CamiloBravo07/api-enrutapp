import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pasaje } from './entities/pasaje.entity';
import { PasajesService } from './pasajes.service';
import { PasajesController } from './pasajes.controller';
import { UsuariosModule } from '../usuarios/usuarios.module';
import { TurnosModule } from '../turnos/turnos.module';
import { MetodoPagoModule } from '../metodo-pago/metodo-pago.module';

@Module({
  imports: [TypeOrmModule.forFeature([Pasaje]), UsuariosModule, TurnosModule, MetodoPagoModule],
  providers: [PasajesService],
  controllers: [PasajesController],
  exports: [PasajesService],
})
export class PasajesModule {}
