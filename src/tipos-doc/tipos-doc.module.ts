import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TiposDoc } from './entities/tipo-doc.entity';
import { TiposDocService } from './tipos-doc.service';
import { TiposDocController } from './tipos-doc.controller';

@Module({
  imports: [TypeOrmModule.forFeature([TiposDoc])],
  controllers: [TiposDocController],
  providers: [TiposDocService],
  exports: [TiposDocService],
})
export class TiposDocModule {}
