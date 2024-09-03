import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from '@modules/auth/auth.module';
import { HomeModule } from '@modules/home/home.module';
import { PandaScoreModule } from '@modules/panda-sacore/pandasacore.module';
import { PlayersModule } from '@modules/players/players.module';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AuthModule,
    HomeModule,
    PlayersModule,
    PandaScoreModule,
  ],
  providers: [
    AppService
  ]
})
export class AppModule {}
