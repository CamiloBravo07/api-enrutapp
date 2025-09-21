import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TiposDoc } from './entities/tipo-doc.entity';

@Injectable()
export class TiposDocService {
  constructor(
    @InjectRepository(TiposDoc)
    private readonly tiposDocRepo: Repository<TiposDoc>,
  ) {}

  findAll() {
    return this.tiposDocRepo.find();
  }

  findOne(id: number) {
    return this.tiposDocRepo.findOne({ where: { idTipoDoc: id } });
  }

  create(data: Partial<TiposDoc>) {
    const nuevo = this.tiposDocRepo.create(data);
    return this.tiposDocRepo.save(nuevo);
  }

  async update(id: number, data: Partial<TiposDoc>) {
    await this.tiposDocRepo.update(id, data);
    return this.findOne(id);
  }

  delete(id: number) {
    return this.tiposDocRepo.delete(id);
  }
}
