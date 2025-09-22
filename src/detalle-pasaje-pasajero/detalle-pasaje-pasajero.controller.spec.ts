import { Test, TestingModule } from '@nestjs/testing';
import { DetallePasajePasajeroController } from './detalle-pasaje-pasajero.controller';

describe('DetallePasajePasajeroController', () => {
  let controller: DetallePasajePasajeroController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DetallePasajePasajeroController],
    }).compile();

    controller = module.get<DetallePasajePasajeroController>(DetallePasajePasajeroController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
