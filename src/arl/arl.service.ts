import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Arl } from './entities/arl.entity';

@Injectable()
export class ArlService {
  constructor(@InjectRepository(Arl) private repo: Repository<Arl>) {}
  findAll() { return this.repo.find(); }
  findOne(id:number) { return this.repo.findOne({ where: { idArl: id } }); }
  create(data: Partial<Arl>) { return this.repo.save(this.repo.create(data)); }
  async update(id:number, data: Partial<Arl>) { await this.repo.update(id, data); return this.findOne(id); }
  delete(id:number) { return this.repo.delete(id); }
}
