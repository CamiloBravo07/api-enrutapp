import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Conductor } from './entities/conductor.entity';

@Injectable()
export class ConductoresService {
  constructor(@InjectRepository(Conductor) private repo: Repository<Conductor>) {}
  findAll() { return this.repo.find(); }
  findOne(id:number) { return this.repo.findOne({ where: { idConductor: id } }); }
  create(data: Partial<Conductor>) { return this.repo.save(this.repo.create(data)); }
  async update(id:number, data: Partial<Conductor>) { await this.repo.update(id, data); return this.findOne(id); }
  delete(id:number) { return this.repo.delete(id); }
}
