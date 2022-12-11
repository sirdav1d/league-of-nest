import { Module } from '@nestjs/common';
import { DutyService } from './duty.service';
import { DutyController } from './duty.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [PrismaModule, PassportModule.register({ defaultStrategy: 'jwt' })],
  controllers: [DutyController],
  providers: [DutyService],
})
export class DutyModule {}
