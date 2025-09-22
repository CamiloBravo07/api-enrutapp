import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Marca } from './entities/marca.entity';

@Injectable()
export class MarcasService {
  constructor(@InjectRepository(Marca) private repo: Repository<Marca>) {}
  findAll() { return this.repo.find(); }
  findOne(id:number) { return this.repo.findOne({ where: { idMarca: id } }); }
  create(data: Partial<Marca>) { return this.repo.save(this.repo.create(data)); }
  async update(id:number, data: Partial<Marca>) { await this.repo.update(id, data); return this.findOne(id); }
  delete(id:number) { return this.repo.delete(id); }
}
