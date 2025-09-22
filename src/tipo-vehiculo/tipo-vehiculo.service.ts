import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TipoVehiculo } from './entities/tipo-vehiculo.entity';

@Injectable()
export class TipoVehiculoService {
  constructor(@InjectRepository(TipoVehiculo) private repo: Repository<TipoVehiculo>) {}
  findAll() { return this.repo.find(); }
  findOne(id:number) { return this.repo.findOne({ where: { idTipoVehiculo: id } }); }
  create(data: Partial<TipoVehiculo>) { return this.repo.save(this.repo.create(data)); }
  async update(id:number, data: Partial<TipoVehiculo>) { await this.repo.update(id, data); return this.findOne(id); }
  delete(id:number) { return this.repo.delete(id); }
}
