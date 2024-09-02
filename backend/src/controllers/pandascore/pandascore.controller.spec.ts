import { Test, TestingModule } from '@nestjs/testing';
import { PandascoreController } from './pandascore.controller';

describe('PandascoreController', () => {
  let controller: PandascoreController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PandascoreController],
    }).compile();

    controller = module.get<PandascoreController>(PandascoreController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
