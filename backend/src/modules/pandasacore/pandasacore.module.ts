import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { PandaScoreService } from '@services/pandascore/pandascore.service';

@Module({
    imports: [HttpModule],
    providers: [PandaScoreService]
})
export class PandaScoreModule {
    

}
