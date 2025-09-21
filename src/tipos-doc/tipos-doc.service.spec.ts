import { Test, TestingModule } from '@nestjs/testing';
import { TiposDocService } from './tipos-doc.service';

describe('TiposDocService', () => {
  let service: TiposDocService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TiposDocService],
    }).compile();

    service = module.get<TiposDocService>(TiposDocService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
