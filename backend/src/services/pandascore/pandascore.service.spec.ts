import { Test, TestingModule } from '@nestjs/testing';
import { PandaScoreService } from '@services/pandascore/pandascore.service';

describe('PandascoreService', () => {
  let service: PandaScoreService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PandaScoreService],
    }).compile();

    service = module.get<PandaScoreService>(PandaScoreService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
