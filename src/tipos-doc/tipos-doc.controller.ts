import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { TiposDocService } from './tipos-doc.service';
import { TiposDoc } from './entities/tipo-doc.entity';

@Controller('tipos-doc')
export class TiposDocController {
  constructor(private readonly tiposDocService: TiposDocService) {}

  @Get()
  findAll() {
    return this.tiposDocService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tiposDocService.findOne(+id);
  }

  @Post()
  create(@Body() data: Partial<TiposDoc>) {
    return this.tiposDocService.create(data);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() data: Partial<TiposDoc>) {
    return this.tiposDocService.update(+id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tiposDocService.delete(+id);
  }
}
