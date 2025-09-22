import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ubicacion } from './entities/ubicacion.entity';

@Injectable()
export class UbicacionesService {
  constructor(@InjectRepository(Ubicacion) private repo: Repository<Ubicacion>) {}
  findAll() { return this.repo.find(); }
  findOne(id:number) { return this.repo.findOne({ where: { idUbicacion: id } }); }
  create(data: Partial<Ubicacion>) { return this.repo.save(this.repo.create(data)); }
  async update(id:number, data: Partial<Ubicacion>) { await this.repo.update(id, data); return this.findOne(id); }
  delete(id:number) { return this.repo.delete(id); }
}
