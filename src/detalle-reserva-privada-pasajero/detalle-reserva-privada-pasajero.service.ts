import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DetalleReservaPrivadaPasajero } from './entities/detalle-reserva-privada-pasajero.entity';

@Injectable()
export class DetalleReservaPrivadaPasajeroService {
  constructor(@InjectRepository(DetalleReservaPrivadaPasajero) private repo: Repository<DetalleReservaPrivadaPasajero>) {}
  findAll() { return this.repo.find(); }
  findOne(id:number) { return this.repo.findOne({ where: { idDetalle: id } }); }
  create(data: Partial<DetalleReservaPrivadaPasajero>) { return this.repo.save(this.repo.create(data)); }
  async update(id:number, data: Partial<DetalleReservaPrivadaPasajero>) { await this.repo.update(id, data); return this.findOne(id); }
  delete(id:number) { return this.repo.delete(id); }
}
