import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Roles } from './entities/rol.entity';

@Injectable()
export class RolesService {
  constructor(
    @InjectRepository(Roles)
    private readonly rolesRepo: Repository<Roles>,
  ) {}

  findAll() {
    return this.rolesRepo.find();
  }

  findOne(id: number) {
    return this.rolesRepo.findOne({ where: { idRol: id } });
  }

  create(data: Partial<Roles>) {
    const nuevo = this.rolesRepo.create(data);
    return this.rolesRepo.save(nuevo);
  }

  async update(id: number, data: Partial<Roles>) {
    await this.rolesRepo.update(id, data);
    return this.findOne(id);
  }

  delete(id: number) {
    return this.rolesRepo.delete(id);
  }
}
