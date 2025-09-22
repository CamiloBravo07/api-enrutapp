import { Test, TestingModule } from '@nestjs/testing';
import { ReservasPrivadasService } from './reservas-privadas.service';

describe('ReservasPrivadasService', () => {
  let service: ReservasPrivadasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReservasPrivadasService],
    }).compile();

    service = module.get<ReservasPrivadasService>(ReservasPrivadasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
