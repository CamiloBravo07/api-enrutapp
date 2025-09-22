import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { HistorialEstadoEncomienda } from './entities/historial-estado-encomienda.entity';

@Injectable()
export class HistorialEstadoEncomiendaService {
  constructor(@InjectRepository(HistorialEstadoEncomienda) private repo: Repository<HistorialEstadoEncomienda>) {}
  findAll() { return this.repo.find(); }
  findOne(id:number) { return this.repo.findOne({ where: { idHistorial: id } }); }
  create(data: Partial<HistorialEstadoEncomienda>) { return this.repo.save(this.repo.create(data)); }
  async update(id:number, data: Partial<HistorialEstadoEncomienda>) { await this.repo.update(id, data); return this.findOne(id); }
  delete(id:number) { return this.repo.delete(id); }
}