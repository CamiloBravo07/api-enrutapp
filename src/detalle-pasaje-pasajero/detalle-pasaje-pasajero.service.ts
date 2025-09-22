import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DetallePasajePasajero } from './entities/detalle-pasaje-pasajero.entity';

@Injectable()
export class DetallePasajePasajeroService {
  constructor(@InjectRepository(DetallePasajePasajero) private repo: Repository<DetallePasajePasajero>) {}
  findAll() { return this.repo.find(); }
  findOne(id:number) { return this.repo.findOne({ where: { idDetalle: id } }); }
  create(data: Partial<DetallePasajePasajero>) { return this.repo.save(this.repo.create(data)); }
  async update(id:number, data: Partial<DetallePasajePasajero>) { await this.repo.update(id, data); return this.findOne(id); }
  delete(id:number) { return this.repo.delete(id); }
}
