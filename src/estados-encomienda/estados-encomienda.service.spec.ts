import { Test, TestingModule } from '@nestjs/testing';
import { EstadosEncomiendaService } from './estados-encomienda.service';

describe('EstadosEncomiendaService', () => {
  let service: EstadosEncomiendaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EstadosEncomiendaService],
    }).compile();

    service = module.get<EstadosEncomiendaService>(EstadosEncomiendaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
