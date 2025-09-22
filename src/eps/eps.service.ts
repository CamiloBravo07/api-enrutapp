import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Eps } from './entities/eps.entity';

@Injectable()
export class EpsService {
  constructor(@InjectRepository(Eps) private repo: Repository<Eps>) {}
  findAll() { return this.repo.find(); }
  findOne(id:number) { return this.repo.findOne({ where: { idEps: id } }); }
  create(data: Partial<Eps>) { return this.repo.save(this.repo.create(data)); }
  async update(id:number, data: Partial<Eps>) { await this.repo.update(id, data); return this.findOne(id); }
  delete(id:number) { return this.repo.delete(id); }
}