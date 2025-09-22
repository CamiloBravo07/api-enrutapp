import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Turno } from './entities/turno.entity';

@Injectable()
export class TurnosService {
  constructor(@InjectRepository(Turno) private repo: Repository<Turno>) {}
  findAll() { return this.repo.find(); }
  findOne(id:number) { return this.repo.findOne({ where: { idTurno: id } }); }
  create(data: Partial<Turno>) { return this.repo.save(this.repo.create(data)); }
  async update(id:number, data: Partial<Turno>) { await this.repo.update(id, data); return this.findOne(id); }
  delete(id:number) { return this.repo.delete(id); }
}
