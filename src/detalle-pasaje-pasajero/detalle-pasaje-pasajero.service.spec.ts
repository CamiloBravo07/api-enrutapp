import { Test, TestingModule } from '@nestjs/testing';
import { DetallePasajePasajeroService } from './detalle-pasaje-pasajero.service';

describe('DetallePasajePasajeroService', () => {
  let service: DetallePasajePasajeroService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DetallePasajePasajeroService],
    }).compile();

    service = module.get<DetallePasajePasajeroService>(DetallePasajePasajeroService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
