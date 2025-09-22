import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EstadoEncomienda } from './entities/estado-encomienda.entity';
import { EstadosEncomiendaService } from './estados-encomienda.service';
import { EstadosEncomiendaController } from './estados-encomienda.controller';

@Module({
  imports: [TypeOrmModule.forFeature([EstadoEncomienda])],
  controllers: [EstadosEncomiendaController],
  providers: [EstadosEncomiendaService],
  exports: [EstadosEncomiendaService],
})
export class EstadosEncomiendaModule {}
