import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ruta } from './entities/ruta.entity';

@Injectable()
export class RutasService {
  constructor(@InjectRepository(Ruta) private repo: Repository<Ruta>) {}
  findAll() { return this.repo.find(); }
  findOne(id:number) { return this.repo.findOne({ where: { idRuta: id } }); }
  create(data: Partial<Ruta>) { return this.repo.save(this.repo.create(data)); }
  async update(id:number, data: Partial<Ruta>) { await this.repo.update(id, data); return this.findOne(id); }
  delete(id:number) { return this.repo.delete(id); }
}
