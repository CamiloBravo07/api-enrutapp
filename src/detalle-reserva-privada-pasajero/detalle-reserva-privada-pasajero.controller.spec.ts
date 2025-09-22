import { Test, TestingModule } from '@nestjs/testing';
import { DetalleReservaPrivadaPasajeroController } from './detalle-reserva-privada-pasajero.controller';

describe('DetalleReservaPrivadaPasajeroController', () => {
  let controller: DetalleReservaPrivadaPasajeroController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DetalleReservaPrivadaPasajeroController],
    }).compile();

    controller = module.get<DetalleReservaPrivadaPasajeroController>(DetalleReservaPrivadaPasajeroController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
