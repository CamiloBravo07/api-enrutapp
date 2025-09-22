import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Encomienda } from './entities/encomienda.entity';

@Injectable()
export class EncomiendasService {
  constructor(@InjectRepository(Encomienda) private repo: Repository<Encomienda>) {}
  findAll() { return this.repo.find(); }
  findOne(id:number) { return this.repo.findOne({ where: { idEncomienda: id } }); }
  create(data: Partial<Encomienda>) { return this.repo.save(this.repo.create(data)); }
  async update(id:number, data: Partial<Encomienda>) { await this.repo.update(id, data); return this.findOne(id); }
  delete(id:number) { return this.repo.delete(id); }
}
