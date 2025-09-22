import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Vehiculo } from './entities/vehiculo.entity';

@Injectable()
export class VehiculosService {
  constructor(@InjectRepository(Vehiculo) private repo: Repository<Vehiculo>) {}
  findAll() { return this.repo.find(); }
  findOne(id:number) { return this.repo.findOne({ where: { idVehiculo: id } }); }
  create(data: Partial<Vehiculo>) { return this.repo.save(this.repo.create(data)); }
  async update(id:number, data: Partial<Vehiculo>) { await this.repo.update(id, data); return this.findOne(id); }
  delete(id:number) { return this.repo.delete(id); }
}
