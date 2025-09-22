import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Vehiculo } from './entities/vehiculo.entity';
import { VehiculosService } from './vehiculos.service';
import { VehiculosController } from './vehiculos.controller';
import { TipoVehiculoModule } from '../tipo-vehiculo/tipo-vehiculo.module';
import { MarcasModule } from '../marcas/marcas.module';

@Module({
  imports: [TypeOrmModule.forFeature([Vehiculo]), TipoVehiculoModule, MarcasModule],
  controllers: [VehiculosController],
  providers: [VehiculosService],
  exports: [VehiculosService],
})
export class VehiculosModule {}
