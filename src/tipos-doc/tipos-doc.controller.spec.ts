import { Test, TestingModule } from '@nestjs/testing';
import { TiposDocController } from './tipos-doc.controller';

describe('TiposDocController', () => {
  let controller: TiposDocController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TiposDocController],
    }).compile();

    controller = module.get<TiposDocController>(TiposDocController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
