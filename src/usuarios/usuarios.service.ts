import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from './entities/usuario.entity';

@Injectable()
export class UsuariosService {
  constructor(
    @InjectRepository(Usuario)
    private readonly usuariosRepo: Repository<Usuario>,
  ) {}

  findAll() {
    return this.usuariosRepo.find();
  }

  findOne(id: number) {
    return this.usuariosRepo.findOne({ where: { idUsuario: id } });
  }

  create(data: Partial<Usuario>) {
    const nuevo = this.usuariosRepo.create(data);
    return this.usuariosRepo.save(nuevo);
  }

  async update(id: number, data: Partial<Usuario>) {
    await this.usuariosRepo.update(id, data);
    return this.findOne(id);
  }

  delete(id: number) {
    return this.usuariosRepo.delete(id);
  }
}