import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Conductor } from './entities/conductor.entity';
import { ConductoresService } from './conductores.service';
import { ConductoresController } from './conductores.controller';
import { UsuariosModule } from '../usuarios/usuarios.module';
import { ArlModule } from '../arl/arl.module';
import { EpsModule } from '../eps/eps.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Conductor]),
    UsuariosModule,
    ArlModule,
    EpsModule,
  ],
  controllers: [ConductoresController],
  providers: [ConductoresService],
  exports: [ConductoresService],
})
export class ConductoresModule {}
