import { HomeController } from '@controllers/home/home.controller';
import { PandaScoreModule } from '@modules/panda-sacore/pandasacore.module';
import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { PandaScoreService } from '@services/panda-score/pandascore.service';

@Module({
    imports: [PandaScoreModule, HttpModule],
    controllers: [HomeController],
    providers: [PandaScoreService],
    exports: [PandaScoreService]
})
export class HomeModule {
    
}
