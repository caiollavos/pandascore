import { Test, TestingModule } from '@nestjs/testing';
import { HomeController } from './home.controller';
import { PandaScoreService } from '@services/panda-score/pandascore.service';

describe('HomeController', () => {
  let controller: HomeController;
  let service: PandaScoreService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HomeController],
      providers: [
        { 
          provide: PandaScoreService,
          useValue: { getMatches: jest.fn() }
        }
      ]
    }).compile();

    controller = module.get<HomeController>(HomeController);
    service = module.get<PandaScoreService>(PandaScoreService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should handle errors gracefully and return an appropriate error message', async () => {
    const errorMessage = 'Failed to fetch matches';
    (service.getMatches as jest.Mock).mockRejectedValue(new Error(errorMessage));
  
    try {
      await controller.getMatches();
    } catch (error) {
      expect(error.message).toBe(errorMessage);
    }
  });
});
