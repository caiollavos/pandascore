import { Test, TestingModule } from '@nestjs/testing';
import { PandaScoreController } from './pandascore.controller';
import { PandaScoreService } from '@services/panda-score/pandascore.service';

describe('PandaScoreController', () => {
  let controller: PandaScoreController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PandaScoreController],
      providers: [
        { 
          provide: PandaScoreService,
          useValue: { 
            getMatches: jest.fn(),
            getPlayers: jest.fn()
          }
        }
      ]
    }).compile();

    controller = module.get<PandaScoreController>(PandaScoreController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
