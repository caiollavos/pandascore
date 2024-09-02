import { HomeController } from '@controllers/home/home.controller';
import { PandaScoreModule } from '@modules/pandasacore/pandasacore.module';
import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { PandaScoreService } from '@services/pandascore/pandascore.service';

@Module({
    imports: [PandaScoreModule, HttpModule],
    controllers: [HomeController],
    providers: [PandaScoreService],
    // Declare HomeModule as an export to make it accessible to other module
    exports: [PandaScoreService]
})
export class HomeModule {
    
}
