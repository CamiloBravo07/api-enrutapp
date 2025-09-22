import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ReservaPrivada } from './entities/reserva-privada.entity';

@Injectable()
export class ReservasPrivadasService {
  constructor(@InjectRepository(ReservaPrivada) private repo: Repository<ReservaPrivada>) {}
  findAll() { return this.repo.find(); }
  findOne(id:number) { return this.repo.findOne({ where: { idReserva: id } }); }
  create(data: Partial<ReservaPrivada>) { return this.repo.save(this.repo.create(data)); }
  async update(id:number, data: Partial<ReservaPrivada>) { await this.repo.update(id, data); return this.findOne(id); }
  delete(id:number) { return this.repo.delete(id); }
}
