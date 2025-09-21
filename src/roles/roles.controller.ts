import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { RolesService } from './roles.service';
import { Roles } from './entities/rol.entity';

@Controller('roles')
export class RolesController {
  constructor(private readonly rolesService: RolesService) {}

  @Get()
  findAll() {
    return this.rolesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.rolesService.findOne(+id);
  }

  @Post()
  create(@Body() data: Partial<Roles>) {
    return this.rolesService.create(data);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() data: Partial<Roles>) {
    return this.rolesService.update(+id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rolesService.delete(+id);
  }
}
