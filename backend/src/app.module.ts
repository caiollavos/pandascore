import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from '@modules/auth/auth.module';
import { HomeModule } from '@modules/home/home/home.module';
import { PandaScoreModule } from '@modules/pandasacore/pandasacore.module';
import { RouterModule } from '@nestjs/core';
import { AuthController } from '@controllers/auth/auth.controller';
import { HomeController } from '@controllers/home/home.controller';
import { AppService } from 'app.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AuthModule,
    HomeModule,
    PandaScoreModule,
    RouterModule.register([
      {
        path: 'auth',
        module: AuthController
      },
      {
        path: 'home',
        module: HomeController
      },
    ])
  ],
  providers: [
    AppService
  ]
})
export class AppModule {}
