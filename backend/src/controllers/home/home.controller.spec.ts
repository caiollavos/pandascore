import { Test, TestingModule } from '@nestjs/testing';
import { HomeController } from './home.controller';
import { PandaScoreService } from '@services/panda-score/pandascore.service';

describe('AuthController', () => {
  let controller: HomeController;

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
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
