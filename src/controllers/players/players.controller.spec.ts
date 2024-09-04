import { Test, TestingModule } from '@nestjs/testing';
import { PlayersController } from './players.controller';
import { PandaScoreService } from '@services/panda-score/pandascore.service';

describe('AuthController', () => {
  let controller: PlayersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PlayersController],
      providers: [
        { 
          provide: PandaScoreService,
          useValue: { getPlayers: jest.fn() }
        }
      ]
    }).compile();

    controller = module.get<PlayersController>(PlayersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
