import { Test, TestingModule } from '@nestjs/testing';
import { PandaScoreService } from '../../services/panda-score/pandascore.service';
import { HttpModule } from '@nestjs/axios';

describe('PandascoreService', () => {
  let service: PandaScoreService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule],
      providers: [PandaScoreService],
    }).compile();

    service = module.get<PandaScoreService>(PandaScoreService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
