import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MetodoPago } from './entities/metodo-pago.entity';

@Injectable()
export class MetodoPagoService {
  constructor(@InjectRepository(MetodoPago) private repo: Repository<MetodoPago>) {}
  findAll() { return this.repo.find(); }
  findOne(id:number) { return this.repo.findOne({ where: { idMetodoPago: id } }); }
  create(data: Partial<MetodoPago>) { return this.repo.save(this.repo.create(data)); }
  async update(id:number, data: Partial<MetodoPago>) { await this.repo.update(id, data); return this.findOne(id); }
  delete(id:number) { return this.repo.delete(id); }
}
