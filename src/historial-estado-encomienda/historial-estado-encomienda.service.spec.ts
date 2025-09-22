import { Test, TestingModule } from '@nestjs/testing';
import { HistorialEstadoEncomiendaService } from './historial-estado-encomienda.service';

describe('HistorialEstadoEncomiendaService', () => {
  let service: HistorialEstadoEncomiendaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HistorialEstadoEncomiendaService],
    }).compile();

    service = module.get<HistorialEstadoEncomiendaService>(HistorialEstadoEncomiendaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
