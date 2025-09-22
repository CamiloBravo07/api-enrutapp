import { Test, TestingModule } from '@nestjs/testing';
import { HistorialEstadoEncomiendaController } from './historial-estado-encomienda.controller';

describe('HistorialEstadoEncomiendaController', () => {
  let controller: HistorialEstadoEncomiendaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HistorialEstadoEncomiendaController],
    }).compile();

    controller = module.get<HistorialEstadoEncomiendaController>(HistorialEstadoEncomiendaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
