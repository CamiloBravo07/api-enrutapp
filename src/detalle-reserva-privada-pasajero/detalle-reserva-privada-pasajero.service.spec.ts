import { Test, TestingModule } from '@nestjs/testing';
import { DetalleReservaPrivadaPasajeroService } from './detalle-reserva-privada-pasajero.service';

describe('DetalleReservaPrivadaPasajeroService', () => {
  let service: DetalleReservaPrivadaPasajeroService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DetalleReservaPrivadaPasajeroService],
    }).compile();

    service = module.get<DetalleReservaPrivadaPasajeroService>(DetalleReservaPrivadaPasajeroService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
