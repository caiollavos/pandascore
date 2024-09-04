import { Test, TestingModule } from '@nestjs/testing';
import { MatchesController } from './matches.controller';
import { PandaScoreService } from '@services/panda-score/pandascore.service';

describe('MatchesController', () => {
	let controller: MatchesController;
	let service: PandaScoreService;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			controllers: [MatchesController],
			providers: [
				{
					provide: PandaScoreService,
					useValue: {
						getMatches: jest.fn(),
            getUpcomingMatches: jest.fn()
					}
				}
			]
		}).compile();

		controller = module.get<MatchesController>(MatchesController);
		service = module.get<PandaScoreService>(PandaScoreService);
	});

	it('should be defined', () => {
		expect(controller).toBeDefined();
	});

	it('should handle errors gracefully and return an appropriate error message when call getMatches', async () => {
		const errorMessage = 'Failed to fetch matches';
		(service.getMatches as jest.Mock).mockRejectedValue(new Error(errorMessage));

		try {
			await controller.getMatches();
		} catch (error) {
			expect(error.message).toBe(errorMessage);
		}
	});

	it('should handle errors gracefully and return an appropriate error message when call getUpcomingMatches', async () => {
		const errorMessage = 'Failed to fetch matches';
		(service.getUpcomingMatches as jest.Mock).mockRejectedValue(new Error(errorMessage));

		try {
			await controller.getUpcomingMatches();
		} catch (error) {
			expect(error.message).toBe(errorMessage);
		}
	});
});
