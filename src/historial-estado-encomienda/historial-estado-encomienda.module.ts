import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HistorialEstadoEncomienda } from './entities/historial-estado-encomienda.entity';
import { HistorialEstadoEncomiendaService } from './historial-estado-encomienda.service';
import { HistorialEstadoEncomiendaController } from './historial-estado-encomienda.controller';
import { EncomiendasModule } from '../encomiendas/encomiendas.module';
import { EstadosEncomiendaModule } from '../estados-encomienda/estados-encomienda.module';

@Module({
  imports: [TypeOrmModule.forFeature([HistorialEstadoEncomienda]), EncomiendasModule, EstadosEncomiendaModule],
  controllers: [HistorialEstadoEncomiendaController],
  providers: [HistorialEstadoEncomiendaService],
  exports: [HistorialEstadoEncomiendaService],
})
export class HistorialEstadoEncomiendaModule {}