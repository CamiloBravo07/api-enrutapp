import { Test, TestingModule } from '@nestjs/testing';
import { EstadosEncomiendaController } from './estados-encomienda.controller';

describe('EstadosEncomiendaController', () => {
  let controller: EstadosEncomiendaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EstadosEncomiendaController],
    }).compile();

    controller = module.get<EstadosEncomiendaController>(EstadosEncomiendaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
