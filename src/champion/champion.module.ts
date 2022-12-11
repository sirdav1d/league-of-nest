import { Module } from '@nestjs/common';
import { ChampionService } from './champion.service';
import { ChampionController } from './champion.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [PrismaModule, PassportModule.register({ defaultStrategy: 'jwt' })],
  controllers: [ChampionController],
  providers: [ChampionService],
})
export class ChampionModule {}
