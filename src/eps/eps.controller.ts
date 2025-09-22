import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { EpsService } from './eps.service';

@Controller('eps')
export class EpsController {
  constructor(private svc: EpsService) {}
  @Get() findAll() { return this.svc.findAll(); }
  @Get(':id') findOne(@Param('id') id: string) { return this.svc.findOne(+id); }
  @Post() create(@Body() dto: Partial<any>) { return this.svc.create(dto); }
  @Put(':id') update(@Param('id') id: string, @Body() dto: Partial<any>) { return this.svc.update(+id, dto); }
  @Delete(':id') remove(@Param('id') id: string) { return this.svc.delete(+id); }
}