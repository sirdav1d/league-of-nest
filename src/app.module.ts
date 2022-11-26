import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { ChampionModule } from './champion/champion.module';
import { SkillModule } from './skill/skill.module';

@Module({
  imports: [PrismaModule, UserModule, ChampionModule, SkillModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
