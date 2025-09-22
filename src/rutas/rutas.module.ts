import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ruta } from './entities/ruta.entity';
import { RutasService } from './rutas.service';
import { RutasController } from './rutas.controller';
import { UbicacionesModule } from '../ubicaciones/ubicaciones.module';

@Module({
  imports: [TypeOrmModule.forFeature([Ruta]), UbicacionesModule],
  controllers: [RutasController],
  providers: [RutasService],
  exports: [RutasService],
})
export class RutasModule {}
