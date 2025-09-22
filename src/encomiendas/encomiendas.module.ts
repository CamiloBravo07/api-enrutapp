import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Encomienda } from './entities/encomienda.entity';
import { EncomiendasService } from './encomiendas.service';
import { EncomiendasController } from './encomiendas.controller';
import { UsuariosModule } from '../usuarios/usuarios.module';
import { UbicacionesModule } from '../ubicaciones/ubicaciones.module';
import { TurnosModule } from '../turnos/turnos.module';
import { EstadosEncomiendaModule } from '../estados-encomienda/estados-encomienda.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Encomienda]),
    UsuariosModule, UbicacionesModule, TurnosModule, EstadosEncomiendaModule,
  ],
  controllers: [EncomiendasController],
  providers: [EncomiendasService],
  exports: [EncomiendasService],
})
export class EncomiendasModule {}
