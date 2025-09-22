import { Test, TestingModule } from '@nestjs/testing';
import { ReservasPrivadasController } from './reservas-privadas.controller';

describe('ReservasPrivadasController', () => {
  let controller: ReservasPrivadasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReservasPrivadasController],
    }).compile();

    controller = module.get<ReservasPrivadasController>(ReservasPrivadasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
