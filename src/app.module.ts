import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ChampionModule } from './champion/champion.module';
import { DutyModule } from './duty/duty.module';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [PrismaModule, AuthModule, UserModule, ChampionModule, DutyModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
