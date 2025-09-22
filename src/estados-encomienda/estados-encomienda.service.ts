import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EstadoEncomienda } from './entities/estado-encomienda.entity';

@Injectable()
export class EstadosEncomiendaService {
  constructor(@InjectRepository(EstadoEncomienda) private repo: Repository<EstadoEncomienda>) {}
  findAll() { return this.repo.find(); }
  findOne(id:number) { return this.repo.findOne({ where: { idEstadoEncomienda: id } }); }
  create(data: Partial<EstadoEncomienda>) { return this.repo.save(this.repo.create(data)); }
  async update(id:number, data: Partial<EstadoEncomienda>) { await this.repo.update(id, data); return this.findOne(id); }
  delete(id:number) { return this.repo.delete(id); }
}
