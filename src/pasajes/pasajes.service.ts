import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pasaje } from './entities/pasaje.entity';

@Injectable()
export class PasajesService {
  constructor(@InjectRepository(Pasaje) private repo: Repository<Pasaje>) {}
  findAll() { return this.repo.find(); }
  findOne(id:number) { return this.repo.findOne({ where: { idPasaje: id } }); }
  create(data: Partial<Pasaje>) { return this.repo.save(this.repo.create(data)); }
  async update(id:number, data: Partial<Pasaje>) { await this.repo.update(id, data); return this.findOne(id); }
  delete(id:number) { return this.repo.delete(id); }
}
