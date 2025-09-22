import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Arl } from './entities/arl.entity';
import { ArlService } from './arl.service';
import { ArlController } from './arl.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Arl])],
  controllers: [ArlController],
  providers: [ArlService],
  exports: [ArlService],
})
export class ArlModule {}
